import type { Metadata } from "next";
import { Inclusive_Sans } from "next/font/google";
import "./globals.css";

const inclusiveSans = Inclusive_Sans({
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Cris Julius Malipico - Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inclusiveSans} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
