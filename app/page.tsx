import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Clock, CheckCircle, CreditCard, MapPin } from "lucide-react"
import Link from "next/link"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import WhatsappButton from "@/components/WhatsappButton"
import HeroSlider from "@/components/HeroSlider"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mobile Tire Service & Roadside Assistance in Edmonton, AB | 24/7 Available",
  description: "Edmonton's #1 mobile tire service. Flat tire? Don't move - we'll come to YOU! 24/7 roadside assistance, tire replacement, flat tire repair, seasonal tire changes. Fast 30-minute response time across Edmonton. Certified technicians, transparent pricing.",
  keywords: [
    "mobile tire service Edmonton",
    "roadside assistance Edmonton",
    "flat tire repair Edmonton",
    "emergency tire service Edmonton",
    "tire replacement Edmonton",
    "24/7 tire service Edmonton",
    "mobile tire change Edmonton",
    "tire service near me Edmonton",
    "Edmonton tire repair",
    "mobile tire technician Edmonton"
  ],
  openGraph: {
    title: "Mobile Tire Service & Roadside Assistance in Edmonton, AB | TirePitStop",
    description: "Flat tire? Don't move - we'll come to YOU! 24/7 mobile tire service in Edmonton. Fast response, certified technicians, transparent pricing.",
    url: "https://tirepitstop.ca",
    siteName: "TirePitStop",
    images: [
      {
        url: "https://tirepitstop.ca/edmonton-city-street-with-mobile-tire-service-van.png",
        width: 1200,
        height: 630,
        alt: "TirePitStop Mobile Tire Service Van in Edmonton",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile Tire Service & Roadside Assistance in Edmonton, AB",
    description: "Flat tire? We'll come to YOU! 24/7 mobile tire service in Edmonton. Fast response, certified technicians.",
  },
  alternates: {
    canonical: "https://tirepitstop.ca",
  },
}

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://tirepitstop.ca",
    "name": "TirePitStop",
    "description": "Edmonton's premier mobile tire service providing 24/7 roadside assistance, tire replacement, flat tire repair, and seasonal tire changes throughout Edmonton, Alberta.",
    "url": "https://tirepitstop.ca",
    "telephone": "+16474512391",
    "priceRange": "$$",
    "image": "https://tirepitstop.ca/tirepitstop-technician-with-van-edmonton.png",
    "logo": "https://tirepitstop.ca/logo.png",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Edmonton",
      "addressRegion": "AB",
      "addressCountry": "CA",
      "streetAddress": "Mobile Service - We Come To You"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "53.5461",
      "longitude": "-113.4938"
    },
    "areaServed": {
      "@type": "City",
      "name": "Edmonton",
      "sameAs": "https://en.wikipedia.org/wiki/Edmonton"
    },
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "53.5461",
        "longitude": "-113.4938"
      },
      "description": "Edmonton and surrounding areas"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Mobile Tire Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Tire Replacement",
            "description": "Professional mobile tire replacement service"
          },
          "price": "79",
          "priceCurrency": "CAD"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Flat Tire Repair",
            "description": "Expert flat tire repair and patching service"
          },
          "price": "49",
          "priceCurrency": "CAD"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Seasonal Tire Swap",
            "description": "Winter and summer tire change service"
          },
          "price": "89",
          "priceCurrency": "CAD"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Emergency Roadside Assistance",
            "description": "24/7 emergency tire service and roadside assistance"
          },
          "price": "99",
          "priceCurrency": "CAD"
        }
      ]
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    },
    "sameAs": [
      "https://www.facebook.com/tirepitstop",
      "https://www.instagram.com/tirepitstop"
    ]
  }

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <WhatsappButton />

      <HeroSlider />

      {/* Quick Info Cards */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Fast Response</h3>
                <p className="text-muted-foreground">Average 30 minutes to reach you anywhere in Edmonton</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Certified Team</h3>
                <p className="text-muted-foreground">Professional, licensed technicians you can trust</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Transparent Pricing</h3>
                <p className="text-muted-foreground">Upfront pricing with no hidden fees or surprises</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center max-w-2xl">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <MapPin className="w-10 h-10 text-primary" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Serving All Edmonton Areas</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Currently providing mobile tire services throughout Edmonton and surrounding communities.
          </p>
          <div className="bg-muted rounded-lg p-8 mb-6">
            <div
              className="w-full h-64 bg-primary/5 rounded-lg flex items-center justify-center"
              style={{
                backgroundImage: "url('/edmonton-map-with-service-area-highlighted.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="text-center">
                <MapPin className="w-12 h-12 text-accent mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Interactive map coming soon</p>
              </div>
            </div>
          </div>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-white" asChild>
            <Link href="/book">Get Help Now</Link>
          </Button>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="bg-accent text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">Need Emergency Tire Service Right Now?</h2>
          <p className="text-base sm:text-lg mb-6 text-white/90">
            Don't wait - we're available 24/7 for roadside emergencies
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-3"
            asChild
          >
            <a href="tel:+16474512391">
              <Phone className="w-5 h-5 mr-2" />
              Call Emergency Line
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
