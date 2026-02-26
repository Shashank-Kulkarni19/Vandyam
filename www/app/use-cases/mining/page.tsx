"use client"

import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/header";
import { CheckCircle2, Pickaxe } from "lucide-react";

export default function MiningPage() {
    return (
        <div className="flex flex-col min-h-screen bg-[#F8F9FA] font-sans">
            <Header />

            {/* HERO SECTION */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&q=80&w=1600"
                        alt="Smart Mining background"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent" />
                </div>

                <div className="relative z-10 max-w-5xl px-6 text-center text-white">
                    <h1 className="text-5xl md:text-[5rem] font-bold mb-8 tracking-tight leading-none">
                        Smart Mining
                    </h1>
                    <p className="text-xl md:text-3xl font-medium mb-6 text-yellow-500 max-w-3xl mx-auto">
                        Safety and efficiency in extreme environments.
                    </p>
                </div>
            </section>

            {/* CONTENT SECTION */}
            <section className="py-24 px-6 md:px-12 bg-white text-gray-900">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div className="inline-block px-4 py-1.5 bg-yellow-50 text-yellow-700 rounded-full text-sm font-bold tracking-wider uppercase">
                                Mining Safety
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-[#001F3F] leading-tight">
                                IoT in Deep Mining
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Our loRaWAN-based mining solutions enable personnel tracking, gas sensing, and infrastructure monitoring even in the deepest and most remote mines.
                            </p>
                            <div className="grid gap-4">
                                <div className="flex items-center gap-4 text-xl font-semibold text-gray-800">
                                    <CheckCircle2 className="w-6 h-6 text-yellow-600" />
                                    Environmental Gas Monitoring
                                </div>
                                <div className="flex items-center gap-4 text-xl font-semibold text-gray-800">
                                    <CheckCircle2 className="w-6 h-6 text-yellow-600" />
                                    Worker Safety Tracking
                                </div>
                            </div>
                        </div>
                        <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&q=80&w=800"
                                alt="Mining IoT"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
