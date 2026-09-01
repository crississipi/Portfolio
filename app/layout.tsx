import type { Metadata } from "next";
import { Roboto, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

const sourceSerif = Source_Serif_4({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-source-serif",
});

export const metadata: Metadata = {
  title: "Cris Julius Malipico | Portfolio",
  description:
    "Full-Stack Web Developer crafting fast, refined, and production-ready digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${roboto.variable} ${sourceSerif.variable} min-h-screen bg-[#0a0a0a] text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
