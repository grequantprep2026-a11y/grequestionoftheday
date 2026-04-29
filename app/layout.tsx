import type { Metadata } from "next";
import { Sora, Source_Serif_4 } from "next/font/google";

import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "600", "700", "800"],
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://grequestionoftheday.vercel.app"),
  icons: {
  icon: "/icon.svg",
},
  title: {
    default: "GRE Daily Prep - Free GRE Question of the Day",
    template: "%s | GRE Daily Prep",
  },
  description:
    "Free daily GRE math practice questions. Build your GRE quantitative score one question at a time.",
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="google-site-verification" content="fsuB0os2zhe1ez8vT85opTjmU4nqLdUZA4BLA1qBeTI" />
      <body
        className={`${sora.variable} ${sourceSerif.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
