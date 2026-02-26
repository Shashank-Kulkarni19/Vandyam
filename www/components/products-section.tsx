"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

const products = [
  {
    id: 1,
    title: "4-20mA Node",
    description: "Intelligent Industrial Monitoring Platform. Multi-sensor IoT device for motion, temperature, and water quality monitoring.",
    image: "/New folder/4-20 Ma.png",
    href: "/product/viot-node"
  },
  {
    id: 2,
    title: "Gateway Outdoor",
    description: "Robust IP67-rated LoRaWAN gateway designed for long-range connectivity in harsh environments.",
    image: "/New folder/Gateway Outdoor.png",
    href: "/product/gateway-outdoor"
  },
  {
    id: 3,
    title: "In-Built Sensor Node",
    description: "Integrated sensor solution with internal transducers for monitoring environmental parameters efficiently.",
    image: "/New folder/InBuiltSensorNode.png",
    href: "/product/asset-tracker"
  },
  {
    id: 4,
    title: "RS-485 Node",
    description: "High-reliability serial communication node for interfacing with Modbus and other industrial protocols.",
    image: "/New folder/RS-485.png",
    href: "/product/rs-485"
  }
]

export function ProductsSection() {
  return (
    <section className="py-24 bg-gray-50/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">
            Explore our <span className="text-blue-600">Products</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Cutting-edge IoT hardware designed for industrial precision, reliability, and seamless integration.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col h-full"
            >
              {/* Image Container - Square Aspect Ratio */}
              <div className="relative aspect-square overflow-hidden bg-gray-50">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/5 transition-colors duration-500" />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-2 transition-colors duration-300 group-hover:text-blue-600">
                  {product.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                  {product.description}
                </p>

                <Link
                  href={product.href}
                  className="inline-flex items-center text-blue-600 font-semibold text-base group/link hover:underline"
                >
                  Explore Features
                  <ChevronRight className="ml-1 w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Call to Action */}
        <div className="mt-16 text-center">
          <Link href="/product">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-blue-200 transition-all duration-300 transform hover:-translate-y-1">
              View Entire Catalog
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
