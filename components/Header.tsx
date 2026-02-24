"use client"

import { Button } from "@/components/ui/button"
import { Phone, Menu, Mail, Settings, LogOut } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { isAuthenticated, logout } from "@/lib/auth"
import Image from "next/image"

const EMAIL = "umutcemkabak@gmail.com"
const PHONE = "+1 647-451-2391"
const PHONE_LINK = "tel:+16474512391"

export default function Header() {
  const pathname = usePathname()
  const router = useRouter()
  const [isAuth, setIsAuth] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    setIsAuth(isAuthenticated())
  }, [pathname])

  const isActive = (path: string) => pathname === path

  const handleLogout = () => {
    logout()
    setIsAuth(false)
    router.push("/")
  }

  return (
    <header className="sticky top-0 z-50">
      {/* Üst bar - siyah arka plan: Logo + EMAIL US / CALL US TODAY */}
      <div className="bg-[#0f0f0f] text-white">
        <div className="container mx-auto px-4 py-3 sm:py-4">
          <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4">
            <Link href="/" className="flex items-center gap-2 sm:gap-3 min-w-0">
              <Image src="/logo.png" alt="Pit Stop - Mobile Tire Service" width={280} height={72} className="object-contain h-16 sm:h-24 md:h-26 lg:h-28 w-auto min-h-[5rem] shrink-0" priority />
              <span className="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-white/90 hidden sm:block shrink-0">MOBILE TIRE SERVICE</span>
            </Link>
            <div className="flex flex-wrap items-center justify-end gap-3 sm:gap-6 min-w-0">
              <a href={`mailto:${EMAIL}`} className="hidden sm:flex items-center gap-2 sm:gap-2.5 hover:opacity-90 transition-opacity shrink-0 underline underline-offset-2 decoration-white">
                <span className="text-xs sm:text-sm font-semibold uppercase tracking-wide">EMAIL US</span>
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm sm:text-base hidden sm:inline">{EMAIL}</span>
                <span className="text-sm sm:hidden">Email</span>
              </a>
              <a href={PHONE_LINK} className="flex flex-col items-end sm:items-center shrink-0">
                <Button className="bg-red-600 hover:bg-accent/90 text-white rounded-full px-4 py-2.5 sm:px-5 sm:py-3 text-md sm:text-base font-semibold gap-2">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Emergency Call</span>
                </Button>

              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navigasyon çubuğu - gri/beyaz arka plan */}
      <div className="bg-[#f5f5f5] border-b border-gray-200">
        <div className="container mx-auto px-4 py-2.5 sm:py-3">
          <div className="flex items-center justify-between">
            <nav className="hidden md:flex items-center gap-1 text-foreground">
              <Link href="/" className={`px-3 py-2.5 text-base font-medium ${isActive("/") ? "text-accent" : "hover:text-accent"} transition-colors`}>
                HOME
              </Link>
              <span className="text-gray-300">|</span>
              <Link href="/about" className={`px-3 py-2.5 text-base font-medium ${isActive("/about") ? "text-accent" : "hover:text-accent"} transition-colors`}>
                ABOUT US
              </Link>
              <span className="text-gray-300">|</span>
              <Link href="/services" className={`px-3 py-2.5 text-base font-medium ${isActive("/services") ? "text-accent" : "hover:text-accent"} transition-colors`}>
                SERVICES
              </Link>
              <span className="text-gray-300">|</span>
              <Link href="/pricing" className={`px-3 py-2.5 text-base font-medium ${isActive("/pricing") ? "text-accent" : "hover:text-accent"} transition-colors`}>
                PRICING
              </Link>
              <span className="text-gray-300">|</span>
              <Link href="/contact" className={`px-3 py-2.5 text-base font-medium ${isActive("/contact") ? "text-accent" : "hover:text-accent"} transition-colors`}>
                CONTACT US
              </Link>
            </nav>

            <div className="flex items-center gap-2">
              <Button className="bg-accent hover:bg-accent/90 text-white rounded-full px-4 py-2.5 sm:px-5 sm:py-3 text-sm sm:text-base font-semibold hidden md:inline-flex" asChild>
                <Link href="/book">REQUEST AN APPOINTMENT</Link>
              </Button>

              {isAuth ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="text-foreground text-base font-medium">Account</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem asChild>
                      <Link href="/dashboard">Dashboard</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={handleLogout}>
                      <LogOut className="w-4 h-4 mr-2" /> Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Button variant="ghost" size="sm" className="hidden md:flex text-foreground text-base font-medium" asChild>
                  <Link href="/login"><Settings className="w-4 h-4 mr-2" /> Admin</Link>
                </Button>
              )}

              <Button variant="ghost" size="sm" className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                <Menu className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-[#f5f5f5]">
            <nav className="flex flex-col px-4 py-4 gap-1">
              <Link href="/" className="py-2.5 text-base font-medium" onClick={() => setIsMobileMenuOpen(false)}>HOME</Link>
              <Link href="/about" className="py-2.5 text-base font-medium" onClick={() => setIsMobileMenuOpen(false)}>ABOUT US</Link>
              <Link href="/services" className="py-2.5 text-base font-medium" onClick={() => setIsMobileMenuOpen(false)}>SERVICES</Link>
              <Link href="/pricing" className="py-2.5 text-base font-medium" onClick={() => setIsMobileMenuOpen(false)}>PRICING</Link>
              <Link href="/contact" className="py-2.5 text-base font-medium" onClick={() => setIsMobileMenuOpen(false)}>CONTACT US</Link>
              <Link href="/book" className="py-2" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full bg-accent hover:bg-accent/90 text-white">REQUEST AN APPOINTMENT</Button>
              </Link>
              {isAuth ? (
                <Button variant="ghost" size="sm" className="w-full justify-start mt-2" onClick={() => { handleLogout(); setIsMobileMenuOpen(false); }}>
                  <LogOut className="w-4 h-4 mr-2" /> Logout
                </Button>
              ) : (
                <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="ghost" size="sm" className="w-full justify-start mt-2"><Settings className="w-4 h-4 mr-2" /> Admin Login</Button>
                </Link>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
