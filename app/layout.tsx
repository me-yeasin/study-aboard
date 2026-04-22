import type { Metadata } from "next";
import { Inter, Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";

/**
 * Body Font: Inter
 * - Clean, modern, highly readable on screens
 * - Used for: paragraphs, navigation, UI text
 */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

/**
 * Heading Font: Playfair Display
 * - Elegant serif with academic authority
 * - Used for: section headings, h1-h4, subheadings
 */
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

/**
 * Display Font: Poppins
 * - Geometric sans-serif, friendly and modern
 * - Used for: hero headlines, CTAs, large display text
 */
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Study Abroad - Your Gateway to Global Education",
  description: "Find your perfect study abroad program. Expert guidance for international education opportunities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
