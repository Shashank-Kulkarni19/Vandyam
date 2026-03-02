"use client"

import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-start px-4 md:px-6 overflow-hidden -mt-24 pt-24">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <Image  className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 pointer-events-none scale-[1.02] md:scale-100 object-cover" src="/home/banner.png" alt="Background" width={1000} height={1000} />

      {/* Hero content */}
      <div className="relative z-20 max-w-2xl">
        <p className="text-blue-500 font-medium text-base sm:text-lg mb-4 drop-shadow-lg animate-fade-in">
          Driving digital transformation, seamlessly
        </p>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold  mb-6 leading-tight drop-shadow-lg animate-fade-in">
        Best gateway technology
        </h1>

        <p className="text-blue-500 text-base sm:text-lg md:text-xl mb-8 leading-relaxed max-w-xl drop-shadow-lg animate-fade-in">
        Power real‑world IoT with secure LoRaWAN connectivity, rugged gateways, and effortless sensor aggregation from edge to cloud.
        </p>

      </div>
    </section>
  )
}
