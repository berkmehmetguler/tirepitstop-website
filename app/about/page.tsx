import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Zap, Shield, Eye } from "lucide-react"
import Link from "next/link"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About TirePitStop | Edmonton's Trusted Mobile Tire Service Team",
  description: "Learn about TirePitStop, Edmonton's premier mobile tire service. Professional, certified technicians providing 24/7 roadside assistance, tire replacement, and repair services throughout Edmonton, AB.",
  keywords: [
    "about tire service Edmonton",
    "tire service company Edmonton",
    "mobile tire technicians Edmonton",
    "certified tire service Edmonton"
  ],
  openGraph: {
    title: "About TirePitStop | Edmonton's Trusted Mobile Tire Service",
    description: "Edmonton's premier mobile tire service with professional, certified technicians. 24/7 roadside assistance throughout Edmonton.",
    url: "https://tirepitstop.ca/about",
  },
  alternates: {
    canonical: "https://tirepitstop.ca/about",
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 px-4 ">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Who We Are</h1>
          <p className="text-xl text-primary-foreground/90 leading-relaxed">
            Edmonton's trusted mobile tire service, bringing professional roadside assistance directly to you
          </p>
        </div>
      </section>

      {/* Main Story Section - header ile aynı hizada: container mx-auto px-4 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Our Story</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Founded in Edmonton, TirePitStop was built on one simple mission: to bring professional tire service to your
                  doorstep. Whether you need a tire change, flat tire repair, or full tire replacement, we drive directly to
                  you – anywhere in Edmonton. No more waiting for a tow or hunting for a tire shop.
                </p>
                <p>
                  A flat tire can happen anytime. We understand that tire emergencies don't wait for business hours. Our mobile
                  tire service comes to you – whether you're stuck on the Whitemud during rush hour or in your driveway on a
                  Sunday morning. One call and our team is on the way for tire change and replacement when you need it most.
                </p>
                <p>
                  Our certified technicians bring a full mobile workshop to your location: tire change and balancing equipment,
                  replacement tires when needed, and the expertise to handle any flat tire or tire repair across Edmonton.
                  We get you back on the road safely and quickly.
                </p>
              </div>
            </div>

            <div className="relative">
              <img
                src="/hero-workshop.png"
                alt="TirePitStop mobile tire workshop – tire change and flat tire service in Edmonton"
                className="rounded-lg shadow-lg w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            "To keep Edmontonians safe on the road, one tire at a time."
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We believe that reliable transportation shouldn't be interrupted by tire problems. Our commitment is to
            provide fast, professional, and transparent mobile tire services that get you back to what matters most in
            your day.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Fast Response</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We understand that time is critical when you're stranded. Our average response time of 30 minutes
                  means you won't be waiting long for professional help to arrive.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Reliable Service</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our certified technicians bring professional expertise and quality equipment to every job. You can
                  trust us to get the job done right the first time, every time.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Eye className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Transparency</h3>
                <p className="text-muted-foreground leading-relaxed">
                  No hidden fees, no surprises. We provide upfront pricing and clear communication throughout the entire
                  service process, so you know exactly what to expect.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Edmonton Focus Section */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Proudly Serving Edmonton</h2>
          <p className="text-xl text-primary-foreground/90 leading-relaxed mb-8">
            As a locally-owned business, we understand Edmonton's unique challenges – from harsh winters to busy
            construction zones. We're not just serving our customers; we're serving our neighbors and community.
          </p>

          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div>
              <h3 className="text-xl font-semibold mb-4">Local Expertise</h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                We know Edmonton's roads, weather patterns, and traffic challenges. This local knowledge helps us
                provide faster, more efficient service tailored to our city's specific needs.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Community Commitment</h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                We're invested in Edmonton's success. Every service call helps support local jobs and contributes to
                keeping our community mobile and connected.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-3" asChild>
              <Link href="/services" className="text-white">See Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-accent text-accent-foreground">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience the TirePitStop Difference?</h2>
          <p className="text-xl text-accent-foreground/90 mb-8">
            Join thousands of satisfied Edmonton drivers who trust us with their roadside tire needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-3"
              asChild
            >
              <Link href="/book">Book Service Now</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-accent text-lg px-8 py-3 bg-transparent"
              asChild
            >
              <a href="tel:+16474512391" className="text-white">
                <Phone className="w-5 h-5 mr-2" />
                Call Us Today
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
