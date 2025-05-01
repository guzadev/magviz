"use client"

import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Instagram, Linkedin, Mail, Phone } from "lucide-react"
import { BsBehance } from "react-icons/bs"
import Link from "next/link"

export default function ContactPage() {
  const { t } = useLanguage()

  return (
    <div className="pt-20">
      {/* Contact Form Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h1 className="text-4xl md:text-5xl font-poppins font-light text-[#23323a] mb-6">{t("contact.title")}</h1>
              <p className="text-lg text-muted-foreground mb-8">{t("contact.form.message")}</p>

              <div className="space-y-6 mb-8">
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-[#23323a] mr-4" />
                  <span>+5491164297392 | +5491163680161</span>
                </div>
                <div className="flex items-center">
                  <Link href="mailto:mag.viz.studio@gmail.com" className="flex items-center hover:underline">
                    <Mail className="h-6 w-6 text-[#23323a] mr-4" />
                    <span>mag.viz.studio@gmail.com</span>
                  </Link>
                </div>
                <div className="flex items-center">
                  <Link href="https://www.instagram.com/mag.viz" target="_blank" rel="noopener noreferrer" className="flex items-center hover:underline">
                    <Instagram className="h-6 w-6 text-[#23323a] mr-4" />
                    <span>@mag.viz</span>
                </Link>
                </div>
                <div className="flex items-center">
                  <Link href="https://www.linkedin.com/company/magviz" target="_blank" rel="noopener noreferrer" className="flex items-center hover:underline">
                    <Linkedin className="h-6 w-6 text-[#23323a] mr-4" />
                    <span>MAG Studio</span>
                  </Link>
                </div>
                <div className="flex items-center">
                  <Link href="https://behance.net/magviz" target="_blank" rel="noopener noreferrer" className="flex items-center hover:underline">
                    <BsBehance className="h-6 w-6 text-[#23323a] mr-4" />
                    <span>MAG Studio</span>
                  </Link>
                </div>
              </div>

              <Link href="https://drive.google.com/file/d/1XpHu3g0bcKDe-PQx3EWiKlWLOBXyySsw/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <Button className="flex items-center bg-[#23323a] hover:bg-[#23323a]/90 text-white">
                  {t("contact.download")}
                </Button>
              </Link>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">{t("contact.form.name")}</Label>
                <Input id="name" placeholder={t("contact.form.name")} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">{t("contact.form.email")}</Label>
                <Input id="email" type="email" placeholder={t("contact.form.email")} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">{t("contact.form.message")}</Label>
                <Textarea id="message" placeholder={t("contact.form.message")} rows={5} />
              </div>
              <Button type="submit" className="w-full bg-[#23323a] hover:bg-[#23323a]/90 text-white">
                {t("contact.form.submit")}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
