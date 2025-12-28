import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact TirePitStop | Mobile Tire Service in Edmonton | 24/7 Available",
  description: "Contact TirePitStop for mobile tire service in Edmonton. Call (780) 123-4567 for 24/7 emergency service. Email info@tirepitstop.ca or book online. We serve all Edmonton areas.",
  keywords: [
    "contact tire service Edmonton",
    "tire service phone number Edmonton",
    "emergency tire service Edmonton",
    "tire service contact Edmonton"
  ],
  openGraph: {
    title: "Contact TirePitStop | Mobile Tire Service in Edmonton",
    description: "Contact us for 24/7 mobile tire service in Edmonton. Call, email, or book online. Fast response, professional service.",
    url: "https://tirepitstop.ca/contact",
  },
  alternates: {
    canonical: "https://tirepitstop.ca/contact",
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

