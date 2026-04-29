// app/gre-question-of-day/MarkdownRenderer.tsx
"use client";

import React, { useEffect, useRef, CSSProperties } from "react";

// ── KaTeX loader (singleton promise) ─────────────────────────────────────────
let _katexPromise: Promise<any> | null = null;
function loadKaTeX(): Promise<any> {
  if (_katexPromise) return _katexPromise;
  _katexPromise = new Promise<any>((resolve, reject) => {
    if (typeof window === "undefined") { reject("ssr"); return; }
    if ((window as any).katex) { resolve((window as any).katex); return; }
    if (!document.getElementById("_kx_css")) {
      const link  = document.createElement("link");
      link.id     = "_kx_css";
      link.rel    = "stylesheet";
      link.href   = "https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css";
      document.head.appendChild(link);
    }
    const s    = document.createElement("script");
    s.src      = "https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.js";
    s.onload   = () => resolve((window as any).katex);
    s.onerror  = reject;
    document.head.appendChild(s);
  });
  return _katexPromise;
}

// ── Single math node ──────────────────────────────────────────────────────────
function MathNode({ expr, display }: { expr: string; display: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    let alive = true;
    loadKaTeX()
      .then((katex) => {
        if (!alive || !ref.current) return;
        ref.current.innerHTML = katex.renderToString(expr.trim(), {
          displayMode: display, throwOnError: false, strict: false,
        });
      })
      .catch(() => {
        if (ref.current) ref.current.textContent = display ? `$$${expr}$$` : `$${expr}$`;
      });
    return () => { alive = false; };
  }, [expr, display]);

  return display ? (
    <span ref={ref} style={{ display: "block", textAlign: "center", margin: "8px 0", overflowX: "auto", maxWidth: "100%", lineHeight: 1.3 }}>
      {expr}
    </span>
  ) : (
    <span ref={ref} style={{ display: "inline", verticalAlign: "baseline" }}>{expr}</span>
  );
}

// ── Math + text splitter ──────────────────────────────────────────────────────
type Seg = { t: "tx"; v: string } | { t: "mi"; v: string } | { t: "md"; v: string };
function splitMath(raw: string): Seg[] {
  const out: Seg[] = [];
  const re = /(\$\$[\s\S]*?\$\$|\$(?:[^$\n\\]|\\.)+?\$)/g;
  let cur = 0, m: RegExpExecArray | null;
  while ((m = re.exec(raw)) !== null) {
    if (m.index > cur) out.push({ t: "tx", v: raw.slice(cur, m.index) });
    out.push(m[0].startsWith("$$")
      ? { t: "md", v: m[0].slice(2, -2) }
      : { t: "mi", v: m[0].slice(1, -1) });
    cur = m.index + m[0].length;
  }
  if (cur < raw.length) out.push({ t: "tx", v: raw.slice(cur) });
  return out;
}

// ── Inline text formatter (bold / italic / code) ──────────────────────────────
const IC: CSSProperties = {
  fontFamily: '"JetBrains Mono","Fira Mono","Courier New",monospace',
  fontSize: "0.86em", background: "#f1f5f9", color: "#1e293b",
  border: "1px solid #e2e8f0", borderRadius: 3, padding: "1px 4px",
};
function fmtText(text: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  const re = /(\*\*(.+?)\*\*|\*(.+?)\*|`([^`\n]+)`)/gs;
  let last = 0, k = 0, m: RegExpExecArray | null;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) nodes.push(text.slice(last, m.index));
    if (m[2] != null) nodes.push(<strong key={k++} style={{ fontWeight: 700 }}>{m[2]}</strong>);
    else if (m[3] != null) nodes.push(<em key={k++}>{m[3]}</em>);
    else if (m[4] != null) nodes.push(<code key={k++} style={IC}>{m[4]}</code>);
    last = m.index + m[0].length;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

function Inline({ text }: { text: string }) {
  return (
    <>
      {splitMath(text).flatMap((seg, i) => {
        if (seg.t === "mi") return [<MathNode key={i} expr={seg.v} display={false} />];
        if (seg.t === "md") return [<MathNode key={i} expr={seg.v} display={true} />];
        return fmtText(seg.v).map((n, j) => <React.Fragment key={`${i}-${j}`}>{n}</React.Fragment>);
      })}
    </>
  );
}

// ── Block parser ──────────────────────────────────────────────────────────────
type Block =
  | { k: "p";   text: string }
  | { k: "h";   level: 1 | 2 | 3; text: string }
  | { k: "pre"; lang: string; body: string }
  | { k: "bq";  lines: string[] }
  | { k: "ul";  items: string[] }
  | { k: "ol";  items: string[] }
  | { k: "hr" };

function parseBlocks(raw: string): Block[] {
  const lines = raw.split("\n");
  const out: Block[]  = [];
  const pBuf: string[] = [];
  let i = 0;
  const flush = () => { if (pBuf.length) { out.push({ k: "p", text: pBuf.join(" ") }); pBuf.length = 0; } };

  while (i < lines.length) {
    const line = lines[i], tr = line.trim();

    if (tr.startsWith("```")) {
      flush();
      const lang = tr.slice(3).trim(), body: string[] = [];
      i++;
      while (i < lines.length && !lines[i].trim().startsWith("```")) body.push(lines[i++]);
      i++;
      out.push({ k: "pre", lang, body: body.join("\n") }); continue;
    }
    if (/^[-*_]{3,}$/.test(tr)) { flush(); out.push({ k: "hr" }); i++; continue; }
    const hm = tr.match(/^(#{1,3})\s+(.+)/);
    if (hm) { flush(); out.push({ k: "h", level: hm[1].length as 1|2|3, text: hm[2] }); i++; continue; }
    if (tr.startsWith(">")) {
      flush();
      const bq: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith(">")) bq.push(lines[i++].trim().replace(/^>\s?/, ""));
      out.push({ k: "bq", lines: bq }); continue;
    }
    if (/^[-*]\s/.test(tr)) {
      flush();
      const items: string[] = [];
      while (i < lines.length && /^[-*]\s/.test(lines[i].trim())) items.push(lines[i++].trim().slice(2));
      out.push({ k: "ul", items }); continue;
    }
    if (/^\d+\.\s/.test(tr)) {
      flush();
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i].trim())) items.push(lines[i++].trim().replace(/^\d+\.\s/, ""));
      out.push({ k: "ol", items }); continue;
    }
    if (tr === "") { flush(); i++; continue; }
    pBuf.push(tr); i++;
  }
  flush();
  return out;
}

// ── Block renderer ────────────────────────────────────────────────────────────
const SERIF = 'Georgia, "Times New Roman", serif';
const SANS  = "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";
const MONO  = '"JetBrains Mono","Fira Mono","Courier New",monospace';
const BS    = "13.5px";
const BLH   = 1.78;

function RB({ b, last }: { b: Block; last: boolean }) {
  const mb = (n: number) => last ? 0 : n;
  switch (b.k) {
    case "p":
      return (
        <p style={{ margin: `0 0 ${mb(8)}px`, padding: 0, fontSize: BS, lineHeight: BLH, color: "#1e293b", fontFamily: SERIF }}>
          <Inline text={b.text} />
        </p>
      );
    case "h": {
      const cfg = [
        { fs: "16px", fw: 700, mt: 14, mb: 6, bb: "1px solid #e2e8f0", pb: 6 },
        { fs: "14px", fw: 650, mt: 10, mb: 4, bb: "none", pb: 0 },
        { fs: "13px", fw: 600, mt: 8,  mb: 3, bb: "none", pb: 0 },
      ][b.level - 1];
      return (
        <div style={{ fontSize: cfg.fs, fontWeight: cfg.fw, color: "#0f172a", fontFamily: SANS, margin: `${cfg.mt}px 0 ${mb(cfg.mb)}px`, lineHeight: 1.3, borderBottom: cfg.bb, paddingBottom: cfg.pb }}>
          <Inline text={b.text} />
        </div>
      );
    }
    case "bq":
      return (
        <div style={{ borderLeft: "3px solid #6366f1", paddingLeft: 12, margin: `0 0 ${mb(8)}px`, color: "#64748b", fontSize: "13px", lineHeight: 1.7, fontStyle: "italic", fontFamily: SERIF }}>
          {b.lines.map((l, idx) => <div key={idx}><Inline text={l} /></div>)}
        </div>
      );
    case "pre":
      return (
        <pre style={{ margin: `0 0 ${mb(8)}px`, padding: "10px 14px", fontSize: "11.5px", lineHeight: 1.6, overflowX: "auto", color: "#1e293b", background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 6, fontFamily: MONO }}>
          <code style={{ background: "none", border: "none", padding: 0, fontFamily: "inherit" }}>{b.body}</code>
        </pre>
      );
    case "ul":
      return (
        <ul style={{ margin: `0 0 ${mb(8)}px`, padding: 0, paddingLeft: 18, fontSize: BS, lineHeight: BLH, color: "#1e293b", fontFamily: SERIF }}>
          {b.items.map((item, j) => <li key={j} style={{ marginBottom: j === b.items.length - 1 ? 0 : 3 }}><Inline text={item} /></li>)}
        </ul>
      );
    case "ol":
      return (
        <ol style={{ margin: `0 0 ${mb(8)}px`, padding: 0, paddingLeft: 18, fontSize: BS, lineHeight: BLH, color: "#1e293b", fontFamily: SERIF }}>
          {b.items.map((item, j) => <li key={j} style={{ marginBottom: j === b.items.length - 1 ? 0 : 3 }}><Inline text={item} /></li>)}
        </ol>
      );
    case "hr":
      return <hr style={{ border: "none", borderTop: "1px solid #e2e8f0", margin: last ? "8px 0 0" : "8px 0" }} />;
    default:
      return null;
  }
}

// ── Public export ─────────────────────────────────────────────────────────────
export function MarkdownRenderer({
  text,
  className,
  style,
}: {
  text: string;
  className?: string;
  style?: CSSProperties;
}) {
  if (!text?.trim()) return null;
  const blocks = parseBlocks(text);
  if (!blocks.length) return null;
  return (
    <div className={className} style={{ margin: 0, padding: 0, ...style }}>
      {blocks.map((b, i) => <RB key={i} b={b} last={i === blocks.length - 1} />)}
    </div>
  );
}