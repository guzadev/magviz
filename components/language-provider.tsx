"use client"

import type React from "react"

import { createContext, useContext } from "react"

type Locale = "es" | "en"

type Translations = {
  [key: string]: {
    [locale in Locale]: string | string[]
  }
}

// Define translations
const translations: Translations = {
  // Navbar
  "nav.home": {
    es: "Inicio",
    en: "Home",
  },
  "nav.about": {
    es: "Nosotros",
    en: "About Us",
  },
  "nav.projects": {
    es: "Proyectos",
    en: "Projects",
  },
  "nav.services": {
    es: "Servicios",
    en: "Services",
  },
  "nav.workflow": {
    es: "Proceso",
    en: "Workflow",
  },
  "nav.contact": {
    es: "Contacto",
    en: "Contact",
  },

  // Home
  "home.hero.title": {
    es: "Creamos espacios visuales impactantes",
    en: "We create impactful visual spaces",
  },
  "home.hero.subtitle": {
    es: "Transformamos conceptos arquitectónicos en experiencias visuales impactantes",
    en: "Transforming architectural concepts into impactful visual experiences",
  },
  "home.project.description": {
    es: "Cada proyecto tiene una historia. La visualizamos con sensibilidad estética y realismo, para que tus ideas emocionen desde el primer vistazo. Diseñamos atmósferas, no solo imágenes.",
    en: "Every project has a story. We visualize it with aesthetic sensitivity and realism, so your ideas inspire from the very first glance. We design atmospheres, not just images.",
  },
  "home.cta": {
    es: "Ver proyectos",
    en: "View projects",
  },

  // About
  "about.title": {
    es: "Sobre Nosotros",
    en: "About Us",
  },
  "about.story.title": {
    es: "Nuestra Historia",
    en: "Our Story",
  },
  "about.story.content": {
    es: "MAG Studio nació en 2024 con una visión clara: fusionar técnica, diseño y emoción para crear visualizaciones arquitectónicas que inspiran. Somos un estudio joven con mucha ambición, comprometido con la excelencia y la innovación. Nuestro trabajo se centra en capturar la esencia de cada proyecto, destacando materiales, iluminación y atmósferas para lograr un resultado realista y envolvente.",
    en: "MAG Studio was founded in 2024 with a clear vision: to merge technique, design, and emotion to create inspiring architectural visualizations. We are a young studio with great ambition, committed to excellence and innovation. Our work focuses on capturing the essence of each project, highlighting materials, lighting, and atmosphere to achieve a realistic and immersive result.",
  },
  "about.values.title": {
    es: "Visión y profesionalismo",
    en: "Vision and professionalism",
  },
  "about.card.values.title": {
    es: "Valores",
    en: "Values",
  },
  "about.values.content": {
    es: "Nos guiamos por la excelencia, la atención al detalle y la innovación constante. Creemos en la colaboración estrecha con nuestros clientes para capturar la esencia de cada proyecto.",
    en: "We are guided by excellence, attention to detail, and constant innovation. We believe in close collaboration with our clients to capture the essence of each project.",
  },
  "about.philosophy.title": {
    es: "Filosofía de Trabajo",
    en: "Working Philosophy",
  },
  "about.philosophy.content": {
    es: "Cada proyecto es único y merece un enfoque personalizado. Combinamos técnicas artísticas con tecnología avanzada para crear visualizaciones que no solo muestran espacios, sino que cuentan historias.",
    en: "Each project is unique and deserves a personalized approach. We combine artistic techniques with advanced technology to create visualizations that not only show spaces but tell stories.",
  },
  "about.ethics.title": {
    es: "Responsabilidad y Ética",
    en: "Responsibility and Ethics",
  },
  "about.ethics.content": {
    es: "Nos comprometemos con una práctica profesional responsable, cumpliendo plazos, respetando la propiedad intelectual y promoviendo relaciones transparentes.",
    en: "We are committed to responsible professional practice, meeting deadlines, respecting intellectual property, and promoting transparent relationships.",
  },
  "about.tools.title": {
    es: "Herramientas",
    en: "Tools",
  },
  "about.team.title": {
    es: "Equipo",
    en: "Team",
  },

  // Projects
  "projects.title": {
    es: "Proyectos",
    en: "Projects",
  },
  "projects.filter.all": {
    es: "Todos",
    en: "All",
  },
  "projects.filter.residential": {
    es: "Residencial",
    en: "Residential",
  },
  "projects.filter.commercial": {
    es: "Comercial",
    en: "Commercial",
  },
  "projects.filter.interior": {
    es: "Interiores",
    en: "Interior",
  },
  "projects.filter.exterior": {
    es: "Exteriores",
    en: "Exterior",
  },

  // Services
  "services.title": {
    es: "Servicios",
    en: "Services",
  },
  "services.renders.title": {
    es: "Renders Estáticos",
    en: "Static Renders",
  },
  "services.renders.content": {
    es: "Imágenes fotorrealistas de alta calidad que capturan la esencia arquitectónica de cada proyecto. Nos encargamos de todo el proceso: desde el modelado hasta la producción final. Ideales para presentaciones, ventas, concursos y redes sociales.",
    en: "High-quality photorealistic images that capture the architectural essence of each project. We handle the entire process — from modeling to final production. Ideal for presentations, sales, competitions, and social media.",
  },
  "services.animation.title": {
    es: "Animación",
    en: "Animation",
  },
  "services.animation.content": {
    es: "Videos renderizados que muestran el proyecto en movimiento, permitiendo explorarlo de forma dinámica y envolvente. Es la forma ideal de presentar una propuesta con impacto visual y claridad espacial.",
    en: "Rendered videos that bring your project to life, allowing it to be explored dynamically and immersively. A powerful way to present with clarity and visual impact.",
  },
  "services.interactive.title": {
    es: "Recorridos Interactivos",
    en: "Interactive Walkthroughs",
  },
  "services.interactive.content": {
    es: "Exploraciones virtuales creadas con imágenes 360° renderizadas e integradas en Kuula. Permiten recorrer espacios de forma inmersiva desde cualquier dispositivo con conexión a internet.",
    en: "Virtual walkthroughs created with 360° rendered images using Kuula. Easily accessible from any device with internet access — no installation required.",
  },
  "services.formats.title": {
    es: "Formatos de Entrega",
    en: "Delivery Formats",
  },
  "services.formats.content": {
    es: "Ofrecemos múltiples formatos: JPEG, TIFF, PNG para imágenes; MP4, MOV para videos; y aplicaciones ejecutables para experiencias interactivas.",
    en: "We offer multiple formats: JPEG, TIFF, PNG for images; MP4, MOV for videos; and executable applications for interactive experiences.",
  },

  "services.renders.items": {
    es: [
      "Renders exteriores",
      "Renders interiores",
      "Modelado del proyecto y entorno",
      "Ambientación interior con mobiliario y decoración",
      "Iluminación natural y artificial realista",
      "Aplicación de materiales y mapas",
      "Renderizado en 2K o 4K",
    ],
    en: [
      "Exterior renders",
      "Interior renders",
      "Project and environment modeling",
      "Interior styling with furniture and decor",
      "Realistic natural and artificial lighting",
      "Material and texture mapping",
      "Rendering in 2K or 4K",
    ]
  },

  "services.animation.items": {
    es: [
      "Ambientación interior con mobiliario y decoración",
      "Iluminación natural y artificial realista",
      "Aplicación de materiales y mapas",
      "Animación de cámaras: movimientos y recorridos",
      "Renderizado de los cuadros para el video",
      "Resolución Full HD (1920x1080 px)",
      "Frame rate: 24 fps",
    ],
    en: [
      "Interior styling with furniture and decor",
      "Realistic natural and artificial lighting",
      "Material and texture mapping",
      "Camera animation: movements and walkthroughs",
      "Frame-by-frame rendering for video",
      "Full HD resolution (1920x1080 px)",
      "Frame rate: 24 fps",
    ]
  },

  "services.interactive.items": {
    es: [
      "Imagen 360° del espacio",
      "Link web para compartir",
      "Código iframe para insertar en tu sitio web",
      "Visualización en modo VR",
      "Hotspots (puntos interactivos)",
      "Etiquetas de texto (Text Labels)",
      "Enlaces entre escenas",
      "Control del ángulo inicial",
    ],
    en: [
      "360° panoramic image",
      "Shareable web link",
      "Iframe code for embedding",
      "VR-compatible visualization",
      "Hotspots (interactive points)",
      "Text Labels",
      "Scene-to-scene navigation",
      "Initial view angle control",
    ]
    },

  // Workflow
  "workflow.title": {
    es: "Proceso de Trabajo",
    en: "Workflow",
  },
  "workflow.description": {
    es: "Acompañamos tu proyecto desde la idea inicial hasta la entrega final, a través de un proceso claro, profesional y colaborativo.",
    en: "We guide your project from the initial idea to the final delivery through a clear, professional, and collaborative process.",
  },
  "workflow.step1.title": {
    es: "Exploramos tu proyecto",
    en: "We explore your project",
  },
  "workflow.step1.content": {
    es: "En una videollamada inicial, escuchamos tus ideas, objetivos y estilo deseado. Definimos la cantidad de imágenes necesarias y los detalles clave para empezar a visualizar tu proyecto con claridad.",
    en: "In an initial video call, we listen to your ideas, goals, and desired style. We define the number of images needed and the key details to start visualizing your project with clarity.",
  },
  "workflow.step2.title": {
    es: "Propuesta y planificación",
    en: "Proposal and planning",
  },
  "workflow.step2.content": {
    es: "Te enviamos una cotización detallada. Una vez aprobada, comenzamos a diseñar la composición, cámaras e iluminación que mejor comuniquen tu concepto arquitectónico.",
    en: "We send you a detailed quote. Once approved, we begin designing the composition, camera angles, and lighting that best convey your architectural concept.",
  },
  "workflow.step3.title": {
    es: "Ajustamos los detalles",
    en: "We fine-tune the details",
  },
  "workflow.step3.content": {
    es: "Te compartimos una previsualización con mobiliario, materiales y ambientación. Incluye hasta 3 rondas de correcciones para lograr una imagen que represente exactamente lo que imaginás.",
    en: "You receive a draft preview with furniture, materials, and ambiance included. We offer up to 3 rounds of revisions to ensure every detail reflects your vision.",
  },
  "workflow.step4.title": {
    es: "Entrega final",
    en: "Final delivery",
  },
  "workflow.step4.content": {
    es: "Te entregamos las imágenes en formato .JPG y resolución 2K listas para presentación o publicación. También ofrecemos versiones en mayor resolución si las necesitás.",
    en: "We deliver high-quality .JPG images in 2K resolution, ready for presentation or publication. Higher-resolution formats are also available upon request.",
  },

  // Contact
  "contact.title": {
    es: "Contacto",
    en: "Contact",
  },
  "contact.form.name": {
    es: "Nombre",
    en: "Name",
  },
  "contact.form.email": {
    es: "Correo electrónico",
    en: "Email",
  },
  "contact.form.message": {
    es: "Mensaje",
    en: "Message",
  },
  "contact.form.submit": {
    es: "Enviar",
    en: "Submit",
  },
  "contact.download": {
    es: "Descargar Portfolio PDF",
    en: "Download PDF Portfolio",
  },

  // Footer
  "footer.rights": {
    es: "© 2023 MAG Studio. Todos los derechos reservados.",
    en: "© 2023 MAG Studio. All rights reserved.",
  },
  "footer.privacy": {
    es: "Política de Privacidad",
    en: "Privacy Policy",
  },
  "footer.terms": {
    es: "Términos de Uso",
    en: "Terms of Use",
  },
}

type LanguageContextType = {
  locale: Locale
  t: (key: string) => string | string[] | undefined
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export function LanguageProvider({
  children,
  locale,
}: {
  children: React.ReactNode
  locale: string
}) {
  const currentLocale = (locale as Locale) || "es"

  const t = (key: string) => {
    return translations[key]?.[currentLocale] || key
  }

  return <LanguageContext.Provider value={{ locale: currentLocale, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
