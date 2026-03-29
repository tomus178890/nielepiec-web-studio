import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const headingFont = Space_Grotesk({
  subsets: ["latin", "latin-ext"],
  variable: "--font-heading"
});

const bodyFont = DM_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body"
});

export const metadata: Metadata = {
  title: "Nielepiec Web Studio | Strony internetowe dla firm",
  description:
    "Nowoczesne landing page i strony internetowe dla firm, marek osobistych i lokalnych biznesów. Projekt, wdrożenie i wsparcie od Nielepiec Web Studio.",
  keywords: [
    "strony internetowe",
    "landing page",
    "web designer",
    "freelancer",
    "strony dla firm",
    "Nielepiec Web Studio"
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}
