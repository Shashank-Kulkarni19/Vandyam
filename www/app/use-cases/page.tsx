import { Header } from "@/components/header";


import Link from "next/link";
import { ArrowRight, Factory, Building2, Droplets, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function UseCasesPage() {
  const useCases = [
    {
      title: "Industries",
      description: "Smart manufacturing and industrial IoT solutions for predictive maintenance and efficiency.",
      href: "/use-cases/industries",
      icon: Factory,
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      title: "Smart City",
      description: "Scaleble IoT infrastructure for urban development, waste management, and smart lighting.",
      href: "/smart-city",
      icon: Building2,
      color: "text-indigo-600",
      bgColor: "bg-indigo-50"
    },
    {
      title: "Smart Campus",
      description: "Build real-world IoT solutions that enhance campus efficiency, sustainability, and safety.",
      href: "/use-cases/smart-campus",
      icon: GraduationCap,
      color: "text-teal-600",
      bgColor: "bg-teal-50"
    },
    {
      title: "Utilities",
      description: "Large-scale opportunities in electricity, gas, and water metering deployments across India.",
      href: "/use-cases/utilities",
      icon: Droplets,
      color: "text-amber-600",
      bgColor: "bg-amber-50"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="py-20 bg-blue-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">Use Cases</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Discover how our LoRaWAN solutions are transforming various sectors with intelligent, long-range connectivity.
            </p>
          </div>
        </section>

        <section className="py-20 text-center">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((uc) => (
                <Link key={uc.title} href={uc.href}>
                  <Card className="h-full hover:shadow-xl transition-all duration-300 border-none group">
                    <CardContent className="p-8">
                      <div className={`w-14 h-14 rounded-2xl ${uc.bgColor} ${uc.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                        <uc.icon className="w-8 h-8" />
                      </div>
                      <h2 className="text-2xl font-bold mb-4 text-gray-900">{uc.title}</h2>
                      <p className="text-gray-600 mb-6 line-clamp-3">
                        {uc.description}
                      </p>
                      <div className="flex items-center text-blue-600 font-semibold">
                        Learn more <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

    </div>
  );
}

