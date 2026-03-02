"use client"

import { Button } from "@/components/ui/button"
import { Description } from "@radix-ui/react-toast"
import { CloudUpload, DollarSign, ChartNoAxesCombined, TriangleAlert } from "lucide-react"
import Link from "next/link"

export function ImpactSection() {
  const impactStats = [
    {
      icon: <TriangleAlert className="h-12 w-12 text-blue-500" />,
      title: "Remote Monitoring & Instant Alerts",
      color: "bg-blue-100",
      borderColor: "border-blue-300"
    },
    {
      icon: <DollarSign className="h-12 w-12 text-blue-600" />,
      title: "Reduced Loss & Cost Efficiency",
      color: "bg-blue-50",
      borderColor: "border-blue-300"
    },
    {
      icon: <CloudUpload className="h-12 w-12 text-blue-400" />,
      title: "Data-Driven Insights & Secure Cloud Access",
      color: "bg-blue-100",
      borderColor: "border-blue-300"
    },
    {
      icon: <ChartNoAxesCombined className="h-12 w-12 text-blue-700" />,
      title: "Increase in Farm Produce",
      color: "bg-blue-50",
      borderColor: "border-blue-300"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-[1400px] mx-auto">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
              Experience the Future of Intelligent Asset Protection
              <br />
              with Vandyam
            </h2>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Emerging from a passion for conservation and innovation, our mission is to build trusted, efficient, and
              inclusive IoT solutions that safeguard critical assets—whether in the heart of a forest, across industrial
              sites, on the move with vehicles, or within smart cities.
            </p>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We empower organizations to monitor remote and valuable assets with intelligence, ensuring forests remain wild,
              industries stay efficient, vehicles are secured, and cities evolve safely for generations to come.
            </p>

            <Link href="/contact" className="inline-block">
              <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3">
                Know More
              </Button>
            </Link>
          </div>

          {/* Right Impact Stats */}
          <div className="relative">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Our Solutions
            </h3>

            <div className="space-y-6">
              {impactStats.map((stat, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between p-6 rounded-xl border-2 ${stat.borderColor} ${stat.color} transform transition-all duration-500 hover:scale-105`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-full bg-white shadow-md`}>
                      {stat.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm md:text-base">
                        {stat.title}
                      </h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-100 rounded-full opacity-50"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-50 rounded-full opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
