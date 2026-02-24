"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Menu, MapPin, Mail, Clock, MessageCircle, Send, Facebook, Instagram } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Contact form submitted:", formData)
    alert("Message sent! We'll get back to you within 24 hours.")
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header />

      {/* Hero Section - header ile aynı hizada */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-primary-foreground/90 leading-relaxed">
            Get in touch with Edmonton's premier mobile tire service team
          </p>
        </div>
      </section>

      {/* Contact Information Cards - header ile aynı hizada */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Call Us</h3>
                <p className="text-muted-foreground mb-4">Available 24/7 for emergencies</p>
                <Button className="bg-accent hover:bg-accent/90 text-white" asChild>
                  <a href="tel:+16474512391" className="text-white">+1 647-451-2391</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Email Us</h3>
                <p className="text-muted-foreground mb-4">We'll respond within 24 hours</p>
                <Button variant="outline" asChild>
                  <a href="mailto:umutcemkabak@gmail.com">umutcemkabak@gmail.com</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Service Area</h3>
                <p className="text-muted-foreground mb-4">All Edmonton & surrounding areas</p>
                <Button variant="outline" asChild>
                  <Link href="/services">View Coverage</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <p className="text-muted-foreground">
                    Have a question or need a custom quote? We'd love to hear from you.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+1 647-451-2391"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        placeholder="What can we help you with?"
                        value={formData.subject}
                        onChange={(e) => handleInputChange("subject", e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your tire service needs, ask questions, or request a custom quote..."
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        rows={5}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-accent hover:bg-accent/90 text-white"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info & Map */}
            <div className="space-y-8">
              {/* Business Hours */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-accent" />
                    Business Hours
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-medium">Emergency Service:</span>
                    <span className="text-accent font-semibold">24/7</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Regular Service:</span>
                    <span>7:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Monday - Sunday:</span>
                    <span>All Days Available</span>
                  </div>
                  <div className="pt-3 border-t">
                    <p className="text-sm text-muted-foreground">
                      Emergency tire services available around the clock for urgent roadside assistance.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Map */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-accent" />
                    Service Area Map
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <div
                      className="w-full h-64 bg-muted rounded-lg flex items-center justify-center"
                      style={{
                        backgroundImage: `url('/edmonton-service-area-map.png')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      <div className="text-center bg-background/90 p-4 rounded-lg">
                        <MapPin className="w-8 h-8 text-accent mx-auto mb-2" />
                        <p className="font-semibold">Edmonton Service Area</p>
                        <p className="text-sm text-muted-foreground">We come to you anywhere in Edmonton</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <p className="text-sm text-muted-foreground mb-3">
                      Serving all Edmonton neighborhoods and surrounding communities
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://maps.google.com/?q=Edmonton,AB,Canada" target="_blank" rel="noopener noreferrer">
                        View on Google Maps
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact Options */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Quick Contact</CardTitle>
                  <p className="text-muted-foreground">Get in touch instantly through your preferred method</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Button className="bg-green-600 hover:bg-green-700 text-white" asChild>
                      <a href="https://wa.me/16474512391" target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        WhatsApp
                      </a>
                    </Button>

                    <Button className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
                      <a href="https://m.me/tirepitstop" target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Messenger
                      </a>
                    </Button>
                  </div>

                  <div className="pt-4 border-t">
                    <p className="text-sm font-medium mb-3">Follow Us:</p>
                    <div className="flex space-x-4">
                      <Button variant="outline" size="sm" asChild>
                        <a href="https://instagram.com/tirepitstop" target="_blank" rel="noopener noreferrer">
                          <Instagram className="w-4 h-4 mr-2" />
                          Instagram
                        </a>
                      </Button>

                      <Button variant="outline" size="sm" asChild>
                        <a href="https://facebook.com/tirepitstop" target="_blank" rel="noopener noreferrer">
                          <Facebook className="w-4 h-4 mr-2" />
                          Facebook
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - header ile aynı hizada */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">Quick answers to common questions</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">How fast can you arrive?</h3>
                <p className="text-muted-foreground text-sm">
                  Our average response time is 30 minutes across Edmonton. Emergency calls receive priority dispatch.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Do you work in winter storms?</h3>
                <p className="text-muted-foreground text-sm">
                  Yes, we provide service year-round including during Edmonton's harsh winter conditions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">What if my rim is damaged?</h3>
                <p className="text-muted-foreground text-sm">
                  We'll assess the damage and provide alternative solutions, including temporary fixes and referrals.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">How do I pay?</h3>
                <p className="text-muted-foreground text-sm">
                  We accept all major credit cards, debit cards, and offer convenient online payment options.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section - header ile aynı hizada */}
      <section className="py-16 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-accent-foreground/90 mb-8">
            Don't let tire problems slow you down. Contact us now for fast, professional service.
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
              className="border-white text-white hover:bg-white hover:text-accent text-lg px-8 py-3 bg-transparent"
              asChild
            >
              <a href="tel:+16474512391" className="text-white">
                <Phone className="w-5 h-5 mr-2" />
                Call Now: +1 647-451-2391
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
