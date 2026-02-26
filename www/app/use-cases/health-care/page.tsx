"use client"

import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/header";
import { CheckCircle2, Activity } from "lucide-react";

export default function HealthCarePage() {
    return (
        <div className="flex flex-col min-h-screen bg-[#F8F9FA] font-sans">
            <Header />

            {/* HERO SECTION */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1600"
                        alt="Smart Health Care background"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent" />
                </div>

                <div className="relative z-10 max-w-5xl px-6 text-center text-white">
                    <h1 className="text-5xl md:text-[5rem] font-bold mb-8 tracking-tight leading-none">
                        Smart Health Care
                    </h1>
                    <p className="text-xl md:text-3xl font-medium mb-6 text-blue-400 max-w-3xl mx-auto">
                        Connected medical solutions for better patient outcomes.
                    </p>
                </div>
            </section>

            {/* CONTENT SECTION */}
            <section className="py-24 px-6 md:px-12 bg-white text-gray-900">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-bold tracking-wider uppercase">
                                Healthcare Efficiency
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-[#001F3F] leading-tight">
                                IoT in Medical Facilities
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                We provide IoT solutions for hospital asset tracking, environmental monitoring (cold chain), and patient safety systems.
                            </p>
                            <div className="grid gap-4">
                                <div className="flex items-center gap-4 text-xl font-semibold text-gray-800">
                                    <CheckCircle2 className="w-6 h-6 text-blue-600" />
                                    Vaccine Cold Chain Monitoring
                                </div>
                                <div className="flex items-center gap-4 text-xl font-semibold text-gray-800">
                                    <CheckCircle2 className="w-6 h-6 text-blue-600" />
                                    Asset & Equipment Tracking
                                </div>
                            </div>
                        </div>
                        <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800"
                                alt="Healthcare IoT"
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
