import { ArrowRight, BarChart3, Building, MapPin, Trees } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Header } from "@/components/header";
import Link from "next/link";

export default function UseCasesPage() {
  const useCases = [
    {
      icon: <Trees className="h-8 w-8 text-green-500" />,
      title: "Forest",
      description:
        "Advanced monitoring systems for forest fire detection, wildlife tracking, and habitat preservation using IoT sensors and AI-powered analytics.",
      benefits: ["Early fire detection", "Wildlife conservation", "Illegal logging prevention"],
      link: "/use-cases/forest",
    },
    {
      icon: <Building className="h-8 w-8 text-blue-500" />,
      title: "Industry",
      description:
        "Industrial IoT solutions for asset tracking, predictive maintenance, and operational efficiency across manufacturing and processing facilities.",
      benefits: ["Equipment monitoring", "Predictive maintenance", "Process optimization"],
      link: "/use-cases/industry",
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-purple-500" />,
      title: "Smart City",
      description:
        "Integrated urban monitoring solutions for traffic management, public safety, environmental monitoring, and infrastructure optimization.",
      benefits: ["Traffic optimization", "Public safety", "Resource management"],
      link: "/use-cases/smart-city",
    },
    {
      icon: <MapPin className="h-8 w-8 text-yellow-500" />,
      title: "Highway",
      description:
        "Highway monitoring and management systems for traffic flow optimization, accident detection, and infrastructure monitoring across road networks.",
      benefits: ["Traffic monitoring", "Incident detection", "Infrastructure management"],
      link: "/use-cases/highway",
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="relative">
        {/* Hero Section - Full height with negative margin to start from the very top */}
        {/* Header positioned on top of the hero section */}
        <Header />
        <section className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-20 -mt-24 pt-36 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Real-World Use Cases</h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90">Discover how our technology is transforming industries and environments</p>
            </div>
          </div>
        </section>

        {/* Use Cases Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Proven Solutions for Every Challenge</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                From crop monitoring to yield optimization, see how our technology addresses real farming challenges
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {useCases.map((useCase, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        {useCase.icon}
                        <CardTitle className="text-xl">{useCase.title}</CardTitle>
                      </div>
                      <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-teal-500 transition-colors" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 mb-4 text-base">{useCase.description}</CardDescription>
                    <div className="space-y-2 mb-4">
                      {useCase.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-700">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                          {benefit}
                        </div>
                      ))}
                    </div>
                    <Link href={useCase.link}>
                      <Button variant="outline" className="w-full group-hover:bg-teal-50 group-hover:border-teal-300 bg-transparent">
                        Learn More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
