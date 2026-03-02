"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Camera, Cpu, Shield, Wifi, ChevronLeft, ChevronRight, Smartphone, Server } from "lucide-react"

export function ProductsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const products = [
    {
      id: 1,
      title: "Gateway Network",
      images: [
        "/home/gateway/forest1.png",     // Main center circle image
        "/home/gateway/forest2.jpg",  // Top-left satellite image
        "/home/gateway/forest3.jpg"   // Bottom-right satellite image
      ], 
      fullDescription: "LoRa mesh networking extends coverage across large areas like forests or farms, with gateways placed up to 4 km apart and devices communicating up to 10+ km with line of sight. It supports up to 10,000 nodes and uses an IP67-rated enclosure for outdoor reliability.",
      features: [" Long-Range Communication", "Multiple nodes connection", "Ethernet and wifi connection", "Industrial grade build"]
    },
    {
      id: 2,
      title: "Human Detector",
      images: [
        "/home/human/human1.png",     // Main center circle image
        "/home/human/human2.png",  // Top-left satellite image
        "/home/human/human3.png"   // Bottom-right satellite image
      ],
      fullDescription: "Our Human Detection Device is designed to provide real-time protection for sensitive, restricted, or hazardous areas by instantly identifying unauthorized human presence. The device uses advanced sensing technologies to detect human movement and immediately triggers alarms or automated system responses, ensuring quick action and minimizing security risks.",
      features: ["Accurate Detection & Tracking", "Reliable in All Conditions", "Advanced Sensing Capabilities", "Seamless Integration"]
    },
    {
      id: 3,
      title: "Radio Collar",
      images: [
        "/home/radio/animal1.png",     // Main center circle image
        "/home/radio/animal2.jpg",  // Top-left satellite image
        "/home/radio/animal3.jpg"   // Bottom-right satellite image
      ],
      fullDescription: "Our advanced Wildlife Collars are designed to provide real-time tracking and data collection to support conservation, research, and anti-poaching efforts. These collars enable wildlife authorities, researchers, and conservationists to monitor animal movement patterns, habitat preferences, health indicators, and potential threats with high precision.",
      features: ["Habitat Usage Analysis", "Anti-Poaching Surveillance", "Health & Survival Monitoring", "Movement & Migration Tracking"]
    }
  ]

  const nextProducts = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length)
  }

  const prevProducts = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length)
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Explore our <span className="text-blue-500">Products</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Unlock your organization's potential with Vandyam's integrated IoT tools and resources, 
            tailored to every stage of your digital transformation journey.
          </p>
        </div>

        {/* Single Product Display */}
        <div className="max-w-6xl mx-auto">
          <Card className="overflow-hidden bg-white border-0 shadow-xl">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Product Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center order-2 lg:order-1">
                <div className="mb-6">
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-3">
                    {products[currentIndex].title}
                  </h3>
              
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    {products[currentIndex].fullDescription}
                  </p>
                  
                  {/* Features List */}
                  <div className="grid grid-cols-1 gap-3 mb-8">
                    {products[currentIndex].features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Link href="/product">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 hover:scale-105 inline-flex items-center w-fit">
                    Learn More
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </button>
                </Link>
              </div>

              {/* Product Visual with Circular Design */}
              <div className="relative overflow-hidden bg-white order-1 lg:order-2">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Decorative circles */}
                  <div className="absolute top-1/4 right-1/4 w-12 h-12 bg-blue-100 rounded-full opacity-50 animate-pulse"></div>
                  <div className="absolute top-1/3 left-1/4 w-8 h-8 bg-blue-200 rounded-full opacity-40 animate-pulse delay-100"></div>
                  <div className="absolute bottom-1/3 right-1/3 w-16 h-16 bg-blue-50 rounded-full opacity-60 animate-pulse delay-200"></div>
                  <div className="absolute bottom-1/4 left-1/3 w-6 h-6 bg-blue-300 rounded-full opacity-30 animate-pulse delay-300"></div>
                  <div className="absolute top-1/2 right-1/5 w-10 h-10 bg-gray-100 rounded-full opacity-40 animate-pulse delay-500"></div>
                  <div className="absolute top-3/4 left-1/5 w-14 h-14 bg-blue-100 rounded-full opacity-35 animate-pulse delay-700"></div>
                </div>
                
                <div className="relative z-10 p-8 lg:p-12 flex items-center justify-center h-full min-h-[500px]">
                  {/* Main Circular Product Image with 2 Satellite Circles */}
                  <div className="relative">
                    {/* Main Large Circle - Center */}
                    <div className="w-80 h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl bg-white relative z-20">
                      <Image
                        src={products[currentIndex].images[0]}
                        alt={products[currentIndex].title}
                        width={320}
                        height={320}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Top Left Satellite Circle */}
                    <div className="absolute -top-16 -left-16 w-32 h-32 rounded-full overflow-hidden border-4 border-blue-200 bg-white shadow-lg z-10">
                      <Image
                        src={products[currentIndex].images[1]}
                        alt={products[currentIndex].title}
                        width={128}
                        height={128}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Bottom Right Satellite Circle */}
                    <div className="absolute -bottom-20 -right-20 w-36 h-36 rounded-full overflow-hidden border-4 border-blue-300 bg-white shadow-lg z-10">
                      <Image
                        src={products[currentIndex].images[2]}
                        alt={products[currentIndex].title}
                        width={144}
                        height={144}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center mt-12 space-x-8">
            <button
              onClick={prevProducts}
              className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-4 transition-all duration-300 hover:scale-110 shadow-lg"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Product Indicators with Circular Thumbnails */}
            <div className="flex space-x-6">
              {products.map((product, index) => (
                <button
                  key={product.id}
                  onClick={() => setCurrentIndex(index)}
                  className={`text-center transition-all duration-300 ${
                    index === currentIndex ? 'scale-110' : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  <div className={`w-20 h-20 rounded-full overflow-hidden border-4 transition-all duration-300 ${
                    index === currentIndex 
                      ? 'border-blue-500 shadow-xl scale-110' 
                      : 'border-gray-300 hover:border-blue-300'
                  }`}>
                    <Image
                      src={product.images[0]}
                      alt={product.title}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className={`text-xs font-medium mt-2 transition-colors duration-300 ${
                    index === currentIndex ? 'text-blue-600' : 'text-gray-500'
                  }`}>
                    {product.title.split(' ')[0]}
                  </p>
                </button>
              ))}
            </div>

            <button
              onClick={nextProducts}
              className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-4 transition-all duration-300 hover:scale-110 shadow-lg"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* View All Products Button */}
        <div className="text-center mt-12">
          <Link href="/product">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium text-lg transition-all duration-300 hover:scale-105 shadow-lg">
              View All Products
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
