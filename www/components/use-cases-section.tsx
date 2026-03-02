"use client"

import Link from "next/link"
import Image from "next/image"
import { Factory, Building2, GraduationCap, Droplets } from "lucide-react"

const useCases = [
    {
        title: "Industries",
        icon: Factory,
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200",
        href: "/use-cases/industries",
        themeColor: "from-blue-600/40 to-blue-900/40",
        iconColor: "text-blue-400"
    },
    {
        title: "Smart City",
        icon: Building2,
        image: "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&q=80&w=1200",
        href: "/smart-city",
        themeColor: "from-violet-600/40 to-violet-900/40",
        iconColor: "text-violet-400"
    },
    {
        title: "Smart Campus",
        icon: GraduationCap,
        image: "https://images.unsplash.com/20/cambridge.JPG?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dW5pdmVyc2l0eXxlbnwwfHwwfHx8MA%3D%3D",
        href: "/use-cases/smart-campus",
        themeColor: "from-emerald-600/40 to-emerald-900/40",
        iconColor: "text-emerald-400"
    },
    {
        title: "Utilities",
        icon: Droplets,
        image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1200",
        href: "/use-cases/utilities",
        themeColor: "from-orange-600/40 to-orange-900/40",
        iconColor: "text-orange-400"
    }
]

export function UseCasesSection() {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4 mb-16 text-center">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
                    IoT Solution for all Industries
                </h2>
                <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                    OmniWOT offers cutting-edge solutions tailored to a variety of industries. Empower your operations with smart, reliable solutions for today's connected world.
                </p>
            </div>

            <div className="flex flex-col md:flex-row min-h-[700px] lg:h-[75vh] w-full max-w-[1600px] mx-auto px-4 gap-3">
                {useCases.map((useCase, index) => (
                    <Link
                        key={index}
                        href={useCase.href}
                        className="relative flex-1 group overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] md:hover:flex-[2.5] rounded-2xl first:rounded-l-3xl last:rounded-r-3xl"
                    >
                        {/* Background Image */}
                        <Image
                            src={useCase.image}
                            alt={useCase.title}
                            fill
                            className="object-cover transition-transform duration-1000 group-hover:scale-105"
                        />

                        {/* Soft Colored Overlay (Different for each) */}
                        <div className={`absolute inset-0 bg-gradient-to-b ${useCase.themeColor} mix-blend-multiply opacity-60 group-hover:opacity-30 transition-opacity duration-500`} />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />

                        {/* Hexagon Icon Container */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="relative w-28 h-28 md:w-32 md:h-32 flex items-center justify-center">

                                {/* Hexagon Shape Border (Cyan glow style) */}
                                <div className="absolute inset-0 bg-white/20 backdrop-blur-md"
                                    style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }} />

                                <div className="absolute inset-0.5 bg-gray-900/80 group-hover:bg-gray-900/60 transition-colors duration-500 shadow-2xl"
                                    style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }} />

                                {/* Icon */}
                                <useCase.icon className={`w-12 h-12 md:w-14 md:h-14 ${useCase.iconColor} relative z-10 transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]`} />
                            </div>
                        </div>

                        {/* Label (Always visible, slide up on hover) */}
                        <div className="absolute bottom-10 left-0 right-0 text-center transition-all duration-500 px-4">
                            <h3 className="text-white font-extrabold text-lg md:text-xl tracking-wider uppercase drop-shadow-lg transform transition-transform duration-500 group-hover:-translate-y-4">
                                {useCase.title}
                            </h3>
                            <div className="h-0.5 w-12 bg-white/50 mx-auto mt-2 opacity-0 group-hover:opacity-100 group-hover:w-20 transition-all duration-700" />
                        </div>

                        {/* Subtle glow border on hover */}
                        <div className={`absolute inset-0 border-2 border-white/0 group-hover:border-white/20 transition-all duration-700 rounded-2xl pointer-events-none`} />
                    </Link>
                ))}
            </div>

            <div className="mt-16 text-center">
                <Link href="/use-cases">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-3.5 rounded-full font-bold text-lg shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95">
                        View All Solutions
                    </button>
                </Link>
            </div>
        </section>
    )
}
