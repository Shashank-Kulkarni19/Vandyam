"use client";

import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/header";

import Link from 'next/link';
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function IndustriesPage() {
    return (
        <div className="flex flex-col min-h-screen bg-[#F8F9FA] font-sans">
            <Header />

            {/* 1) HERO SECTION */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                {/* Background Image with Dark Overlay */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/use-case/Industries/industrial-hero.png"
                        alt="Industrial IoT background"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative z-10 max-w-5xl px-6 text-center text-white">
                    <h1 className="text-5xl md:text-[5rem] font-bold mb-8 tracking-tight leading-none">
                        Smart Industries
                    </h1>
                    <p className="text-xl md:text-3xl font-medium mb-6 text-blue-400 max-w-3xl mx-auto">
                        Strong demand for Industrial IoT in factories and manufacturing.
                    </p>
                    <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
                        Industries are increasingly adopting IIoT solutions for predictive maintenance
                        and equipment monitoring to improve operational efficiency.
                    </p>
                </div>
            </section>

            {/* 2) INDUSTRIAL DEMAND OVERVIEW SECTION */}
            <section className="py-24 px-6 md:px-12 bg-white text-gray-900">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-bold tracking-wider uppercase">
                                Manufacturing Excellence
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-[#001F3F] leading-tight">
                                Industrial IoT in Manufacturing
                            </h2>

                            <div className="space-y-8">
                                <div className="grid gap-4">
                                    <div className="flex items-center gap-4 text-xl font-semibold text-gray-800">
                                        <CheckCircle2 className="w-6 h-6 text-[#0074D9]" />
                                        Predictive Maintenance
                                    </div>
                                    <div className="flex items-center gap-4 text-xl font-semibold text-gray-800">
                                        <CheckCircle2 className="w-6 h-6 text-[#0074D9]" />
                                        Equipment Monitoring
                                    </div>
                                </div>

                                <p className="text-xl text-gray-600 leading-relaxed border-l-4 border-[#0074D9] pl-6 py-2">
                                    "LoRaWAN serves well for low-throughput sensors and asset tracking
                                    in industrial environments."
                                </p>
                            </div>
                        </div>

                        <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                src="/use-case/Industries/IndustryIOT.webp"
                                alt="Industrial IoT in Manufacturing"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* 3) INDUSTRIAL IOT USE CASES SECTION */}
            <section className="py-24 px-6 md:px-12 bg-[#F8F9FA]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#001F3F] mb-4">
                            Strategic IIOT Use Cases
                        </h2>
                        <div className="w-24 h-1.5 bg-[#0074D9] mx-auto rounded-full mb-6"></div>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Leveraging LoRaWAN technology to drive efficiency and innovation across industrial landscapes.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <UseCaseCard
                            title="Predictive Maintenance"
                            content="Industrial IoT sensors continuously monitor machine parameters such as vibration and temperature. Real-time data analysis helps detect early signs of failure. This reduces downtime, lowers maintenance costs, and extends equipment lifespan."
                        />
                        <UseCaseCard
                            title="Equipment Monitoring"
                            content="Industrial IoT enables real-time visibility into machine performance and operational metrics. Data such as runtime, load, and energy consumption is continuously tracked. This improves efficiency and supports data-driven production decisions."
                        />
                        <UseCaseCard
                            title="Asset Tracking"
                            content="Connected IoT devices provide real-time tracking of tools, equipment, and inventory. Factories gain better visibility into asset movement and utilization. This reduces asset loss and improves inventory management accuracy."
                        />
                    </div>
                </div>
            </section>

        </div>
    );
}

function UseCaseCard({ title, content }: { title: string, content: string }) {
    return (
        <Card className="bg-white border-none rounded-3xl shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-500 overflow-hidden group">
            <CardContent className="p-10 flex flex-col h-full">
                <h3 className="text-2xl font-bold text-[#001F3F] mb-6 group-hover:text-[#0074D9] transition-colors duration-300">
                    {title}
                </h3>
                <div className="w-12 h-1 bg-[#0074D9]/20 rounded-full mb-8 group-hover:w-full group-hover:bg-[#0074D9] transition-all duration-700 ease-in-out"></div>
                <p className="text-gray-600 leading-relaxed text-lg flex-grow">
                    {content}
                </p>
            </CardContent>
        </Card>
    );
}

function StatCard({ title, value, description }: { title: string, value: string, description: string }) {
    return (
        <Card className="border-none shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] transition-all duration-500 rounded-[2.5rem] overflow-hidden group bg-white">
            <CardContent className="p-12 flex flex-col items-center justify-center text-center space-y-6">
                <h3 className="text-gray-400 text-xs font-black uppercase tracking-[0.2em] group-hover:text-[#0074D9] transition-colors duration-300">
                    {title}
                </h3>
                <p className="text-5xl md:text-6xl font-black text-[#001F3F] transition-all duration-500 group-hover:scale-110">
                    {value}
                </p>
                <p className="text-sm text-gray-500 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 max-w-[200px]">
                    {description}
                </p>
                <div className="w-12 h-1.5 bg-[#0074D9]/10 group-hover:w-full group-hover:bg-[#0074D9] transition-all duration-700 ease-in-out rounded-full"></div>
            </CardContent>
        </Card>
    );
}

