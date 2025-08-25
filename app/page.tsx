import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Clock, CheckCircle, CreditCard, MapPin } from "lucide-react"
import Link from "next/link"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import WhatsappButton from "@/components/WhatsappButton"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <WhatsappButton />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-20 px-4">
        <div className="absolute inset-0 bg-black/20"></div>
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url('/edmonton-city-street-with-mobile-tire-service-van.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        <div className="relative container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Flat tire? Don't move.
            <br />
            <span className="text-accent">We'll come to YOU.</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
            Serving Edmonton 24/7 with fast, reliable mobile tire services.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-3" asChild>
              <Link href="/book">Book Now</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-3 bg-transparent"
              asChild
            >
              <Link href="/services">See Services</Link>
            </Button>
          </div>
        </div>
      </section>

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

          {/* Mini Map Placeholder */}
          <div className="bg-muted rounded-lg p-8 mb-6">
            <div
              className="w-full h-64 bg-primary/5 rounded-lg flex items-center justify-center"
              style={{
                backgroundImage: `url('/edmonton-map-with-service-area-highlighted.png')`,
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

          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
            <Link href="/book">Get Help Now</Link>
          </Button>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="bg-accent text-accent-foreground py-12 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Need Emergency Tire Service Right Now?</h2>
          <p className="text-lg mb-6 text-accent-foreground/90">
            Don't wait - we're available 24/7 for roadside emergencies
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-3"
            asChild
          >
            <a href="tel:+17801234567">
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
