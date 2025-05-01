"use client"

import { useLanguage } from "@/components/language-provider"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ShieldCheck, Code, Lightbulb, Users } from "lucide-react"

export default function AboutPage() {
  const { t } = useLanguage()

  const tools = [
    "3ds Max",
    "Corona",
    "V-Ray",
    "SketchUp",
    "AutoCAD",
    "Photoshop",
    "Kuula",
    "Miro",
    "Python",
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-[#eae0d6]/30">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-poppins font-bold text-[#23323a] mb-6">{t("about.title")}</h1>
              <p className="text-lg text-muted-foreground mb-6">{t("about.story.content")}</p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/nosotros.jpg?height=800&width=1200" alt="MAG Studio Team" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-[#23323a] mb-12 text-center">
            {t("about.values.title")}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-none shadow-lg">
              <CardHeader>
                <Lightbulb className="h-10 w-10 text-[#23323a] mb-4" />
                <CardTitle className="text-xl text-[#23323a]">{t("about.card.values.title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">{t("about.values.content")}</CardDescription>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader>
                <Users className="h-10 w-10 text-[#23323a] mb-4" />
                <CardTitle className="text-xl text-[#23323a]">{t("about.philosophy.title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">{t("about.philosophy.content")}</CardDescription>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader>
                <ShieldCheck className="h-10 w-10 text-[#23323a] mb-4" />
                <CardTitle className="text-xl text-[#23323a]">{t("about.ethics.title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {t("about.ethics.content")}
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader>
                <Code className="h-10 w-10 text-[#23323a] mb-4" />
                <CardTitle className="text-xl text-[#23323a]">{t("about.tools.title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-x-3 gap-y-0.5">
                  {tools.map((tool, index) => (
                    <div 
                      key={index} 
                      className="flex items-center py-1 border-b border-[#eae0d6]/70 group hover:bg-[#eae0d6]/10 transition-all duration-300 rounded-sm px-1"
                    >
                      <div className="w-1 h-1 rounded-full bg-[#23323a]/60 mr-2 group-hover:bg-[#23323a] transition-colors"></div>
                      <span className="text-[#23323a]/80 text-[14px] font-medium group-hover:text-[#23323a] transition-colors">{tool}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-[#eae0d6]/30">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-[#23323a] mb-12 text-center">
            {t("about.team.title")}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {[
              { 
                id: 1,
                name: "Arq. Marina Mariscal",
                role: "Co-Fundadora | Renderista",
                photo: "/images/team/marina.jpeg"
              },
              {
                id: 2,
                name: "Ing. Gustavo Paz",
                role: "Co-Fundador | Renderista",
                photo: "/images/team/gustavo.jpeg"
              }
            ].map((member) => (
              <div key={member.id} className="text-center">
                <div className="relative h-80 w-80 mx-auto rounded-full overflow-hidden mb-6">
                  <Image
                    src={member.photo || "/placeholder-user.jpg"}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-medium text-[#23323a] mb-1">
                  {member.name}
                </h3>
                <p className="text-muted-foreground">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
