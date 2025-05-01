"use client"

import { useLanguage } from "@/components/language-provider"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export function AboutPreview() {
  const { locale } = useLanguage()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <section className="py-24 bg-[#23323a]/5">
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl font-bold text-[#23323a] mb-8 leading-tight"
          >
            {locale === "es" ? "ARQUITECTURA 360°" : "ARCHITECTURE 360°"}
          </motion.h2>

          <motion.h3
            variants={itemVariants}
            className="text-xl md:text-2xl text-[#23323a] font-light mb-8 uppercase tracking-wider"
          >
            {locale === "es" ? "Diseño, Innovación y Elegancia" : "Design, Innovation and Elegance"}
          </motion.h3>

          <motion.p variants={itemVariants} className="text-lg text-[#23323a]/80 mb-12">
            {locale === "es"
              ? "Cada proyecto tiene una historia. La visualizamos con sensibilidad estética y realismo, para que tus ideas emocionen desde el primer vistazo. Diseñamos atmósferas, no solo imágenes."
              : "Every project has a story. We visualize it with aesthetic sensitivity and realism, so your ideas inspire from the very first glance. We design atmospheres, not just images."}
          </motion.p>

          <motion.div variants={itemVariants}>
            <Link href={`/${locale}/about`}>
              <Button variant="ghost" className="group text-[#23323a] hover:text-[#23323a]/80">
                {locale === "es" ? "Conocer más sobre nosotros" : "Learn more about us"}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
