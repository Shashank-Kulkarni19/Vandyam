"use client"

import Image from "next/image"
import Link from "next/link"

export function PartnersSection() {
  // Add your actual partner images here with their respective URLs
  const partners = [
    {
      id: 1,
      name: "Adis",
      image: "/home/partner/Adis.jpg",
      url: "https://www.adis.co.in/" // Replace with actual partner website URL
    },
    {
      id: 2,
      name: "Tascon",
      image: "/home/partner/Tascon.jpg",
      url: "https://tasconsolutions.com/" // Replace with actual partner website URL
    },
    {
      id: 3,
      name: "Omnyk",
      image: "/home/partner/Omnyk.jpg",
      url: "https://www.omnyk.com/" // Replace with actual partner website URL
    },
    {
      id: 4,
      name: "Exaleap",
      image: "/home/partner/Exaleap.jpg",
      url: "https://www.exaleap.ai/" // Replace with actual partner website URL
    },
    {
      id: 5,
      name: "Judge",
      image: "/home/partner/Judge.jpg",
      url: "https://www.judge.com/" // Replace with actual partner website URL
    },
    {
      id: 6,
      name: "Hachidori",
      image: "/home/partner/Hachidori.jpg",
      url: "https://hachidorirobotics.com/" // Replace with actual partner website URL
    },
    {
      id: 7,
      name: "HyperLight",
      image: "/home/partner/HyperLight.jpg",
      url: "https://www.hyperlight.systems/" // Replace with actual partner website URL
    },{
      id: 8,
      name: "Akxa",
      image: "/home/partner/akxa.png",
      url: "https://akxatech.com/" // Replace with actual partner website URL
    },{
      id: 9,
      name: "Indic",
      image: "/home/partner/indic.png",
      url: "https://www.indicelectronics.com/" // Replace with actual partner website URL
    },
    {
      id: 10,
      name: "Soni Incorporation",
      image: "/home/partner/soni.png",
      url: "https://www.soniincorporation.com/" // Replace with actual partner website URL
    },
    {
      id: 11,
      name: "Think Seven Technology",
      image: "/home/partner/think-logo.png",
      url: "https://think7tech.com/" // Replace with actual partner website URL
    },
  ]

  // Create duplicated partners for infinite loop effect
  const duplicatedPartners = [...partners, ...partners, ...partners]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Our Trusted Partners</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We collaborate with industry leaders and innovative organizations to deliver cutting-edge 
            monitoring and surveillance solutions worldwide.
          </p>
        </div>

        {/* Partners Container with Navigation */}
        <div className="relative max-w-6xl mx-auto overflow-hidden">
          {/* Partners Grid */}
          <div 
            className="flex space-x-8 animate-scroll"
            style={{
              animation: 'scroll 20s linear infinite'
            }}
          >
            {duplicatedPartners.map((partner, index) => (
              <div
                key={`${partner.id}-${index}`}
                className="group transition-all duration-500 ease-in-out transform hover:scale-105 flex-shrink-0"
              >
                <a 
                  href={partner.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block cursor-pointer"
                  aria-label={`Visit ${partner.name}'s website`}
                >
                  <div className="bg-gray-100 hover:bg-gray-200 rounded-lg p-6 transition-all duration-500 ease-in-out h-32 w-48 flex items-center justify-center transform hover:scale-105 hover:shadow-xl">
                    <Image
                      src={partner.image}
                      alt={partner.name}
                      width={120}
                      height={60}
                      className="max-w-full max-h-full object-contain transition-all duration-500 ease-in-out hover:brightness-110"
                      style={{ width: 'auto', height: 'auto' }}
                    />
                  </div>
                  <p className="text-center mt-3 text-lg text-gray-600 group-hover:text-gray-800 transition-all duration-300 ease-in-out">
                    {partner.name}
                  </p>
                </a>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-${280 * partners.length}px);
            }
          }
        `}</style>

        {/* Partnership CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Interested in Partnership?</h3>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Join our network of trusted partners and help us deliver innovative solutions to customers worldwide.
          </p>
          <Link href="/contact">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium text-lg transition-all duration-300 hover:scale-105 shadow-lg">
              Become a Partner
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
