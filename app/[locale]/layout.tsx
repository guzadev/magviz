import type React from "react"
import { notFound } from "next/navigation"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const locales = ["es", "en"]

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const locale = params?.locale || "es";
  
  return {
    title: "MAG Studio | " + (locale === "es" ? "Visualización Arquitectónica" : "Architectural Visualization"),
    description: locale === "es"
      ? "Estudio profesional de visualización arquitectónica, renders fotorrealistas, animaciones 3D y recorridos interactivos."
      : "Professional architectural visualization studio: photorealistic renders, 3D animations, and interactive walkthroughs.",
    metadataBase: new URL("https://magviz.vercel.app"),
    keywords: locale === "es"
      ? [
          "renders arquitectónicos",
          "visualización arquitectónica",
          "render 3D",
          "animaciones arquitectura",
          "recorridos virtuales arquitectura",
          "MAG Studio",
        ]
      : [
          "architectural renders",
          "3D visualization",
          "rendering studio",
          "architectural animation",
          "virtual tours architecture",
          "MAG Studio",
        ],
    openGraph: {
      type: "website",
      locale: locale,
      url: "https://magviz.vercel.app",
      siteName: "MAG Studio",
      title: "MAG Studio | " + (locale === "es" ? "Visualización Arquitectónica" : "Architectural Visualization"),
      description: locale === "es"
        ? "Renders fotorrealistas, animaciones 3D y recorridos virtuales para arquitectura."
        : "Photorealistic renders, 3D animations and virtual walkthroughs for architecture.",
      images: [
        {
          url: "og-image.png",
          width: 1200,
          height: 630,
          alt: "MAG Studio - Visualización Arquitectónica",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "MAG Studio",
      description: locale === "es"
        ? "Visualización arquitectónica de alta calidad: renders, animaciones y recorridos."
        : "High-end architectural visualization: renders, animations, and tours.",
      images: ["https://magviz.vercel.app/og-image.png"],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  // Para acceder a los parámetros de la ruta de manera asíncrona en Next.js 15
  const locale = params?.locale || "es";
  
  // Validate locale
  if (!locales.includes(locale)) {
    notFound()
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <LanguageProvider locale={locale}>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  )
}
