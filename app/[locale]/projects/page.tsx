"use client"

import { useLanguage } from "@/components/language-provider"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export default function ProjectsPage() {
  const { locale } = useLanguage()

  const projects = [
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
    {
      id: 4,
      title: locale === "es" ? "Villa Mediterránea" : "Mediterranean Villa",
      category: locale === "es" ? "Residencial" : "Residential",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 5,
      title: locale === "es" ? "Centro Comercial" : "Shopping Mall",
      category: locale === "es" ? "Comercial" : "Commercial",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 6,
      title: locale === "es" ? "Paisaje Urbano" : "Urban Landscape",
      category: locale === "es" ? "Exterior" : "Exterior",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 7,
      title: locale === "es" ? "Apartamento de Lujo" : "Luxury Apartment",
      category: locale === "es" ? "Interiores" : "Interior",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 8,
      title: locale === "es" ? "Hotel Boutique" : "Boutique Hotel",
      category: locale === "es" ? "Comercial" : "Commercial",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 9,
      title: locale === "es" ? "Casa de Playa" : "Beach House",
      category: locale === "es" ? "Residencial" : "Residential",
      image: "/placeholder.svg?height=600&width=800",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <div className="pt-20">
      <section className="py-16 md:py-24 bg-[#23323a]/5">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-[#23323a] mb-12 text-center"
          >
            {locale === "es" ? "PROYECTOS" : "PROJECTS"}
          </motion.h1>

          {/* Behance-style Projects Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {projects.map((project, index) => (
              <motion.div key={project.id} variants={itemVariants} className="group">
                <Link href={`/${locale}/projects/${project.id}`} className="block">
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={800}
                      height={600}
                      className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#23323a]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div>
                        <span className="text-sm font-medium text-[#eae0d6]">{project.category}</span>
                        <h3 className="text-xl font-medium text-white">{project.title}</h3>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-[#23323a]">
                    <span className="text-sm font-medium text-white/60">{project.category}</span>
                    <h3 className="text-xl font-medium text-white">{project.title}</h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
