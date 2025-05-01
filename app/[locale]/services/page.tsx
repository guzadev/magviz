"use client"

import { useLanguage } from "@/components/language-provider"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Camera, Clapperboard, CuboidIcon as Cube, Compass } from "lucide-react"

export default function ServicesPage() {
  const { t } = useLanguage()

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-[#eae0d6]/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-poppins font-bold text-[#23323a] mb-6">{t("services.title")}</h1>
            <p className="text-lg text-muted-foreground">{t("services.renders.content")}</p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-poppins font-bold text-[#23323a] mb-6">{t("services.renders.title")}</h2>
              <p className="text-muted-foreground mb-6">{t("services.renders.content")}</p>
              <ul className="space-y-2">
                {(() => {
                  const items = t("services.renders.items");
                  if (Array.isArray(items)) {
                    return items.map((item: string, index: number) => (
                      <li key={index} className="flex items-center">
                        <div className="h-2 w-2 rounded-full bg-[#23323a] mr-2"></div>
                        <span>{item}</span>
                      </li>
                    ));
                  } else if (typeof items === 'string') {
                    return <li>{items}</li>;
                  }
                  return null;
                })()}
              </ul>
            </div>
            <div className="order-1 lg:order-2 relative w-full max-w-[700px] mx-auto aspect-[16/9] bg-black rounded-lg overflow-hidden">
              <Image src="/images/services/render.jpg?height=1080&width=1200" alt="Static Renders" fill className="object-contain" />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="order-1 lg:order-2 relative w-full max-w-[350px] mx-auto aspect-[9/16] bg-black rounded-lg overflow-hidden">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/G0xXOAdhXk8?autoplay=1&mute=1&loop=1&playlist=G0xXOAdhXk8&modestbranding=1&controls=0"
              title="Animación Arquitectónica"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>

            <div>
              <h2 className="text-3xl font-poppins font-bold text-[#23323a] mb-6">{t("services.animation.title")}</h2>
              <p className="text-muted-foreground mb-6">{t("services.animation.content")}</p>
              <ul className="space-y-2">
                {(() => {
                  const items = t("services.animation.items");
                  if (Array.isArray(items)) {
                    return items.map((item: string, index: number) => (
                      <li key={index} className="flex items-center">
                        <div className="h-2 w-2 rounded-full bg-[#23323a] mr-2"></div>
                        <span>{item}</span>
                      </li>
                    ));
                  } else if (typeof items === 'string') {
                    return <li>{items}</li>;
                  }
                  return null;
                })()}
              </ul>

            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-poppins font-bold text-[#23323a] mb-6">{t("services.interactive.title")}</h2>
              <p className="text-muted-foreground mb-6">{t("services.interactive.content")}</p>
              <ul className="space-y-2">
                {(() => {
                  const items = t("services.interactive.items");
                  if (Array.isArray(items)) {
                    return items.map((item: string, index: number) => (
                      <li key={index} className="flex items-center">
                        <div className="h-2 w-2 rounded-full bg-[#23323a] mr-2"></div>
                        <span>{item}</span>
                      </li>
                    ));
                  } else if (typeof items === 'string') {
                    return <li>{items}</li>;
                  }
                  return null;
                })()}
              </ul>

            </div>
            <div className="order-1 lg:order-2 relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/images/services/360.png?height=800&width=1200"
                alt="Interactive Walkthroughs"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Formats */}
      <section className="py-16 md:py-24 bg-[#eae0d6]/30">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-[#23323a] mb-12 text-center">
            {t("services.formats.title")}
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="border-none shadow-lg">
              <CardHeader>
                <Camera className="h-10 w-10 text-[#23323a] mb-4" />
                <CardTitle className="text-xl text-[#23323a]">{t("services.renders.title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">JPEG, PNG, PDF</CardDescription>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader>
                <Clapperboard className="h-10 w-10 text-[#23323a] mb-4" />
                <CardTitle className="text-xl text-[#23323a]">{t("services.animation.title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">MP4, MOV, AVI</CardDescription>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader>
                <Compass className="h-10 w-10 text-[#23323a] mb-4" />
                <CardTitle className="text-xl text-[#23323a]">{t("services.interactive.title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">Link web, iframe para incrustar, modo VR</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
