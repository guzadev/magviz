"use client"

import { useLanguage } from "@/components/language-provider"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function WorkflowPage() {
  const { t } = useLanguage()

  const workflowSteps = [
    {
      number: "01",
      title: t("workflow.step1.title"),
      description: t("workflow.step1.content"),
      image: "/images/workflow/1.jpg",
    },
    {
      number: "02",
      title: t("workflow.step2.title"),
      description: t("workflow.step2.content"),
      image: "/images/workflow/2.jpg",
    },
    {
      number: "03",
      title: t("workflow.step3.title"),
      description: t("workflow.step3.content"),
      image: "/images/workflow/3.jpg",
    },
    {
      number: "04",
      title: t("workflow.step4.title"),
      description: t("workflow.step4.content"),
      image: "/images/workflow/4.jpg",
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-[#eae0d6]/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-poppins font-bold text-[#23323a] mb-6">{t("workflow.title")}</h1>
            <p className="text-lg text-muted-foreground">{t("workflow.description")}</p>
          </div>
        </div>
      </section>

      {/* Workflow Steps */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#eae0d6] -translate-x-1/2 hidden md:block"></div>

            {workflowSteps.map((step, index) => (
              <div
                key={index}
                className={`relative grid md:grid-  => (
              <div 
                key={index} 
                className={\`relative grid md:grid-cols-2 gap-12 items-center mb-24 ${index % 2 === 1 ? "md:rtl" : ""}`}
              >
                <div className={`${index % 2 === 1 ? "md:text-right" : ""} md:ltr`}>
                  <div className="flex items-center mb-4">
                    <span className="text-5xl font-bold text-[#23323a] mr-4">{step.number}</span>
                    <h2 className="text-2xl font-poppins font-bold text-[#23323a]">{step.title}</h2>
                  </div>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                <div className="relative h-[300px] rounded-lg overflow-hidden">
                  <Image src={step.image || "/placeholder.svg"} alt={step.title} fill className="object-cover" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Detail */}
      <section className="py-16 md:py-24 bg-[#eae0d6]/30">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-[#23323a] mb-12 text-center">
            {t("workflow.title")}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workflowSteps.map((step, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-[#23323a] text-white flex items-center justify-center text-xl font-bold mb-4">
                    {step.number}
                  </div>
                  <CardTitle className="text-xl text-[#23323a]">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">{step.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
