import { Atom, ChartColumn, CpuIcon, Microchip, ShieldCheck, WandSparkles } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

import { Button } from "@/components/ui/button"

export function FeaturesSection() {
  const features = [
    {
      icon: <CpuIcon className="h-8 w-8 text-blue-500" />,
      title: "Hardware Solutions",
      description: "Design, develop, PCBs for your requirements. We have expertise in ultra-low power IoT integrations.",
    },
    {
      icon: <Microchip className="h-8 w-8 text-blue-600" />,
      title: "Firmware Solutions",
      description: "Tailored embedded application/firmware development for efficient, reliable, and scalable system performance.",
    },
    {
      icon: <Atom className="h-8 w-8 text-blue-400" />,
      title: "Full-Stack Development",
      description: "Comprehensive full stack development for seamless front-end, back-end, and database based applications.",
    },
    {
      icon: <WandSparkles className="h-8 w-8 text-blue-700" />,
      title: "UI/UX Design",
      description: "Intuitive, user-friendly interfaces for seamless mobile and web experiences with clear data visualization.",
    },
    {
      icon: <ChartColumn className="h-8 w-8 text-blue-300" />,
      title: "Data Analysis & Insights",
      description: "Use case based AI/ML/Data Analytics to solve the needs.",
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-blue-300" />,
      title: "DevSecOps",
      description: "Integrated DevSecOps practices ensure secure, automated, and compliant CI/CD pipelines for continuous delivery.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer end-to-end AIoT solutions, including robust hardware, intelligent firmware, and seamless full-stack development.
            Our team delivers user-friendly UI/UX and advanced data analysis to transform raw data into actionable insights
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="hover-premium border-0 shadow-lg bg-white/50 backdrop-blur-sm overflow-hidden group opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="absolute top-0 right-0 -mr-8 -mt-8 w-24 h-24 bg-blue-50 rounded-full transition-transform group-hover:scale-150 duration-500 opacity-20" />

                <CardHeader className="text-left pb-4 relative z-10">
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white duration-300">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>


      </div>
    </section>
  )
}
