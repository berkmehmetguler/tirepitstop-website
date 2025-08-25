import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Menu, Wrench, AlertTriangle, RotateCcw, Clock, Truck, CheckCircle } from "lucide-react"
import Link from "next/link"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function ServicesPage() {
  const services = [
    {
      title: "Tire Replacement",
      description: "On the spot tire swap with professional installation",
      icon: <Wrench className="w-8 h-8" />,
      priceRange: "Starting at $79",
      duration: "~30 min",
      features: [
        "Professional installation",
        "Quality tire options",
        "Proper torque specifications",
        "Safety inspection",
      ],
      popular: false,
    },
    {
      title: "Flat Repair",
      description: "Get back on the road safely with expert tire repair",
      icon: <CheckCircle className="w-8 h-8" />,
      priceRange: "Starting at $49",
      duration: "~20 min",
      features: ["Puncture assessment", "Professional patch/plug", "Pressure check", "Safety validation"],
      popular: true,
    },
    {
      title: "Seasonal Tire Swap",
      description: "Winter-ready in minutes with seasonal tire changes",
      icon: <RotateCcw className="w-8 h-8" />,
      priceRange: "Starting at $89",
      duration: "~45 min",
      features: ["Winter/summer swap", "Tire storage options", "Pressure adjustment", "Seasonal inspection"],
      popular: false,
    },
    {
      title: "Emergency Assistance",
      description: "24/7 roadside rescue when you need it most",
      icon: <AlertTriangle className="w-8 h-8" />,
      priceRange: "Starting at $99",
      duration: "24/7 Available",
      features: ["24/7 availability", "Priority response", "Emergency repairs", "Roadside safety"],
      popular: false,
    },
    {
      title: "Fleet Services",
      description: "Custom plans for businesses and commercial vehicles",
      icon: <Truck className="w-8 h-8" />,
      priceRange: "Custom Quote",
      duration: "Flexible",
      features: ["Volume discounts", "Scheduled maintenance", "Priority service", "Fleet management"],
      popular: false,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-primary-foreground/90 leading-relaxed">
            Professional mobile tire services delivered directly to your location in Edmonton
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Complete Tire Solutions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From emergency repairs to scheduled maintenance, we bring professional tire services directly to you
              anywhere in Edmonton.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Card
                key={index}
                className="relative border-0 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                {service.popular && (
                  <Badge className="absolute -top-3 left-4 bg-accent text-accent-foreground z-10">Most Popular</Badge>
                )}

                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                    <div className="text-accent">{service.icon}</div>
                  </div>
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent mb-1">{service.priceRange}</div>
                    <div className="flex items-center justify-center text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 mr-1" />
                      {service.duration}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-foreground">What's Included:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle className="w-3 h-3 mr-2 text-accent flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
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

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose TirePitStop?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're not just another tire service - we're Edmonton's mobile tire specialists
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Fast Response</h3>
              <p className="text-sm text-muted-foreground">Average 30-minute arrival time across Edmonton</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Certified Technicians</h3>
              <p className="text-sm text-muted-foreground">Professional, licensed, and experienced team</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Mobile Convenience</h3>
              <p className="text-sm text-muted-foreground">We come to you - home, work, or roadside</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">24/7 Emergency</h3>
              <p className="text-sm text-muted-foreground">Round-the-clock emergency assistance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Service Areas</h2>
          <p className="text-lg text-muted-foreground mb-8">
            We proudly serve all areas of Edmonton and surrounding communities
          </p>

          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="font-semibold mb-3">Central Edmonton</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Downtown</li>
                <li>• Oliver</li>
                <li>• Garneau</li>
                <li>• Strathcona</li>
              </ul>
            </div>

            <div className="bg-card p-6 rounded-lg border">
              <h3 className="font-semibold mb-3">North Edmonton</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Castle Downs</li>
                <li>• Northgate</li>
                <li>• Clareview</li>
                <li>• Manning</li>
              </ul>
            </div>

            <div className="bg-card p-6 rounded-lg border">
              <h3 className="font-semibold mb-3">South Edmonton</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Millwoods</li>
                <li>• Terwillegar</li>
                <li>• Summerside</li>
                <li>• Windermere</li>
              </ul>
            </div>
          </div>

          <div className="mt-8">
            <p className="text-muted-foreground mb-4">Don't see your area listed? Give us a call!</p>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
              <a href="tel:+1234567890">
                <Phone className="w-5 h-5 mr-2" />
                Check Service Availability
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-accent text-accent-foreground">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Back on the Road?</h2>
          <p className="text-xl text-accent-foreground/90 mb-8">
            Don't let tire problems slow you down. Book your service now or call for immediate assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-3"
              asChild
            >
              <Link href="/book">Book Service Online</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent text-lg px-8 py-3 bg-transparent"
              asChild
            >
              <a href="tel:+1234567890">
                <Phone className="w-5 h-5 mr-2" />
                Call for Emergency
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
