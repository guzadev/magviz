"use client"

import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import { cn } from "@/lib/utils"

export function LanguageSwitcher({
  isScrolled = true,
  isHomePage = false,
}: { isScrolled?: boolean; isHomePage?: boolean }) {
  const { locale } = useLanguage()
  const router = useRouter()
  const pathname = usePathname()

  const toggleLanguage = () => {
    const newLocale = locale === "es" ? "en" : "es"
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`)
    router.push(newPath)
  }

  // Determinar el color del texto basado en la página y el scroll
  const getTextColor = () => {
    if (isHomePage && !isScrolled) {
      return "text-white hover:text-white/80"
    }
    return "text-[#23323a] hover:text-[#23323a]/80"
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className={cn("text-sm font-poppins font-medium uppercase tracking-wider", getTextColor())}
    >
      {locale === "es" ? "EN" : "ES"}
    </Button>
  )
}
