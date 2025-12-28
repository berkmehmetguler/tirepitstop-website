import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://tirepitstop.ca";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "TirePitStop - Mobile Tire Service & Roadside Assistance in Edmonton, AB",
    template: "%s | TirePitStop Edmonton"
  },
  description: "Edmonton's #1 mobile tire service. 24/7 roadside assistance, tire replacement, flat tire repair, and seasonal tire changes. We come to you anywhere in Edmonton, AB. Fast response, certified technicians, transparent pricing.",
  keywords: [
    "mobile tire service Edmonton",
    "roadside assistance Edmonton",
    "tire replacement Edmonton",
    "flat tire repair Edmonton",
    "emergency tire service Edmonton",
    "mobile tire change Edmonton",
    "tire repair Edmonton",
    "seasonal tire swap Edmonton",
    "24/7 tire service Edmonton",
    "tire service near me Edmonton",
    "mobile tire technician Edmonton",
    "roadside tire service Edmonton",
    "tire installation Edmonton",
    "winter tire change Edmonton",
    "summer tire change Edmonton",
    "fleet tire service Edmonton",
    "commercial tire service Edmonton",
    "TirePitStop",
    "Edmonton tire service",
    "Alberta mobile tire service"
  ],
  authors: [{ name: "TirePitStop", url: siteUrl }],
  creator: "TirePitStop",
  publisher: "TirePitStop",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: siteUrl,
    siteName: "TirePitStop",
    title: "TirePitStop - Mobile Tire Service & Roadside Assistance in Edmonton, AB",
    description: "Edmonton's trusted mobile tire service. 24/7 roadside assistance, tire replacement, flat tire repair, and seasonal tire changes. Fast response, certified technicians, we come to you!",
    images: [
      {
        url: `${siteUrl}/tirepitstop-technician-with-van-edmonton.png`,
        width: 1200,
        height: 630,
        alt: "TirePitStop Mobile Tire Service in Edmonton",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TirePitStop - Mobile Tire Service in Edmonton, AB",
    description: "24/7 mobile tire service & roadside assistance in Edmonton. We come to you! Fast, professional, certified technicians.",
    images: [`${siteUrl}/tirepitstop-technician-with-van-edmonton.png`],
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "Automotive Services",
  classification: "Mobile Tire Service",
  other: {
    "geo.region": "CA-AB",
    "geo.placename": "Edmonton",
    "geo.position": "53.5461;-113.4938",
    "ICBM": "53.5461, -113.4938",
  },
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
