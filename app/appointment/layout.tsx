import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Book an Appointment",
  description: "Book your TirePitStop service. Redirects to the book page.",
}

export default function AppointmentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
