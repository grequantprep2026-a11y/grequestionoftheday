// app/gre-question-of-day/QuestionClient.tsx
"use client";

import { useState, useEffect, useCallback } from "react";
import type { Question } from "@/lib/getDailyQuestion";
import { MarkdownRenderer } from "./MarkdownRenderer";

// ─────────────────────────────────────────────────────────────────────────────
// Types / constants
// ─────────────────────────────────────────────────────────────────────────────
interface Props {
  question: Question;
  topic: string;
  questionNumber: number;
  totalQuestions: number;
  formattedDate: string;
  allTopics: { topic: string; count: number }[];
}

const QC_OPTIONS: { key: string; label: string }[] = [
  { key: "A", label: "Quantity A is greater." },
  { key: "B", label: "Quantity B is greater." },
  { key: "C", label: "The two quantities are equal." },
  { key: "D", label: "The relationship cannot be determined from the information given." },
];

const TYPE_META: Record<string, { label: string; color: string; bg: string }> = {
  quantitative_comparison: { label: "Quantitative Comparison", color: "#6d28d9", bg: "#ede9fe" },
  numeric_entry:           { label: "Numeric Entry",           color: "#b45309", bg: "#fef3c7" },
  multiple_choice:         { label: "Multiple Choice",         color: "#0369a1", bg: "#e0f2fe" },
  select_all:              { label: "Select All That Apply",   color: "#065f46", bg: "#d1fae5" },
};

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────
function Pill({ label, color, bg }: { label: string; color: string; bg: string }) {
  return (
    <span style={{
      display: "inline-block", padding: "2px 10px", borderRadius: 99,
      fontSize: 11, fontWeight: 700, letterSpacing: ".04em",
      color, background: bg, border: `1px solid ${color}22`,
      fontFamily: "-apple-system, sans-serif", textTransform: "uppercase",
    }}>
      {label}
    </span>
  );
}

function OptionRow({
  label, text, selected, submitted, correct, onClick,
}: {
  label?: string; text: string; selected: boolean;
  submitted: boolean; correct: boolean; onClick: () => void;
}) {
  const isWrong = submitted && selected && !correct;

  const borderColor = correct  ? "#10b981"
    : isWrong                  ? "#ef4444"
    : selected && !submitted   ? "#6366f1"
    : "#e2e8f0";

  const textColor   = correct  ? "#065f46"
    : isWrong                  ? "#991b1b"
    : "#1e293b";

  return (
    <button
      onClick={onClick}
      disabled={submitted}
      style={{
        display: "flex", alignItems: "flex-start", gap: 12,
        width: "100%", textAlign: "left",
        padding: "12px 14px", borderRadius: 10,
        border: `1.5px solid ${borderColor}`,
        background: correct ? "#ecfdf5" : isWrong ? "#fef2f2" : selected && !submitted ? "#eef2ff" : "#fff",
        cursor: submitted ? "default" : "pointer",
        transition: "all .15s", marginBottom: 8,
        boxShadow: selected && !submitted ? "0 0 0 3px #6366f122" : "none",
      }}
    >
      {label && (
        <span style={{
          flexShrink: 0, width: 26, height: 26, borderRadius: 6,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontWeight: 700, fontSize: 12, marginTop: 2,
          background: correct ? "#10b981" : isWrong ? "#ef4444" : selected && !submitted ? "#6366f1" : "#f1f5f9",
          color: correct || isWrong || (selected && !submitted) ? "#fff" : "#64748b",
          fontFamily: "-apple-system, sans-serif",
        }}>
          {label}
        </span>
      )}
      <span style={{ fontSize: 14, lineHeight: 1.65, color: textColor, fontFamily: 'Georgia, serif' }}>
        <MarkdownRenderer text={text} />
      </span>
    </button>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Main component
// ─────────────────────────────────────────────────────────────────────────────
export default function QuestionClient({
  question, topic, questionNumber, totalQuestions, formattedDate, allTopics,
}: Props) {
  const [selected,     setSelected]     = useState<string | string[] | null>(null);
  const [submitted,    setSubmitted]    = useState(false);
  const [showExp,      setShowExp]      = useState(false);
  const [numeric,      setNumeric]      = useState("");
  const [copied,       setCopied]       = useState(false);
  const [imgExpanded,  setImgExpanded]  = useState(false);

  const meta = TYPE_META[question.type] ?? { label: question.type, color: "#64748b", bg: "#f1f5f9" };

  // answer check
  const isCorrect = useCallback((): boolean => {
    if (question.type === "numeric_entry") return numeric.trim() === String(question.answer);
    if (question.type === "select_all") {
      const ans = question.answer as string[];
      const sel = (selected as string[]) ?? [];
      return sel.length === ans.length && ans.every((a) => sel.includes(a));
    }
    return selected === question.answer;
  }, [question, selected, numeric]);

  function toggleSelectAll(opt: string) {
    const cur = (selected as string[]) ?? [];
    setSelected(cur.includes(opt) ? cur.filter((x) => x !== opt) : [...cur, opt]);
  }

  function handleSubmit() {
    if (question.type === "numeric_entry" && !numeric.trim()) return;
    if (question.type !== "numeric_entry" && !selected &&
        !(question.type === "select_all" && (selected as string[] | null)?.length)) return;
    setSubmitted(true);
    setTimeout(() => setShowExp(true), 500);
  }

  const correct = submitted ? isCorrect() : null;

  // reset on question change
  useEffect(() => {
    setSelected(null); setSubmitted(false); setShowExp(false); setNumeric(""); setImgExpanded(false);
  }, [question.id]);

  function copyLink() {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true); setTimeout(() => setCopied(false), 2000);
  }

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <div style={{ minHeight: "100vh", background: "#fafafa", fontFamily: "-apple-system, sans-serif" }}>


      {/* ── Main ─────────────────────────────────────────────────────────────── */}
      <main style={{ maxWidth: 1140, margin: "0 auto", padding: "0 20px" }}>

        {/* ── Article header ──────────────────────────────────────────────── */}
        <div style={{ padding: "48px 0 32px", borderBottom: "1px solid #e2e8f0", marginBottom: 36 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
            <Pill label={meta.label} color={meta.color} bg={meta.bg} />
            <Pill label={topic} color="#475569" bg="#f1f5f9" />
            <span style={{ fontSize: 11, color: "#94a3b8", fontWeight: 500 }}>#{questionNumber} of {totalQuestions}</span>
          </div>

          <h1 style={{ fontSize: "clamp(22px,4vw,34px)", fontWeight: 800, color: "#0f172a", lineHeight: 1.2, margin: "0 0 10px", letterSpacing: "-.03em", fontFamily: "'Georgia', serif" }}>
            GRE Question of the Day
          </h1>
          <p style={{ fontSize: 13, color: "#94a3b8", margin: 0, fontWeight: 500 }}>
            {formattedDate} · Free daily GRE Quantitative Reasoning practice
          </p>
        </div>

        {/* ── Two-column layout: question + image ─────────────────────────── */}
        <div style={{ display: "grid", gridTemplateColumns: question.image ? "1fr 360px" : "1fr", gap: 40, alignItems: "flex-start", marginBottom: 40 }}>

          {/* LEFT — Question card ─────────────────────────────────────────── */}
          <section aria-label="Today's GRE question">

            {/* Context */}
            {question.context && (
              <div style={{ borderLeft: "3px solid #6366f1", paddingLeft: 16, marginBottom: 20, color: "#475569", fontSize: 14, lineHeight: 1.75, fontFamily: "Georgia, serif" }}>
                <MarkdownRenderer text={question.context} />
              </div>
            )}

            {/* Question text */}
            {question.text && (
              <div style={{ fontSize: 16, fontWeight: 600, color: "#0f172a", lineHeight: 1.6, marginBottom: 24, fontFamily: "Georgia, serif" }}>
                <MarkdownRenderer text={question.text} />
              </div>
            )}

            {/* ── QC ──────────────────────────────────────────────────────── */}
            {question.type === "quantitative_comparison" && (
              <>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 20 }}>
                  <div style={{ border: "1.5px solid #c7d2fe", borderRadius: 10, padding: "18px 16px", background: "#eef2ff" }}>
                    <div style={{ fontSize: 10, fontWeight: 800, color: "#818cf8", letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 8 }}>Quantity A</div>
                    <div style={{ fontSize: 16, fontWeight: 600, color: "#3730a3", fontFamily: "Georgia, serif", lineHeight: 1.5 }}>
                      <MarkdownRenderer text={question.quantity_a ?? ""} />
                    </div>
                  </div>
                  <div style={{ border: "1.5px solid #ddd6fe", borderRadius: 10, padding: "18px 16px", background: "#f5f3ff" }}>
                    <div style={{ fontSize: 10, fontWeight: 800, color: "#a78bfa", letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 8 }}>Quantity B</div>
                    <div style={{ fontSize: 16, fontWeight: 600, color: "#4c1d95", fontFamily: "Georgia, serif", lineHeight: 1.5 }}>
                      <MarkdownRenderer text={question.quantity_b ?? ""} />
                    </div>
                  </div>
                </div>
                <div style={{ marginBottom: 20 }}>
                  {QC_OPTIONS.map(({ key, label }) => (
                    <OptionRow key={key} label={key} text={label}
                      selected={selected === key} submitted={submitted}
                      correct={submitted && question.answer === key}
                      onClick={() => !submitted && setSelected(key)} />
                  ))}
                </div>
              </>
            )}

            {/* ── Multiple choice ─────────────────────────────────────────── */}
            {question.type === "multiple_choice" && question.options && (
              <div style={{ marginBottom: 20 }}>
                {Object.entries(question.options as Record<string, string>).map(([key, val]) => (
                  <OptionRow key={key} label={key} text={val}
                    selected={selected === key} submitted={submitted}
                    correct={submitted && question.answer === key}
                    onClick={() => !submitted && setSelected(key)} />
                ))}
              </div>
            )}

            {/* ── Select all ──────────────────────────────────────────────── */}
            {question.type === "select_all" && Array.isArray(question.options) && (
              <div style={{ marginBottom: 20 }}>
                <p style={{ fontSize: 12, color: "#94a3b8", fontStyle: "italic", margin: "0 0 10px" }}>Select all that apply.</p>
                {(question.options as string[]).map((opt) => {
                  const sel = ((selected as string[]) ?? []).includes(opt);
                  const cor = (question.answer as string[]).includes(opt);
                  return (
                    <OptionRow key={opt} text={opt}
                      selected={sel} submitted={submitted}
                      correct={submitted && cor}
                      onClick={() => !submitted && toggleSelectAll(opt)} />
                  );
                })}
              </div>
            )}

            {/* ── Numeric entry ────────────────────────────────────────────── */}
            {question.type === "numeric_entry" && (
              <div style={{ marginBottom: 20 }}>
                <label style={{ display: "block", fontSize: 12, color: "#64748b", marginBottom: 8 }}>Enter your answer:</label>
                <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                  <input
                    type="text" inputMode="decimal" value={numeric}
                    disabled={submitted}
                    onChange={(e) => !submitted && setNumeric(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && !submitted && handleSubmit()}
                    placeholder="Type answer…"
                    style={{
                      width: 180, padding: "11px 14px", fontSize: 16,
                      border: `1.5px solid ${!submitted ? "#e2e8f0" : correct ? "#10b981" : "#ef4444"}`,
                      borderRadius: 8, background: "#fff", color: "#0f172a",
                      outline: "none", fontFamily: "Georgia, serif",
                      boxSizing: "border-box",
                    }}
                  />
                  {submitted && (
                    <span style={{ fontWeight: 700, fontSize: 14, color: correct ? "#10b981" : "#ef4444" }}>
                      {correct ? "✓ Correct" : `Answer: ${question.answer}`}
                    </span>
                  )}
                </div>
              </div>
            )}

            {/* ── Submit / result ──────────────────────────────────────────── */}
            {!submitted ? (
              <button
                onClick={handleSubmit}
                disabled={
                  question.type === "numeric_entry"
                    ? !numeric.trim()
                    : !selected && !(question.type === "select_all" && (selected as string[] | null)?.length)
                }
                style={{
                  width: "100%", padding: "14px 0", borderRadius: 10,
                  background: "linear-gradient(135deg,#4f46e5,#7c3aed)",
                  color: "#fff", fontWeight: 700, fontSize: 14,
                  border: "none", cursor: "pointer", letterSpacing: ".02em",
                  boxShadow: "0 4px 14px rgba(99,102,241,.35)",
                  transition: "opacity .15s",
                  opacity: 1,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = ".88")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                Check My Answer →
              </button>
            ) : (
              <div style={{
                display: "flex", alignItems: "flex-start", gap: 14, padding: "16px 18px",
                borderRadius: 10, marginBottom: 4,
                border: `1.5px solid ${correct ? "#6ee7b7" : "#fca5a5"}`,
                background: correct ? "#ecfdf5" : "#fef2f2",
              }}>
                <div style={{
                  width: 36, height: 36, borderRadius: "50%", flexShrink: 0,
                  background: correct ? "#10b981" : "#ef4444",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  {correct
                    ? <svg width={18} fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    : <svg width={18} fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" /></svg>
                  }
                </div>
                <div>
                  <p style={{ fontWeight: 700, fontSize: 14, color: correct ? "#065f46" : "#991b1b", margin: "0 0 4px" }}>
                    {correct ? "Excellent — that's correct!" : "Not quite — keep going!"}
                  </p>
                  {!correct && (
                    <p style={{ fontSize: 13, color: "#475569", margin: 0 }}>
                      Correct answer: <strong style={{ color: "#0f172a" }}>
                        {Array.isArray(question.answer) ? question.answer.join(", ") : question.answer}
                      </strong>
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* ── Explanation ──────────────────────────────────────────────── */}
            {showExp && (
              <div style={{
                marginTop: 24, borderRadius: 10, overflow: "hidden",
                border: "1px solid #fde68a",
                animation: "fadeUp .4s ease both",
              }}>
                <div style={{ padding: "12px 18px", background: "#fffbeb", borderBottom: "1px solid #fde68a", display: "flex", alignItems: "center", gap: 8 }}>
                  <svg width={15} fill="#f59e0b" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" /></svg>
                  <span style={{ fontWeight: 700, fontSize: 13, color: "#92400e" }}>Full Explanation</span>
                </div>
                <div style={{ padding: "18px 20px", background: "#fff" }}>
                  <MarkdownRenderer text={question.explanation} />
                </div>
              </div>
            )}
          </section>

          {/* RIGHT — image + sidebar info ───────────────────────────────────── */}
          {question.image && (
            <aside aria-label="Question diagram">
              {/* Sticky image card */}
              <div style={{ position: "sticky", top: 72 }}>
                <div style={{ borderRadius: 12, overflow: "hidden", border: "1px solid #e2e8f0", background: "#fff", boxShadow: "0 2px 12px rgba(0,0,0,.06)", marginBottom: 16 }}>
                  <div style={{ padding: "10px 14px", borderBottom: "1px solid #f1f5f9", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ fontSize: 11, fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: ".06em" }}>Diagram / Figure</span>
                    <button
                      onClick={() => setImgExpanded(!imgExpanded)}
                      style={{ fontSize: 11, color: "#6366f1", border: "none", background: "none", cursor: "pointer", fontWeight: 600 }}
                    >
                      {imgExpanded ? "Collapse" : "Expand"}
                    </button>
                  </div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={question.image}
                    alt={`Diagram for GRE ${topic} question`}
                    style={{
                      width: "100%",
                      maxHeight: imgExpanded ? "none" : 280,
                      objectFit: "contain",
                      display: "block",
                      transition: "max-height .3s ease",
                      padding: 12,
                    }}
                  />
                </div>

                {/* Tip card below image */}
                <div style={{ borderRadius: 10, border: "1px solid #e2e8f0", background: "#fff", padding: "14px 16px" }}>
                  <p style={{ fontSize: 11, fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: ".06em", margin: "0 0 10px" }}>For Image Questions</p>
                  <ul style={{ margin: 0, padding: 0, paddingLeft: 16, fontSize: 13, color: "#475569", lineHeight: 1.7, fontFamily: "Georgia, serif" }}>
                    <li>Label all variables from the diagram before solving.</li>
                    <li>Figures are drawn roughly to scale unless stated otherwise.</li>
                    <li>Use geometric properties, not visual estimation.</li>
                  </ul>
                </div>
              </div>
            </aside>
          )}
        </div>

        {/* ── Three-column article section (below question) ─────────────────── */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 280px", gap: 40,paddingBottom:50 }}>

          {/* Article body — SEO prose ─────────────────────────────────────── */}
          <article style={{ borderTop: "1px solid #e2e8f0", paddingTop: 32 }}>
            <h2 style={{ fontSize: 20, fontWeight: 700, color: "#0f172a", margin: "0 0 14px", fontFamily: "Georgia, serif", letterSpacing: "-.02em" }}>
              About Today's GRE Question
            </h2>
            <p style={{ fontSize: 14, color: "#475569", lineHeight: 1.8, margin: "0 0 16px", fontFamily: "Georgia, serif" }}>
              Today's question is drawn from the <strong style={{ color: "#0f172a" }}>{topic}</strong> topic and is classified as a{" "}
              <strong style={{ color: "#0f172a" }}>{meta.label}</strong> problem — one of the four core formats tested on the{" "}
              <strong style={{ color: "#0f172a" }}>GRE Quantitative Reasoning</strong> section. Understanding this format is crucial for achieving
              a high GRE Quant score, as it tests not only mathematical knowledge but also strategic thinking.
            </p>
            <p style={{ fontSize: 14, color: "#475569", lineHeight: 1.8, margin: "0 0 16px", fontFamily: "Georgia, serif" }}>
              Consistent daily practice is the #1 predictor of GRE score improvement. Our question of the day rotates through all{" "}
              <strong style={{ color: "#0f172a" }}>23 quantitative topics</strong> — arithmetic, algebra, geometry, data interpretation, and more —
              so you build fluency steadily over time without cramming.
            </p>

            <h3 style={{ fontSize: 16, fontWeight: 700, color: "#0f172a", margin: "24px 0 10px", fontFamily: "Georgia, serif" }}>
              GRE Quantitative Reasoning: Question Types Explained
            </h3>
            <p style={{ fontSize: 14, color: "#475569", lineHeight: 1.8, margin: "0 0 16px", fontFamily: "Georgia, serif" }}>
              The GRE Quantitative section features four distinct question formats. <strong>Quantitative Comparison</strong> questions ask you to
              compare two quantities (A and B), requiring estimation and algebraic thinking. <strong>Multiple Choice</strong> questions have one
              correct answer from five options. <strong>Select All That Apply</strong> may have one or more correct answers.{" "}
              <strong>Numeric Entry</strong> requires you to compute and type an exact answer — no options provided.
            </p>

            <h3 style={{ fontSize: 16, fontWeight: 700, color: "#0f172a", margin: "24px 0 10px", fontFamily: "Georgia, serif" }}>
              How to Use GRE Daily Practice Effectively
            </h3>
            <p style={{ fontSize: 14, color: "#475569", lineHeight: 1.8, margin: "0 0 24px", fontFamily: "Georgia, serif" }}>
              Answer each question before reading the explanation. Review not just the correct answer but <em>why</em> it is correct and where
              your reasoning differed. Over time, you will recognize recurring patterns and solve problems faster — a key advantage when time
              pressure is a factor on test day.
            </p>

            {/* Stats strip */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14, padding: "20px 0", borderTop: "1px solid #e2e8f0", borderBottom: "1px solid #e2e8f0", marginBottom: 24 }}>
              {[
                { label: "Question Types", value: "4" },
                { label: "Math Topics", value: "23" },
                { label: "Questions in Pool", value: String(totalQuestions) },
                { label: "Updated Every", value: "24 hrs" },
              ].map(({ label, value }) => (
                <div key={label} style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 26, fontWeight: 800, color: "#4f46e5", lineHeight: 1, marginBottom: 4, fontFamily: "Georgia, serif" }}>{value}</div>
                  <div style={{ fontSize: 11, color: "#94a3b8", fontWeight: 600, textTransform: "uppercase", letterSpacing: ".05em" }}>{label}</div>
                </div>
              ))}
            </div>
          </article>

          {/* Sidebar ─────────────────────────────────────────────────────────── */}
          <aside style={{ paddingTop: 32 }}>


            {/* Quick tips */}
            <div style={{ borderRadius: 12, border: "1px solid #e2e8f0", background: "#fff", padding: 18, marginBottom: 16 }}>
              <p style={{ fontSize: 11, fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: ".06em", margin: "0 0 12px" }}>GRE Quick Tips</p>
              {[
                "Read all choices before solving.",
                "Estimate to eliminate impossible answers.",
                "For QC, test 0, 1, negatives, fractions.",
                "Watch for trap answers near the right value.",
              ].map((tip, i) => (
                <div key={i} style={{ display: "flex", gap: 10, marginBottom: i < 3 ? 10 : 0 }}>
                  <span style={{ flexShrink: 0, width: 20, height: 20, borderRadius: "50%", background: "#eef2ff", color: "#6366f1", fontSize: 10, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center" }}>{i + 1}</span>
                  <span style={{ fontSize: 13, color: "#475569", lineHeight: 1.6, fontFamily: "Georgia, serif" }}>{tip}</span>
                </div>
              ))}
            </div>

            {/* Topics */}
            <div style={{ borderRadius: 12, border: "1px solid #e2e8f0", background: "#fff", padding: 18 }}>
              <p style={{ fontSize: 11, fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: ".06em", margin: "0 0 12px" }}>Topics Covered</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {allTopics.map(({ topic: t, count }) => (
                  <span key={t} title={`${count} questions`} style={{
                    padding: "3px 9px", borderRadius: 99, fontSize: 11.5, fontWeight: 600,
                    background: t === topic ? "#4f46e5" : "#f8fafc",
                    color: t === topic ? "#fff" : "#475569",
                    border: `1px solid ${t === topic ? "#4f46e5" : "#e2e8f0"}`,
                    cursor: "default",
                  }}>
                    {t}
                  </span>
                ))}
              </div>
              <p style={{ fontSize: 11, color: "#cbd5e1", margin: "10px 0 0" }}>More topics coming soon. Questions rotate daily.</p>
            </div>
          </aside>
        </div>
      </main>

 

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        button:disabled { opacity: .45; cursor: default; }
        @media (max-width: 768px) {
          main > div[style*="gridTemplateColumns"] { grid-template-columns: 1fr !important; }
          header nav { display: none !important; }
        }
      `}</style>
    </div>
  );
}