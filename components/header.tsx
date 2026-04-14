"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Trophy, Menu, X } from "lucide-react"
import { useState } from "react"
import { useApp } from "@/contexts/app-context"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { currentPlayer, isAdmin } = useApp()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80 // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
    setMobileMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <Trophy className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg">Tournament Portal</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("news")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              News
            </button>
            <button
              onClick={() => scrollToSection("rankings")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Rankings
            </button>
            <button
              onClick={() => scrollToSection("fixtures")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Fixtures
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </button>
            <ThemeToggle />
            {currentPlayer ? (
              <>
                <Link href={isAdmin ? "/admin" : "/dashboard"}>
                  <Button variant="ghost" size="sm">
                    {isAdmin ? "Admin" : "Dashboard"}
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <Link href="/login">
                  <Button variant="ghost" size="sm">
                    Login
                  </Button>
                </Link>
                <Link href="/register">
                  <Button size="sm">Register Now</Button>
                </Link>
              </>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 flex flex-col gap-4 border-t border-border/40">
            <button
              onClick={() => scrollToSection("news")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
            >
              News
            </button>
            <button
              onClick={() => scrollToSection("rankings")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
            >
              Rankings
            </button>
            <button
              onClick={() => scrollToSection("fixtures")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
            >
              Fixtures
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
            >
              Features
            </button>
            {currentPlayer ? (
              <Link href={isAdmin ? "/admin" : "/dashboard"} onClick={() => setMobileMenuOpen(false)}>
                <Button variant="ghost" size="sm" className="w-full">
                  {isAdmin ? "Admin" : "Dashboard"}
                </Button>
              </Link>
            ) : (
              <>
                <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="ghost" size="sm" className="w-full">
                    Login
                  </Button>
                </Link>
                <Link href="/register" onClick={() => setMobileMenuOpen(false)}>
                  <Button size="sm" className="w-full">
                    Register Now
                  </Button>
                </Link>
              </>
            )}
          </nav>
        )}
      </div>
    </header>
  )
}
