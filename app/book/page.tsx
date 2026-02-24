"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Phone, MapPin, Car, Calendar, Clock, AlertTriangle, CheckCircle, MessageCircle } from "lucide-react"
import { useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const WHATSAPP_NUMBER = "16474512391"

function buildWhatsAppMessage(booking: {
  id: string
  contactName: string
  phone: string
  email: string
  location: string
  vehicleYear: string
  vehicleMake: string
  vehicleModel: string
  rimSize: string
  serviceType: string
  preferredDate: string
  preferredTime: string
  amount: string
  additionalNotes: string
}) {
  const serviceLabels: Record<string, string> = {
    "tire-replacement": "Tire Replacement",
    "tire-repair": "Tire Repair",
    "seasonal-swap": "Seasonal Tire Swap",
    emergency: "Emergency Service",
    fleet: "Fleet Service",
    other: "Other",
  }
  const timeLabels: Record<string, string> = {
    morning: "Morning (8 AM - 12 PM)",
    afternoon: "Afternoon (12 PM - 5 PM)",
    evening: "Evening (5 PM - 8 PM)",
    asap: "ASAP (Emergency)",
  }
  const lines = [
    "🛞 *New Booking Request*",
    "",
    `*ID:* ${booking.id}`,
    "",
    "*Contact*",
    `Name: ${booking.contactName}`,
    `Phone: ${booking.phone}`,
    `Email: ${booking.email}`,
    "",
    "*Vehicle*",
    `${booking.vehicleYear} ${booking.vehicleMake} ${booking.vehicleModel}`,
    `Rim: ${booking.rimSize || "—"}`,
    "",
    "*Service*",
    `${serviceLabels[booking.serviceType] || booking.serviceType} - ${booking.amount}`,
    `Date: ${booking.preferredDate}`,
    `Time: ${timeLabels[booking.preferredTime] || booking.preferredTime}`,
    "",
    "*Location:*",
    booking.location,
  ]
  if (booking.additionalNotes?.trim()) {
    lines.push("", "*Notes:*", booking.additionalNotes)
  }
  return lines.join("\n")
}

export default function BookingPage() {
  const [formData, setFormData] = useState({
    location: "",
    vehicleMake: "",
    vehicleModel: "",
    vehicleYear: "",
    rimSize: "",
    serviceType: "",
    preferredDate: "",
    preferredTime: "",
    contactName: "",
    phone: "",
    email: "",
    additionalNotes: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccessDialog, setShowSuccessDialog] = useState(false)
  const [successBookingId, setSuccessBookingId] = useState("")
  const [successWhatsAppUrl, setSuccessWhatsAppUrl] = useState("")

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Generate booking ID
    const bookingId = `BK${Date.now().toString().slice(-6)}`

    // Create booking object
    const booking = {
      id: bookingId,
      ...formData,
      status: "pending",
      createdAt: new Date().toISOString(),
      amount: getServiceAmount(formData.serviceType),
    }

    // Store in localStorage (in a real app, this would be sent to a backend)
    const existingBookings = JSON.parse(localStorage.getItem("bookings") || "[]")
    existingBookings.push(booking)
    localStorage.setItem("bookings", JSON.stringify(existingBookings))

    // Build WhatsApp URL and open so customer can send booking to us
    const message = buildWhatsAppMessage(booking)
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
    setSuccessWhatsAppUrl(waUrl)
    window.open(waUrl, "_blank", "noopener,noreferrer")

    // Reset form
    setFormData({
      location: "",
      vehicleMake: "",
      vehicleModel: "",
      vehicleYear: "",
      rimSize: "",
      serviceType: "",
      preferredDate: "",
      preferredTime: "",
      contactName: "",
      phone: "",
      email: "",
      additionalNotes: "",
    })

    setIsSubmitting(false)
    setSuccessBookingId(bookingId)
    setShowSuccessDialog(true)
  }

  const getServiceAmount = (serviceType: string) => {
    const pricing = {
      "tire-replacement": "$79.00",
      "tire-repair": "$49.00",
      "seasonal-swap": "$89.00",
      emergency: "$99.00",
      fleet: "Custom Quote",
      other: "TBD",
    }
    return pricing[serviceType as keyof typeof pricing] || "TBD"
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Book Your Service</h1>
          <p className="text-xl text-primary-foreground/90 leading-relaxed">
            Schedule your mobile tire service and we'll come directly to you in Edmonton
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Service Details</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll contact you to confirm your appointment
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Location */}
                    <div className="space-y-2">
                      <Label htmlFor="location" className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2 text-accent" />
                        Service Location *
                      </Label>
                      <Input
                        id="location"
                        placeholder="Enter your address in Edmonton (e.g., 123 Main St, Edmonton, AB)"
                        value={formData.location}
                        onChange={(e) => handleInputChange("location", e.target.value)}
                        required
                      />
                      <p className="text-sm text-muted-foreground">
                        We'll come directly to this location for your service
                      </p>
                    </div>

                    {/* Vehicle Information */}
                    <div className="space-y-4">
                      <Label className="flex items-center text-base font-semibold">
                        <Car className="w-4 h-4 mr-2 text-accent" />
                        Vehicle Information *
                      </Label>

                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="vehicleYear">Year</Label>
                          <Select onValueChange={(value) => handleInputChange("vehicleYear", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Year" />
                            </SelectTrigger>
                            <SelectContent>
                              {Array.from({ length: 25 }, (_, i) => 2025 - i).map((year) => (
                                <SelectItem key={year} value={year.toString()}>
                                  {year}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="vehicleMake">Make</Label>
                          <Input
                            id="vehicleMake"
                            placeholder="e.g., Toyota"
                            value={formData.vehicleMake}
                            onChange={(e) => handleInputChange("vehicleMake", e.target.value)}
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="vehicleModel">Model</Label>
                          <Input
                            id="vehicleModel"
                            placeholder="e.g., Camry"
                            value={formData.vehicleModel}
                            onChange={(e) => handleInputChange("vehicleModel", e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="rimSize">Rim Size (Wheel Size) *</Label>
                        <Input
                          id="rimSize"
                          placeholder='e.g., 17", 18", 19"'
                          value={formData.rimSize}
                          onChange={(e) => handleInputChange("rimSize", e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    {/* Service Type */}
                    <div className="space-y-2">
                      <Label htmlFor="serviceType">Service Needed *</Label>
                      <Select onValueChange={(value) => handleInputChange("serviceType", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select the service you need" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="tire-replacement">Tire Replacement ($79)</SelectItem>
                          <SelectItem value="tire-repair">Tire Repair ($49)</SelectItem>
                          <SelectItem value="seasonal-swap">Seasonal Tire Swap ($89)</SelectItem>
                          <SelectItem value="emergency">Emergency Service ($99)</SelectItem>
                          <SelectItem value="fleet">Fleet Service (Custom Quote)</SelectItem>
                          <SelectItem value="other">Other (Please specify in notes)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Date and Time */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="preferredDate" className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2 text-accent" />
                          Preferred Date *
                        </Label>
                        <Input
                          id="preferredDate"
                          type="date"
                          value={formData.preferredDate}
                          onChange={(e) => handleInputChange("preferredDate", e.target.value)}
                          min={new Date().toISOString().split("T")[0]}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="preferredTime" className="flex items-center">
                          <Clock className="w-4 h-4 mr-2 text-accent" />
                          Preferred Time *
                        </Label>
                        <Select onValueChange={(value) => handleInputChange("preferredTime", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="morning">Morning (8 AM - 12 PM)</SelectItem>
                            <SelectItem value="afternoon">Afternoon (12 PM - 5 PM)</SelectItem>
                            <SelectItem value="evening">Evening (5 PM - 8 PM)</SelectItem>
                            <SelectItem value="asap">ASAP (Emergency)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-4">
                      <Label className="text-base font-semibold">Contact Information *</Label>

                      <div className="space-y-2">
                        <Label htmlFor="contactName">Full Name</Label>
                        <Input
                          id="contactName"
                          placeholder="Your full name"
                          value={formData.contactName}
                          onChange={(e) => handleInputChange("contactName", e.target.value)}
                          required
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="+1 647-451-2391"
                            value={formData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="your.email@example.com"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* Additional Notes */}
                    <div className="space-y-2">
                      <Label htmlFor="additionalNotes">Additional Notes (Optional)</Label>
                      <Textarea
                        id="additionalNotes"
                        placeholder="Any additional information about your tire issue, special instructions, or questions..."
                        value={formData.additionalNotes}
                        onChange={(e) => handleInputChange("additionalNotes", e.target.value)}
                        rows={4}
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-accent hover:bg-accent/90 text-white text-lg py-3"
                      disabled={isSubmitting}
                    >
                      <CheckCircle className="w-5 h-5 mr-2" />
                      {isSubmitting ? "Submitting..." : "Confirm My TirePitStop"}
                    </Button>
                  </form>
                </CardContent>
              </Card>

            {/* Success Dialog */}
            <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
              <DialogContent className="sm:max-w-md text-center">
                <DialogHeader>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                    <CheckCircle className="h-10 w-10 text-green-600" />
                  </div>
                  <DialogTitle className="text-xl">Booking Received!</DialogTitle>
                  <DialogDescription className="text-base">
                    Your service request has been submitted successfully. We'll contact you shortly to confirm your
                    appointment.
                  </DialogDescription>
                </DialogHeader>
                <div className="rounded-lg bg-muted/50 px-4 py-3">
                  <p className="text-sm text-muted-foreground">Your booking ID</p>
                  <p className="text-lg font-semibold tracking-wide text-foreground">{successBookingId}</p>
                  <p className="mt-1 text-xs text-muted-foreground">Please save this ID for reference.</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  A WhatsApp window should have opened with your booking details. Send the message to notify us.
                </p>
                <div className="flex flex-col gap-2">
                  {successWhatsAppUrl && (
                    <Button
                      variant="outline"
                      className="w-full border-green-600 text-green-700 hover:bg-green-50"
                      asChild
                    >
                      <a href={successWhatsAppUrl} target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Open WhatsApp again
                      </a>
                    </Button>
                  )}
                  <Button
                    className="w-full"
                    onClick={() => setShowSuccessDialog(false)}
                  >
                    Done
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Emergency Contact */}
              <Card className="border-accent/20 bg-accent/5">
                <CardHeader>
                  <CardTitle className="flex items-center text-accent">
                    <AlertTriangle className="w-5 h-5 mr-2" />
                    Need Urgent Help?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    For immediate roadside assistance, call us directly:
                  </p>
                  <Button size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
                    <a href="tel:+16474512391">
                      <Phone className="w-5 h-5 mr-2" />
                      +1 647-451-2391
                    </a>
                  </Button>
                  <p className="text-xs text-muted-foreground mt-2 text-center">Available 24/7 for emergencies</p>
                </CardContent>
              </Card>

              {/* What to Expect */}
              <Card>
                <CardHeader>
                  <CardTitle>What to Expect</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-accent">1</span>
                    </div>
                    <div>
                      <p className="font-medium text-sm">Confirmation Call</p>
                      <p className="text-xs text-muted-foreground">We'll call within 15 minutes to confirm details</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-accent">2</span>
                    </div>
                    <div>
                      <p className="font-medium text-sm">Technician Dispatch</p>
                      <p className="text-xs text-muted-foreground">Professional technician heads to your location</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-accent">3</span>
                    </div>
                    <div>
                      <p className="font-medium text-sm">Service Complete</p>
                      <p className="text-xs text-muted-foreground">Back on the road in 30 minutes average</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Service Areas */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-accent" />
                    Service Areas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">We serve all Edmonton areas including:</p>
                  <ul className="text-sm space-y-1">
                    <li>• Downtown & Central Edmonton</li>
                    <li>• North Edmonton (Castle Downs, Manning)</li>
                    <li>• South Edmonton (Millwoods, Terwillegar)</li>
                    <li>• West Edmonton (West End, Jasper Place)</li>
                    <li>• East Edmonton (Clareview, Hermitage)</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
