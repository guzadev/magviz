"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import { LanguageSwitcher } from "@/components/language-switcher"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

export function Navbar() {
  const { t, locale } = useLanguage()
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Determinar si estamos en la página de inicio
  const isHomePage = pathname === `/${locale}` || pathname === `/${locale}/`

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Get current route without locale prefix
  const currentRoute = pathname.replace(`/${locale}`, "") || "/"

  const navItems = [
    { href: "/", label: t("nav.home") },
    { href: "/about", label: t("nav.about") },
    { href: "/projects", label: t("nav.projects") },
    { href: "/services", label: t("nav.services") },
    { href: "/workflow", label: t("nav.workflow") },
    { href: "/contact", label: t("nav.contact") },
  ]

  // Determinar el color del texto basado en la página y el scroll
  const getTextColor = () => {
    if (isHomePage && !isScrolled) {
      return "text-white"
    }
    return isScrolled ? "text-[#23323a]" : "text-[#23323a]"
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
          : isHomePage
            ? "bg-transparent py-5"
            : "bg-white py-5",
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link href={`/${locale}`} className="flex items-center">
          <div className={cn(
            "relative h-16 w-16 rounded-full overflow-hidden flex items-center justify-center",
            isHomePage && !isScrolled ? "bg-[#eae0d6]" : "bg-[#23323a]"
          )}>
            <span className={cn(
              "font-museo-moderno font-bold text-lg text-center px-0.5",
              isHomePage && !isScrolled ? "text-[#23323a]" : "text-[#eae0d6]"
            )}>MAG.</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={`/${locale}${item.href}`}
              className={cn(
                "text-sm font-medium uppercase tracking-wider transition-colors hover:text-[#23323a]",
                currentRoute === item.href ? "text-[#23323a]" : getTextColor(),
              )}
            >
              {item.label}
            </Link>
          ))}
          <LanguageSwitcher isScrolled={isScrolled} isHomePage={isHomePage} />
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <LanguageSwitcher isScrolled={isScrolled} isHomePage={isHomePage} />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn("ml-2", getTextColor())}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-16 z-50 bg-white md:hidden"
          >
            <nav className="flex flex-col p-6 space-y-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={`/${locale}${item.href}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "text-lg font-medium uppercase tracking-wider transition-colors",
                    currentRoute === item.href ? "text-[#23323a]" : "text-muted-foreground",
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}
