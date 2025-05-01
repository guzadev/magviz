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
      ? "Estudio profesional de visualización arquitectónica y renderizado 3D"
      : "Professional architectural visualization and 3D rendering studio",
    metadataBase: new URL("https://magstudio.com"),
    openGraph: {
      type: "website",
      locale: locale,
      title: "MAG Studio | " + (locale === "es" ? "Visualización Arquitectónica" : "Architectural Visualization"),
      description: locale === "es"
        ? "Estudio profesional de visualización arquitectónica y renderizado 3D"
        : "Professional architectural visualization and 3D rendering studio",
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
