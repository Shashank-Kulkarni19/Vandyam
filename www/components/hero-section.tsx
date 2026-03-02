"use client"

import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative flex flex-col lg:flex-row bg-white overflow-hidden min-h-[500px] lg:h-[85vh] max-h-[1000px]">
      {/* Left Side: Image */}
      <div className="relative w-full lg:w-1/3 h-[400px] sm:h-[500px] lg:h-full overflow-hidden">
        <Image
          src="/home/Bi-Fold Brochure (1).png"
          alt="Vandyam Brochure"
          fill
          priority
          className="w-full h-full object-cover pointer-events-none"
        />
      </div>

      {/* Right Side: Video */}
      <div className="relative w-full lg:w-2/3 h-[400px] sm:h-[500px] lg:h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/home/VandyamVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Hero content placeholder (Absolute overlay if needed) */}
      <div className="absolute inset-0 z-10 pointer-events-none hidden xl:block">
        <div className="container mx-auto h-full flex items-center px-4 md:px-6">
          {/* Content can be placed here to float over the split layout */}
        </div>
      </div>
    </section>
  )
}
