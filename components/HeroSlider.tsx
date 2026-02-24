"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const SLIDES = [
  { src: "/hero-1.png", alt: "Mechanic repairing car tire in workshop" },
  { src: "/hero-2.png", alt: "Close-up mechanic working with car tire" },
  { src: "/hero-3.png", alt: "Mechanic holding tire - repair and replacement" },
  { src: "/hero-4.png", alt: "Brand new tires on shelf in tire store" },
]

const AUTOPLAY_MS = 6000

export default function HeroSlider() {
  const [index, setIndex] = useState(0)

  const goNext = useCallback(() => {
    setIndex((i) => (i + 1) % SLIDES.length)
  }, [])

  const goPrev = useCallback(() => {
    setIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length)
  }, [])

  useEffect(() => {
    const t = setInterval(goNext, AUTOPLAY_MS)
    return () => clearInterval(t)
  }, [goNext])

  return (
    <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center text-white overflow-hidden bg-black">
      {SLIDES.map((slide, i) => (
        <div
          key={slide.src}
          className="absolute inset-0 transition-opacity duration-700 ease-in-out"
          style={{
            backgroundImage: `url('${slide.src}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: i === index ? 1 : 0,
            zIndex: i === index ? 0 : -1,
          }}
          aria-hidden={i !== index}
        />
      ))}
      <div className="absolute inset-0 bg-black/50 z-[1]" />

      <button
        type="button"
        onClick={goPrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
      </button>
      <button
        type="button"
        onClick={goNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
      </button>

      {/* Aynı container ve padding ile header / logo hizası */}
      <div className="relative z-[2] w-full container mx-auto px-4 py-12 sm:py-16">
        <div className="max-w-2xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            Your Trusted Partner for Automobile Repair
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/95 mb-6 sm:mb-8">
            We offer various services for your unique automotive needs. There are several reasons to choose us as your trusted automotive partner.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-base sm:text-lg px-6 py-3 sm:px-8 rounded-full" asChild>
            <Link href="/book">Contact Us</Link>
          </Button>
        </div>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              i === index ? "bg-white scale-110" : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
