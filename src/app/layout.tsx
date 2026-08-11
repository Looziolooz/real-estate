import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Meridia — a catalogue of nine houses",
  description:
    "Nine houses in warm places, chosen over four years and plotted with the measurements you cannot take from a dark country.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">{children}</body>
    </html>
  );
}
