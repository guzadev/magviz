"use client"

import { useLanguage } from "@/components/language-provider"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function HeroSection() {
  const { t, locale } = useLanguage()

  return (
    <section className="relative min-h-screen flex items-center bg-[url('/hero.jpg?height=1080&width=1920')] bg-cover bg-center">
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Contenido superpuesto */}
      <div className="container relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-6xl md:text-7xl font-museo-moderno font-bold text-white mb-6 leading-tight">MAG.</h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-xl md:text-2xl text-[#eae0d6] font-light mb-8 uppercase tracking-widest">
              {locale === "es" ? "Estudio de Visualización Arquitectónica" : "Architectural Visualization Studio"}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="text-lg md:text-xl text-white/90 mb-12 max-w-xl">
              {locale === "es"
                ? "Transformamos conceptos arquitectónicos en experiencias visuales impactantes con precisión y elegancia."
                : "We transform architectural concepts into impactful visual experiences with precision and elegance."}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href={`/${locale}/projects`}>
              <Button
                size="lg"
                className="bg-[#23323a] text-white hover:bg-[#23323a]/90 px-8 py-6 text-base"
              >
                {locale === "es" ? "Ver Proyectos" : "View Projects"}
              </Button>
            </Link>
            <Link href={`/${locale}/contact`}>
              <Button
                size="lg"
                className="bg-[#23323a] text-white hover:bg-[#23323a]/90 px-8 py-6 text-base"
              >
                {locale === "es" ? "Contactar" : "Contact Us"}
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center">
          <span className="text-white/60 text-sm mb-2">{locale === "es" ? "Desplazar" : "Scroll"}</span>
          <div className="w-0.5 h-16 bg-white/30 relative overflow-hidden">
            <motion.div
              animate={{
                y: [0, 40, 0],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
              }}
              className="w-full h-1/3 bg-white absolute top-0"
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
