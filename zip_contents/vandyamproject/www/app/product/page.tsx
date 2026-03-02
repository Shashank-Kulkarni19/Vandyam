import { Header } from "@/components/header";
import Image from "next/image";
import { PRODUCTS_MAP } from "@/lib/products";
import ProductCard from "./product_card";

export default function ProductPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-green-600 text-white py-10 relative overflow-hidden">
        {/* Background Image for Hero Section */}
        <div className="absolute inset-0 z-0">
          <Image src="/products/forest.png" alt="Background" fill className="object-cover opacity-30" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">Our Products </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Vandyam Solutions delivers advanced AIoT and embedded systems, combining AI, IoT, and software expertise to power smart cities, forests,
              industries, and more with intelligent, customizable solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="space-y-12 max-w-6xl mx-auto">
            <ProductCard product={PRODUCTS_MAP["gateway-network"]} />
          </div>
        </div>
      </section>
    </div>
  );
}
