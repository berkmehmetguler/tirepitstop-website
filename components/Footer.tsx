import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <Link href="/" className="text-3xl font-bold">
          <Image src="/logo.png" alt="Pit Stop - Mobile Tire Service" width={320} height={80} className="object-contain h-16 sm:h-20 md:h-24 w-auto mx-auto mb-10" />
          </Link>
          <p className="text-lg text-primary-foreground/80">Edmonton's fastest roadside tire rescue</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/services" className="block hover:text-accent transition-colors">
                Services
              </Link>
              <Link href="/pricing" className="block hover:text-accent transition-colors">
                Pricing
              </Link>
              <Link href="/about" className="block hover:text-accent transition-colors">
                About Us
              </Link>
              <Link href="/contact" className="block hover:text-accent transition-colors">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Contact Info</h4>
            <div className="space-y-2">
              <p>
                <a href="tel:+16474512391" className="hover:text-accent transition-colors">📞 +1 647-451-2391</a>
              </p>
              <p>
                <a href="mailto:umutcemkabak@gmail.com" className="hover:text-accent transition-colors">✉️ umutcemkabak@gmail.com</a>
              </p>
              <p>📍 Edmonton, AB</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Service Hours</h4>
            <div className="space-y-2">
              <p>Emergency: 24/7</p>
              <p>Regular: 7 AM - 10 PM</p>
              <p>All Edmonton Areas</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/70">© 2025 TirePitStop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
