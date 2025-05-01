"use client"

import { useLanguage } from "@/components/language-provider"
import { Camera, Clapperboard, Compass, Rotate3d } from "lucide-react"
import { motion } from "framer-motion"

export function ServiceHighlights() {
  const { locale } = useLanguage()

  const services = [
    {
      icon: <Camera className="h-10 w-10 text-white" />,
      title: locale === "es" ? "Renders Estáticos" : "Static Renders",
      description:
        locale === "es"
          ? "Imágenes fotorrealistas de alta calidad que capturan la esencia de tu proyecto."
          : "High-quality photorealistic images that capture the essence of your project.",
    },
    {
      icon: <Clapperboard className="h-10 w-10 text-white" />,
      title: locale === "es" ? "Animación" : "Animation",
      description:
        locale === "es"
          ? "Videos renderizados que muestran el proyecto en movimiento desde distintos ángulos con realismo y fluidez."
          : "Rendered videos that showcase the project in motion from different angles with realism and fluidity.",
    },
    {
      icon: <Compass className="h-10 w-10 text-white" />,
      title: locale === "es" ? "Recorridos 360°" : "360° Tours",
      description:
        locale === "es"
          ? "Experiencias inmersivas en tiempo real para explorar libremente los espacios."
          : "Immersive virtual explorations that allow users to navigate your project in every direction from any device.",
    },
    {
      icon: <Rotate3d className="h-10 w-10 text-white" />,
      title: locale === "es" ? "Modelado 3D" : "BIM Visualization",
      description:
        locale === "es"
          ? "Creamos modelos tridimensionales de espacios arquitectónicos a partir de planos para visualizarlos con precisión y detalle."
          : "We create accurate 3D models of architectural spaces based on plans, enabling clear and detailed visualization.",
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
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="py-24 bg-[#23323a]/5">
      <div className="container">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-[#23323a] mb-4 uppercase"
          >
            {locale === "es" ? "Nuestros Servicios" : "Our Services"}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#23323a]/70 max-w-2xl mx-auto"
          >
            {locale === "es"
              ? "Ofrecemos soluciones completas de visualización arquitectónica para dar vida a tus proyectos."
              : "We offer comprehensive architectural visualization solutions to bring your projects to life."}
          </motion.p>
        </div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-[#23323a] p-8 text-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl text-white font-medium mb-3">{service.title}</h3>
              <p className="text-white/80">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
