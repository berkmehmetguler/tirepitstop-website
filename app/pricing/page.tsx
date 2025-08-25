import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Menu, Clock, CheckCircle, Star, Shield } from "lucide-react"
import Link from "next/link"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function PricingPage() {
  const pricingData = [
    {
      service: "Standard Tire Change",
      price: "$79",
      duration: "~30 min",
      description: "Professional tire replacement at your location",
      popular: true,
    },
    {
      service: "Tire Repair",
      price: "$49",
      duration: "~20 min",
      description: "Expert puncture repair and patching",
      popular: false,
    },
    {
      service: "Emergency Service",
      price: "$99",
      duration: "24/7",
      description: "Night, weekend, and holiday emergency calls",
      popular: false,
    },
    {
      service: "Fleet Packages",
      price: "Custom Quote",
      duration: "Flexible",
      description: "Volume discounts for business and commercial vehicles",
      popular: false,
    },
  ]

  const additionalServices = [
    { service: "Seasonal Tire Swap", price: "$89", duration: "~45 min" },
    { service: "Tire Pressure Check", price: "$15", duration: "~5 min" },
    { service: "Wheel Balancing", price: "$25", duration: "~15 min" },
    { service: "Emergency Roadside", price: "$129", duration: "24/7" },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header />


      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Transparent Pricing</h1>
          <p className="text-xl text-primary-foreground/90 leading-relaxed mb-4">
            Upfront pricing with no hidden fees or surprises
          </p>
          <div className="flex items-center justify-center space-x-2 text-lg">
            <Shield className="w-6 h-6 text-accent" />
            <span>No surprises • Fair pricing • Professional service</span>
          </div>
        </div>
      </section>

      {/* Main Pricing Table */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Service Pricing</h2>
            <p className="text-lg text-muted-foreground">
              All prices include professional service, equipment, and travel to your location in Edmonton
            </p>
          </div>

          {/* Desktop Table */}
          <div className="hidden md:block bg-card rounded-lg shadow-lg overflow-hidden border">
            <div className="bg-primary text-primary-foreground p-4">
              <div className="grid grid-cols-4 gap-4 font-semibold">
                <div>Service</div>
                <div className="text-center">Price</div>
                <div className="text-center">Duration</div>
                <div className="text-center">Action</div>
              </div>
            </div>

            <div className="divide-y">
              {pricingData.map((item, index) => (
                <div key={index} className="p-4 hover:bg-muted/30 transition-colors relative">
                  {item.popular && (
                    <Badge className="absolute -top-2 left-4 bg-accent text-accent-foreground text-xs">
                      Most Popular
                    </Badge>
                  )}
                  <div className="grid grid-cols-4 gap-4 items-center">
                    <div>
                      <div className="font-semibold text-foreground">{item.service}</div>
                      <div className="text-sm text-muted-foreground">{item.description}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-accent">{item.price}</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center text-muted-foreground">
                        <Clock className="w-4 h-4 mr-1" />
                        {item.duration}
                      </div>
                    </div>
                    <div className="text-center">
                      <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
                        <Link href="/book">Book Now</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-4">
            {pricingData.map((item, index) => (
              <Card key={index} className="relative border-0 shadow-lg">
                {item.popular && (
                  <Badge className="absolute -top-2 left-4 bg-accent text-accent-foreground text-xs z-10">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">{item.service}</CardTitle>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="text-2xl font-bold text-accent">{item.price}</div>
                    <div className="flex items-center text-muted-foreground">
                      <Clock className="w-4 h-4 mr-1" />
                      {item.duration}
                    </div>
                  </div>
                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
                    <Link href="/book">Book Service</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Additional Services</h2>
            <p className="text-lg text-muted-foreground">Complete tire care solutions for every need</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-card p-6 rounded-lg border shadow-sm">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold text-foreground">{service.service}</h3>
                    <div className="flex items-center text-sm text-muted-foreground mt-1">
                      <Clock className="w-3 h-3 mr-1" />
                      {service.duration}
                    </div>
                  </div>
                  <div className="text-xl font-bold text-accent">{service.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Features */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What's Included</h2>
            <p className="text-lg text-muted-foreground">
              Every service includes professional expertise and peace of mind
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Professional Installation</h3>
                <p className="text-muted-foreground">
                  Certified technicians with proper tools and safety procedures for every job
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Service Guarantee</h3>
                <p className="text-muted-foreground">
                  All work backed by our satisfaction guarantee and professional liability insurance
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">No Hidden Fees</h3>
                <p className="text-muted-foreground">
                  The price you see is the price you pay - no surprise charges or hidden costs
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Fleet Pricing */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Fleet & Business Pricing</h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Special rates and priority service for businesses and commercial vehicles
          </p>

          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div>
              <h3 className="text-xl font-semibold mb-4">Fleet Benefits</h3>
              <ul className="space-y-2 text-primary-foreground/80">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-accent" />
                  Volume discounts on all services
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-accent" />
                  Priority scheduling and response
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-accent" />
                  Dedicated account management
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-accent" />
                  Flexible payment terms
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Perfect For</h3>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>• Delivery companies</li>
                <li>• Construction fleets</li>
                <li>• Transportation services</li>
                <li>• Government vehicles</li>
                <li>• Corporate car fleets</li>
              </ul>
            </div>
          </div>

          <div className="mt-8">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-3" asChild>
              <Link href="/contact">Get Fleet Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-accent text-accent-foreground">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Book Your Service?</h2>
          <p className="text-xl text-accent-foreground/90 mb-8">
            Get professional tire service at transparent prices. No surprises, just quality work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-3"
              asChild
            >
              <Link href="/book">Book Online Now</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent text-lg px-8 py-3 bg-transparent"
              asChild
            >
              <a href="tel:+1234567890">
                <Phone className="w-5 h-5 mr-2" />
                Call for Quote
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
