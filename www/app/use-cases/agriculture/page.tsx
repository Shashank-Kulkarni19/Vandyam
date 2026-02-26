"use client"

import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/header";
import { CheckCircle2, Leaf } from "lucide-react";

export default function AgriculturePage() {
    return (
        <div className="flex flex-col min-h-screen bg-[#F8F9FA] font-sans">
            <Header />

            {/* HERO SECTION */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=1600"
                        alt="Smart Agriculture background"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent" />
                </div>

                <div className="relative z-10 max-w-5xl px-6 text-center text-white">
                    <h1 className="text-5xl md:text-[5rem] font-bold mb-8 tracking-tight leading-none">
                        Smart Agriculture
                    </h1>
                    <p className="text-xl md:text-3xl font-medium mb-6 text-green-400 max-w-3xl mx-auto">
                        Precision farming and sustainable IoT solutions.
                    </p>
                </div>
            </section>

            {/* CONTENT SECTION */}
            <section className="py-24 px-6 md:px-12 bg-white text-gray-900">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div className="inline-block px-4 py-1.5 bg-green-50 text-green-700 rounded-full text-sm font-bold tracking-wider uppercase">
                                Agricultural Innovation
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-[#001F3F] leading-tight">
                                IoT in Modern Farming
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Our smart agriculture solutions help farmers monitor soil moisture, crop health, and environmental conditions in real-time, leading to better yields and resource management.
                            </p>
                            <div className="grid gap-4">
                                <div className="flex items-center gap-4 text-xl font-semibold text-gray-800">
                                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                                    Soil Moisture Monitoring
                                </div>
                                <div className="flex items-center gap-4 text-xl font-semibold text-gray-800">
                                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                                    Automated Irrigation
                                </div>
                            </div>
                        </div>
                        <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=800"
                                alt="Farming IoT"
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
