"use client";

import React from 'react';
import Image from 'next/image';
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    Trash2,
    Car,
    Bus,
    Zap,
    Wind,
    CheckCircle2,
    ArrowRight
} from "lucide-react";
import Link from 'next/link';

/**
 * Smart Campus Page - Use Cases
 * Professional and enterprise-grade webpage for universities and institutions.
 */
export default function SmartCampusPage() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-50 font-sans selection:bg-blue-100">
            <Header />

            <main className="flex-grow">
                {/* 1) HERO SECTION */}
                <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-slate-900 leading-tight">
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2000&auto=format&fit=crop"
                            alt="University Campus Background"
                            fill
                            className="object-cover opacity-60"
                            priority
                            unoptimized
                        />
                        <div className="absolute inset-0 bg-blue-950/70 z-10" />
                    </div>

                    <div className="relative z-20 max-w-5xl px-6 text-center text-white">
                        <h1 className="text-5xl md:text-8xl font-extrabold mb-6 tracking-tight">
                            Smart Campus
                        </h1>
                        <h2 className="text-2xl md:text-4xl font-semibold mb-8 text-blue-400">
                            Innovative IoT Solutions for Connected Educational Environments
                        </h2>
                        <p className="text-lg md:text-xl text-slate-200 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
                            Transform campuses into intelligent, efficient, and sustainable environments
                            through real-time monitoring, automation, and smart infrastructure systems.
                        </p>
                        <Button
                            asChild
                            size="lg"
                            className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-10 py-7 text-lg font-bold transition-all shadow-xl shadow-blue-600/20"
                        >
                            <Link href="#solutions">Explore Solutions</Link>
                        </Button>
                    </div>
                </section>

                {/* 2) INTRODUCTION SECTION */}
                <section className="py-24 px-6 md:px-12 bg-white">
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
                            Enabling Smarter Campus Operations
                        </h2>
                        <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
                        <div className="space-y-6 text-lg md:text-xl text-slate-600 leading-relaxed font-medium max-w-3xl mx-auto">
                            <p>
                                Smart Campus solutions leverage IoT technologies to enhance operational efficiency,
                                improve safety, and promote sustainability across educational institutions.
                            </p>
                            <p className="font-normal">
                                From infrastructure management to transportation and environmental monitoring,
                                connected systems enable data-driven decision making across campus facilities.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 3) USE CASES SECTION */}
                <section id="solutions" className="py-24 px-6 md:px-12 bg-slate-50">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                                Key Smart Campus Use Cases
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <SolutionCard
                                icon={Trash2}
                                title="Smart Bin Monitoring"
                                description="Optimize waste collection routes and schedules using real-time fill-level data. Reduce operational costs and improve campus cleanliness."
                            />
                            <SolutionCard
                                icon={Car}
                                title="Smart Parking Systems"
                                description="Provide real-time parking space availability to reduce congestion and enhance the campus user experience."
                            />
                            <SolutionCard
                                icon={Bus}
                                title="Vehicle Tracking (Campus Buses)"
                                description="Implement precise real-time tracking for campus transportation systems, improving efficiency, safety, and scheduling transparency."
                            />
                            <SolutionCard
                                icon={Zap}
                                title="Smart Lighting & Energy Management"
                                description="Deploy automated lighting systems that adapt to occupancy and natural light conditions, helping reduce energy consumption and operational costs."
                            />
                            <SolutionCard
                                icon={Wind}
                                title="Environmental Monitoring"
                                description="Establish sensor networks to monitor air quality, water levels, and temperature across campus facilities."
                            />
                        </div>
                    </div>
                </section>

                {/* 4) BENEFITS SECTION */}
                <section className="py-24 px-6 md:px-12 bg-slate-100 border-y border-slate-200">
                    <div className="max-w-5xl mx-auto text-center">
                        <h3 className="text-blue-600 font-bold uppercase tracking-widest text-xl mb-4">
                            Campus Impact
                        </h3>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-12">
                            Key Benefits of a Smart Campus
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-left">
                            {[
                                { title: "Operational Efficiency", desc: "Automate routine tasks and optimize resource allocation across facilities." },
                                { title: "Enhanced Safety", desc: "Real-time tracking and monitoring ensuring a secure environment for students." },
                                { title: "Sustainability", desc: "Significantly reduce energy waste and promote eco-friendly campus practices." },
                                { title: "Cost Reduction", desc: "Lower utility and maintenance costs through predictive data insights." },
                                { title: "Data-Driven Decisions", desc: "Access real-time analytics for better institutional planning and management." },
                                { title: "Improved Experience", desc: "Enhance the daily lives of students and staff with seamless smart services." }
                            ].map((benefit, idx) => (
                                <div key={idx} className="p-8 bg-white rounded-2xl shadow-sm border border-slate-200 hover:border-blue-500 hover:shadow-lg transition-all duration-300 group">
                                    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                        <CheckCircle2 className="w-6 h-6" />
                                    </div>
                                    <h4 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h4>
                                    <p className="text-slate-600 text-sm leading-relaxed">{benefit.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 5) CALL TO ACTION SECTION */}

            </main>
        </div>
    );
}

function SolutionCard({ icon: Icon, title, description }: { icon: any, title: string, description: string }) {
    return (
        <Card className="border-none rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group bg-white overflow-hidden">
            <CardContent className="p-10 flex flex-col h-full bg-white">
                <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                    <Icon className="w-8 h-8" />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {title}
                </h3>

                <div className="w-12 h-0.5 bg-slate-100 rounded-full mb-6 group-hover:w-full group-hover:bg-blue-600 transition-all duration-700"></div>

                <p className="text-slate-600 leading-relaxed text-lg flex-grow">
                    {description}
                </p>

                <div className="mt-8 flex items-center text-blue-600 font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Detailed View <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
            </CardContent>
        </Card>
    );
}
