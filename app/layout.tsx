import type { Metadata } from "next";
import { Fredoka, Nunito_Sans, Caveat } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-fred",
});

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-nunito",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-caveat",
});

export const metadata: Metadata = {
  title: "Nurul Amaliah — Portfolio",
  description:
    "Political Science graduate & Master's student in Politics and Government, working at the intersection of governance research, digital storytelling, and social media strategy.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fredoka.variable} ${nunito.variable} ${caveat.variable}`}>
      <body className="font-body text-ink antialiased">{children}</body>
    </html>
  );
}
