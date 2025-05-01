"use client"

import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

export function CallToAction() {
  const { locale } = useLanguage()

  return (
    <section className="py-24 bg-[#23323a] text-white">
      <div className="container text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-6 uppercase tracking-wider"
        >
          {locale === "es" ? "¿Listo para dar vida a tu proyecto?" : "Ready to bring your project to life?"}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-[#eae0d6] max-w-2xl mx-auto mb-8"
        >
          {locale === "es"
            ? "Contacta con nosotros para discutir cómo podemos ayudarte a visualizar tu próximo proyecto arquitectónico."
            : "Contact us to discuss how we can help you visualize your next architectural project."}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href={`/${locale}/contact`}>
            <Button
              size="lg"
              className="bg-white text-[#23323a] hover:bg-white/90 px-8 py-6 text-base font-medium"
            >
              {locale === "es" ? "Contactar" : "Get in Touch"}
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
