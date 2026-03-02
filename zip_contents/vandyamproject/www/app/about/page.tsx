import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import { Header } from "@/components/header";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Vandyam's mission to deliver AIoT solutions that drive efficiency, sustainability, and growth. Meet our team of IoT specialists and technology experts.",
  keywords: ["About Vandyam", "IoT specialists", "Technology experts", "AIoT solutions", "Company mission", "Team", "Sustainability"],
  openGraph: {
    title: "About Vandyam - Our Mission & Team",
    description: "Learn about Vandyam's mission to deliver AIoT solutions that drive efficiency, sustainability, and growth.",
    url: "https://vandyam.com/about",
    images: [
      {
        url: "/about-us/about-us.jpeg",
        width: 1200,
        height: 630,
        alt: "About Vandyam Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Vandyam - Our Mission & Team",
    description: "Learn about Vandyam's mission to deliver AIoT solutions that drive efficiency, sustainability, and growth.",
    images: ["/about-us/about-us.jpeg"],
  },
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  const team = [
    {
      name: "Vinayak Kulkarni",
      role: "CEO & Founder",
      description: "IoT specialist with 10+ years in smart monitoring solutions",
      image: "/about-us/vinayak.jpg?height=200&width=200",
    },
    {
      name: "Sunil M",
      role: "CTO & Co-Founder",
      description: "Technology expert specializing in IoT and data analytics",
      image: "/about-us/sunil.jpg?height=100&width=100",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/about-us/about-us.jpeg" alt="Background" fill className="object-cover opacity-30" />
        </div>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About Vandyam</h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">Pioneering the future of IoT monitoring through innovative technology solutions</p>
          </div>
        </div>
      </section>

      {/* Company Description */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Sustainable Data-Driven IoT Monitoring—it's what we do</h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
              At Vandyam Solutions, we specialize in developing advanced AIoT solutions by seamlessly integrating Artificial Intelligence into IoT and
              embedded hardware systems. Backed by strong expertise in software engineering, cloud infrastructure, and mobile/web application
              development, we serve as a full-stack technology partner. Our customizable solutions cater to a range of sectors—smart cities, forests,
              industries, and more—enabling digital transformation and intelligent decision-making across environments.
            </p>
          </div>
        </div>
      </section>

      {/* Vision and Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Vision */}
              <div className="text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-blue-500 mb-8">Vision</h2>
                <div className="mb-8">
                  <img src="/about-us/vision.png" alt="Vision" className="w-128 h-32 mx-auto mb-6 object-contain" />
                </div>
                <div className="text-left">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    A sustainable future where technology empowers both industries and ecosystems to thrive.
                  </p>
                </div>
              </div>

              {/* Mission */}
              <div className="text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-blue-500 mb-8">Mission</h2>
                <div className="mb-8">
                  <img src="/about-us/mission.png" alt="Mission" className="w-128 h-32 mx-auto mb-6 object-contain" />
                </div>
                <div className="text-left">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Deliver AIoT solutions that drive efficiency, sustainability, and growth across places.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600">Passionate experts dedicated to revolutionizing IoT monitoring</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto justify-center">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-40 h-40 rounded-full mx-auto mb-4 object-contain bg-gray-100"
                  />
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription className="text-blue-600 font-medium">{member.role}</CardDescription>
                </CardHeader>
                {/* <CardContent>
                  <p className="text-sm text-gray-600">{member.description}</p>
                </CardContent> */}
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
