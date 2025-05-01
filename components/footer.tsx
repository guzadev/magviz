"use client"

import Link from "next/link"
import { Instagram, Linkedin, Mail, Phone, Globe, Github } from "lucide-react"
import { FaBehance } from "react-icons/fa"
import { useLanguage } from "@/components/language-provider"
import { motion } from "framer-motion"

export function Footer() {
  const { t, locale } = useLanguage()

  const navItems = [
    { href: "/", label: t("nav.home") },
    { href: "/about", label: t("nav.about") },
    { href: "/projects", label: t("nav.projects") },
    { href: "/services", label: t("nav.services") },
    { href: "/workflow", label: t("nav.workflow") },
    { href: "/contact", label: t("nav.contact") },
  ]

  return (
    <footer className="bg-[#23323a] py-16 text-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid gap-12 md:grid-cols-3 lg:grid-cols-4"
        >
          {/* Logo and info */}
          <div className="space-y-6">
            <div className="relative h-16 w-16 rounded-full overflow-hidden bg-[#eae0d6] flex items-center justify-center">
              <span className="text-[#23323a] font-museo-moderno font-bold text-lg text-center px-0.5">MAG.</span>
            </div>
            <p className="text-white/80 max-w-xs">
              {locale === "es"
                ? "Estudio profesional de visualización arquitectónica y renderizado 3D."
                : "Professional architectural visualization and 3D rendering studio."}
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium mb-4 text-white uppercase tracking-wider">
              {locale === "es" ? "Contacto" : "Contact"}
            </h4>
            <div className="space-y-3 text-white/80">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-[#eae0d6]" />
                <span>+5491164297392 | +5491163680161</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-[#eae0d6]" />
                <span>mag.viz.studio@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium mb-4 text-white uppercase tracking-wider">
              {locale === "es" ? "Navegación" : "Navigation"}
            </h4>
            <nav className="grid grid-cols-1 gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={`/${locale}${item.href}`}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium mb-4 text-white uppercase tracking-wider">
              {locale === "es" ? "Seguinos" : "Follow Us"}
            </h4>
            <div className="flex space-x-4">
              <Link
                href="https://instagram.com/mag.viz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white"
              >
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://linkedin.com/company/magviz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://behance.net/magviz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white"
              >
                <FaBehance className="h-7 w-7 transform translate-y-[-1px]" />
                <span className="sr-only">Behance</span>
              </Link>
              
              <Link href="mailto:mag.viz.studio@gmail.com" className="text-white/80 hover:text-white">
                <Mail className="h-6 w-6 transform translate-y-[1px]" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2">
            <p className="text-sm text-white/60">
              © 2025 Gustavo Paz. {locale === "es" ? "Todos los derechos reservados." : "All rights reserved."}
            </p>
            <div className="flex space-x-3 ml-2">
              <Link 
                href="https://gustavopaz.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/60 hover:text-white transition-colors"
              >
                <Globe className="h-5 w-5" />
                <span className="sr-only">Sitio web</span>
              </Link>
              <Link 
                href="https://github.com/guzadev" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/60 hover:text-white transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-sm text-white/60 hover:text-white">
              {locale === "es" ? "Política de Privacidad" : "Privacy Policy"}
            </Link>
            <Link href="#" className="text-sm text-white/60 hover:text-white">
              {locale === "es" ? "Términos de Uso" : "Terms of Use"}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
