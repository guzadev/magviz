import { HeroSection } from "@/components/hero-section"
import { FeaturedProjects } from "@/components/featured-projects"
import { ServiceHighlights } from "@/components/service-highlights"
import { CallToAction } from "@/components/call-to-action"
import { AboutPreview } from "@/components/about-preview"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <FeaturedProjects />
      <ServiceHighlights />
      <CallToAction />
    </>
  )
}
