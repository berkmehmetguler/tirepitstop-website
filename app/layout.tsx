import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://pitstoptire.netlify.app";
const ogImageUrl = `${siteUrl}/og-image.jpg`;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#171717",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "PitStop Tire | Mobile Tire Service Edmonton",
    template: "%s | PitStop Tire",
  },
  description:
    "Fast and professional mobile tire service in Edmonton, Sherwood Park and Spruce Grove. Flat tire repair, tire change and emergency tire services near you.",
  keywords: [
    "mobile tire service edmonton",
    "flat tire repair edmonton",
    "mobile tire service near me",
    "mobile tire service sherwood park",
    "mobile tire services",
    "mobile tire service spruce grove",
    "tire repair",
    "mobile tire change",
  ],
  authors: [{ name: "PitStop Tire", url: siteUrl }],
  creator: "PitStop Tire",
  publisher: "PitStop Tire",
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
    siteName: "PitStop Tire",
    title: "PitStop Tire | Mobile Tire Service Edmonton",
    description:
      "Fast and professional mobile tire service in Edmonton, Sherwood Park and Spruce Grove. Flat tire repair, tire change and emergency tire services near you.",
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "PitStop Tire - Mobile Tire Service Edmonton, Sherwood Park, Spruce Grove",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PitStop Tire | Mobile Tire Service Edmonton",
    description:
      "Fast and professional mobile tire service in Edmonton, Sherwood Park and Spruce Grove. Flat tire repair, tire change and emergency tire services near you.",
    images: [ogImageUrl],
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "Automotive Services",
  classification: "Mobile Tire Service",
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png", sizes: "32x32" },
      { url: "/logo.png", type: "image/png", sizes: "192x192" },
    ],
  },
  other: {
    "geo.region": "CA-AB",
    "geo.placename": "Edmonton",
    "geo.position": "53.5461;-113.4938",
    ICBM: "53.5461, -113.4938",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "TireShop",
  "@id": `${siteUrl}/#organization`,
  name: "PitStop Tire",
  description:
    "Fast and professional mobile tire service in Edmonton, Sherwood Park and Spruce Grove. Flat tire repair, tire change and emergency tire services near you.",
  url: siteUrl,
  areaServed: [
    { "@type": "City", name: "Edmonton", containedInPlace: { "@type": "Province", name: "Alberta" } },
    { "@type": "City", name: "Sherwood Park", containedInPlace: { "@type": "Province", name: "Alberta" } },
    { "@type": "City", name: "Spruce Grove", containedInPlace: { "@type": "Province", name: "Alberta" } },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Tire services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mobile tire service" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Flat tire repair" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tire change" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Emergency tire services" } },
    ],
  },
  serviceType: "Tire Service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
