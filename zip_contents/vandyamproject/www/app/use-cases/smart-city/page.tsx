import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import { Building } from "lucide-react";
import FAQ from "@/components/faq";
import { Header } from "@/components/header";
import { USE_CASES } from "@/lib/use-cases";

export default function SmartCityPage() {
  const { heading, title, description, image, link, challenges, solutions } = USE_CASES.smartCity;

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative text-white py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img src="/use-case/smart-city/smartcity-section.png" alt="Smart City background" className="w-full h-full object-cover" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Building className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{heading}</h1>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Title and Description Section */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">{title}</h2>
                <p className="text-lg text-gray-600 mb-6">{description}</p>
              </div>
              <div className="rounded-lg overflow-hidden">
                <img src={image} alt={`${title} dashboard`} className="w-full h-64 object-cover rounded-lg" />
              </div>
            </div>

            {/* Challenges Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Challenges We Address</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {challenges.map((challenge, index) => (
                  <Card key={index} className="text-center p-6">
                    <CardHeader className="pb-4">
                      <div className={`w-12 h-12 ${challenge.bgColor} rounded-full flex items-center justify-center mx-auto mb-3`}>
                        <span className="text-xl">{challenge.emoji}</span>
                      </div>
                      <CardTitle className="text-lg">{challenge.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm">{challenge.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Solutions Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Solutions in Action</h2>
              <div className="grid md:grid-cols-1 gap-12 max-w-4xl mx-auto">
                {solutions.map((solution, index) => (
                  <div key={index} className="text-center">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-gray-800 mb-3">{solution.title}</h3>
                      <p className="text-lg text-gray-600 max-w-3xl mx-auto">{solution.description}</p>
                    </div>
                    <div className="rounded-lg overflow-hidden max-w-2xl mx-auto">
                      <img src={solution.image} alt={solution.title} className="w-full h-70 object-cover rounded-lg object-bottom" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <FAQ />
      </section>
    </div>
  );
}
