"use client";

import React from 'react';
import Image from 'next/image';
import { Header } from "@/components/header";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

/**
 * Utilities Page - Use Cases
 * Professional, enterprise-grade layout focused on Smart Metering.
 */
export default function UtilitiesPage() {
    return (
        <div className="flex flex-col min-h-screen bg-[#F8FAFC] font-sans selection:bg-teal-100 italic-none">
            <Header />

            <main className="flex-grow">
                {/* 1) HERO SECTION */}
                <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=2000"
                            alt="Industrial Power Grid"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-slate-900/70 z-10" />
                    </div>

                    <div className="relative z-20 max-w-4xl px-6 text-center text-white">
                        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
                            Utilities
                        </h1>
                        <h2 className="text-2xl md:text-4xl font-semibold mb-8 text-teal-400">
                            Smart Metering
                        </h2>
                        <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                            Smart metering represents one of the largest IoT opportunities in India,
                            driven by large-scale electricity, gas, and water deployments.
                        </p>
                        <Button
                            asChild
                            size="lg"
                            className="bg-teal-600 hover:bg-teal-700 text-white rounded-full px-10 py-6 text-lg font-semibold transition-all shadow-lg hover:shadow-teal-900/20"
                        >
                            <a href="#landscape">Explore Use Case</a>
                        </Button>
                    </div>
                </section>

                {/* 2) MARKET CONTEXT SECTION */}
                <section id="landscape" className="py-24 px-6 md:px-12 bg-white border-b border-slate-100">
                    <div className="max-w-5xl mx-auto">
                        <div className="space-y-8">
                            <h3 className="text-teal-600 font-bold uppercase tracking-widest text-xl">
                                Market Landscape
                            </h3>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                                Analyzing Connectivity Choices <br className="hidden md:block" />
                                in the Utility Sector
                            </h2>
                            <div className="grid md:grid-cols-1 gap-8 max-w-3xl">
                                <p className="text-lg text-slate-600 leading-relaxed">
                                    Utilities use cases, especially smart metering, are very large overall.
                                    However, LoRaWAN adoption in India has been slower as many deployments
                                    use cellular NB-IoT or other connectivity technologies for meters.
                                </p>
                                <p className="text-lg text-slate-600 leading-relaxed">
                                    Some pilot deployments exist for gas and water metering,
                                    but LoRaWAN is not currently the dominant connectivity choice at scale.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3) MARKET SIZE SECTION */}
                <section className="py-24 px-6 md:px-12 bg-[#F8FAFC]">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-16">
                            <h3 className="text-teal-600 font-bold uppercase tracking-widest text-xl mb-4">
                                Market Size Opportunity
                            </h3>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 max-w-3xl mx-auto">
                                The broader smart metering IoT opportunity in India is significant.
                            </h2>
                            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                                Reports suggest hundreds of millions of meters by 2025.
                                However, most large-scale rollouts are currently driven by
                                other connectivity technologies.
                            </p>
                        </div>

                        {/* Stat Block */}

                    </div>
                </section>

                {/* 4) STRATEGIC POSITIONING SECTION */}
                <section className="py-24 px-6 md:px-12 bg-slate-100">
                    <div className="max-w-5xl mx-auto">
                        <div className="grid md:grid-cols-5 gap-12 items-start">
                            <div className="md:col-span-2">
                                <h3 className="text-teal-600 font-bold uppercase tracking-widest text-xl mb-4">
                                    LoRaWAN Positioning
                                </h3>
                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                                    Complementary <br />
                                    Role in Utilities
                                </h2>
                            </div>
                            <div className="md:col-span-3 space-y-6">
                                <p className="text-lg text-slate-700 leading-relaxed font-medium">
                                    LoRaWAN may capture a portion of the market where cellular coverage
                                    is limited or where cost constraints prohibit NB-IoT deployment.
                                </p>
                                <p className="text-lg text-slate-600 leading-relaxed opacity-80">
                                    While the overall market is substantial, this segment is not currently
                                    LoRaWAN’s strongest comparative advantage.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>


        </div>
    );
}
