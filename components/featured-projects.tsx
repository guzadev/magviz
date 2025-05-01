"use client"

import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export function FeaturedProjects() {
  const { t, locale } = useLanguage()

  const featuredProjects = [
    {
      id: 1,
      title: locale === "es" ? "Residencia Moderna" : "Modern Residence",
      category: locale === "es" ? "Residencial" : "Residential",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 2,
      title: locale === "es" ? "Oficinas Corporativas" : "Corporate Offices",
      category: locale === "es" ? "Comercial" : "Commercial",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 3,
      title: locale === "es" ? "Diseño Interior Minimalista" : "Minimalist Interior Design",
      category: locale === "es" ? "Interiores" : "Interior",
      image: "/placeholder.svg?height=600&width=800",
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-[#23323a] mb-4 uppercase"
            >
              {locale === "es" ? "Proyectos Destacados" : "Featured Projects"}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#23323a]/70 max-w-2xl"
            >
              {locale === "es"
                ? "Una selección de nuestros mejores trabajos de visualización arquitectónica."
                : "A selection of our best architectural visualization works."}
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link href={`/${locale}/projects`}>
              <Button variant="ghost" className="group text-[#23323a] hover:text-[#23323a]/80">
                {locale === "es" ? "Ver todos los proyectos" : "View all projects"}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <Link href={`/${locale}/projects/${project.id}`} className="block overflow-hidden">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-t from-[#23323a]/90 to-transparent flex items-end p-6"
                  >
                    <div>
                      <span className="text-sm font-medium text-[#eae0d6]">{project.category}</span>
                      <h3 className="text-xl font-medium text-white">{project.title}</h3>
                    </div>
                  </motion.div>
                </div>
                <div className="p-4 bg-[#23323a]/5">
                  <span className="text-sm font-medium text-[#23323a]/60">{project.category}</span>
                  <h3 className="text-xl font-medium text-[#23323a]">{project.title}</h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
