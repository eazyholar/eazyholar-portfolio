import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-serif",
});

const dmSans = DM_Sans({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Olanrewaju Abdulazeez — Frontend Dev · Web3 · Bot Architect",
  description:
    "Portfolio of Olanrewaju Abdulazeez (Eazyholar/Mendy) — building products at the edge of Web & Web3.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${dmSerif.variable} ${dmSans.variable}`}>
        {children}
      </body>
    </html>
  );
}