import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nordhem — Bostäder med själ",
  description:
    "Vi förmedlar utvalda bostäder i Skandinavien — med omsorg för proportioner, ljus, och tystnaden mellan rummen.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" suppressHydrationWarning>
      <body className="antialiased">{children}</body>
    </html>
  );
}
