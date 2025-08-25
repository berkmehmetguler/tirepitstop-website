"use client"

import { Button } from "@/components/ui/button"
import { Phone, Menu, Settings, LogOut } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { isAuthenticated, logout } from "@/lib/auth"
import Image from "next/image"

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
    <header className="bg-primary text-primary-foreground   sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link href="/" className="text-2xl font-bold">
              <Image src="/logo.png" alt="v0 Logo" width={250} height={50} className="object-contain shadow-md " />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className={`hover:text-accent transition-colors ${isActive("/") ? "text-accent font-medium" : ""}`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`hover:text-accent transition-colors ${isActive("/about") ? "text-accent font-medium" : ""}`}
            >
              About Us
            </Link>
            <Link
              href="/services"
              className={`hover:text-accent transition-colors ${isActive("/services") ? "text-accent font-medium" : ""}`}
            >
              Services
            </Link>
            <Link
              href="/pricing"
              className={`hover:text-accent transition-colors ${isActive("/pricing") ? "text-accent font-medium" : ""}`}
            >
              Pricing
            </Link>
            <Link
              href="/contact"
              className={`hover:text-accent transition-colors ${isActive("/contact") ? "text-accent font-medium" : ""}`}
            >
              Contact
            </Link>
     
          </nav>

          <div className="flex items-center space-x-3">
            <Button
              variant="secondary"
              size="sm"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
              asChild
            >
              <Link href="/book">Book Now</Link>
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
              asChild
            >
              <Link href="tel:+17801234567">
                <Phone className="w-4 h-4 mr-1" />
                Call Now
              </Link>
            </Button>

            {isAuth ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
   
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard">Dashboard</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button variant="ghost" size="sm" className="hidden md:flex" asChild>
                
              </Button>
            )}

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-primary-foreground/20">
            <nav className="flex flex-col space-y-3 pt-4">
              <Link
                href="/"
                className={`hover:text-accent transition-colors ${isActive("/") ? "text-accent font-medium" : ""}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`hover:text-accent transition-colors ${isActive("/about") ? "text-accent font-medium" : ""}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/services"
                className={`hover:text-accent transition-colors ${isActive("/services") ? "text-accent font-medium" : ""}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/pricing"
                className={`hover:text-accent transition-colors ${isActive("/pricing") ? "text-accent font-medium" : ""}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="/contact"
                className={`hover:text-accent transition-colors ${isActive("/contact") ? "text-accent font-medium" : ""}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
     
              <div className="border-t border-primary-foreground/20 pt-3">
                {isAuth ? (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      handleLogout()
                      setIsMobileMenuOpen(false)
                    }}
                    className="w-full justify-start"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                  </Button>
                ) : (
                  <Button variant="ghost" size="sm" className="w-full justify-start" asChild>
                    <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
                      <Settings className="w-4 h-4 mr-2" />
                      Admin Login
                    </Link>
                  </Button>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
