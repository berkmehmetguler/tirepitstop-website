import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "TirePitStop - Mobile Tire Service in Edmonton",
  description: "Created with v0",
  generator: "v0.app",
  authors: [{ name: "TirePitStop", url: "https://tirepitstop.ca" }],
  keywords: ["TirePitStop", "Tire Service", "Edmonton",
    "Mobile Tire Service", "Roadside Assistance", "Tire Repair", "Tire Change", "Flat Tire", "Tire Replacement"],
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>

      </head>
      <body>{children}</body>
    </html>
  );
}
