"use client"

import { Header } from "@/components/header"
import Image from "next/image"
import { Shield, Zap, Battery, Signal, CheckCircle2, Cpu, Settings, Smartphone, Radio, HardDrive, Download, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function GatewayOutdoorPage() {
    const specs = [
        {
            title: "Mechanical Parameters",
            icon: Settings,
            items: [
                { label: "DC Power Consumption (WiFi)", value: "1.5W" },
                { label: "DC Power Consumption (Ethernet)", value: "2W" },
                { label: "DC Power Consumption (Cellular)", value: "2.7W" },
                { label: "Operational Temperature", value: "-40°C to +70°C" },
                { label: "Ingress Protection", value: "IP65" },
                { label: "Dimensions", value: "210 x 190 x 100 mm" }
            ]
        },
        {
            title: "LoRa Radio Parameters",
            icon: Radio,
            items: [
                { label: "Channel Plans", value: "EU868, IN865" },
                { label: "Tx Power", value: "14 dBm to 27 dBm" },
                { label: "Rx Sensitivity (SF7)", value: "-125 dBm" },
                { label: "Rx Sensitivity (SF12)", value: "-139 dBm" },
                { label: "Rx Noise Figure", value: "10 dB" },
                { label: "Rx Linearity", value: "-5 dBm" }
            ]
        },
        {
            title: "Software & Management",
            icon: Cpu,
            items: [
                { label: "Access Control", value: "List Management" },
                { label: "Radio Config", value: "Full Control" },
                { label: "Cellular Config", value: "Parameter Management" },
                { label: "Factory Provisioning", value: "Image Provisioning" },
                { label: "Network", value: "DHCPv4 Client" }
            ]
        },
        {
            title: "Interfaces",
            icon: HardDrive,
            items: [
                { label: "Ethernet Backhaul", value: "RJ45" },
                { label: "Cellular Backhaul", value: "SIM" },
                { label: "LoRa Antenna", value: "SMA" },
                { label: "Power Hardware", value: "12V / 1A Adapter" }
            ]
        }
    ]

    return (
        <div className="min-h-screen bg-white font-sans selection:bg-blue-100 italic-none">
            <Header />
            {/* 1) HERO SECTION */}
            <section className="relative pt-24 pb-32 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-3/5 space-y-8 animate-in fade-in slide-in-from-left duration-1000">
                            <div className="space-y-2">
                                <h2 className="text-blue-600 font-bold uppercase tracking-[0.2em] text-lg">Product Reveal</h2>
                                <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
                                    VIoT <span className="text-blue-600">LoRaWAN</span> Gateway
                                </h1>
                                <p className="text-3xl font-medium text-slate-500">Outdoor Gateway</p>
                            </div>

                            <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
                                Reliable LoRaWAN connectivity solution designed for seamless integration,
                                extended coverage, and stable performance with easy deployment and management.
                            </p>

                            <div className="flex flex-wrap gap-3">
                                {[
                                    { label: "IP65 Rated", icon: Shield },
                                    { label: "27 dBm Tx Power", icon: Zap },
                                    { label: "Battery Backup", icon: Battery },
                                    { label: "Cellular + Ethernet", icon: Signal }
                                ].map((badge, i) => (
                                    <div key={i} className="flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-blue-100 px-4 py-2 rounded-full shadow-sm text-slate-700 font-semibold text-sm">
                                        <badge.icon className="w-4 h-4 text-blue-600" />
                                        {badge.label}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="lg:w-2/5 flex justify-center animate-in fade-in slide-in-from-right duration-1000">
                            <div className="relative group">
                                <div className="absolute inset-0 bg-blue-200 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity" />
                                <Image
                                    src="/New folder/Gateway Outdoor.png"
                                    alt="VIoT Outdoor Gateway"
                                    width={500}
                                    height={500}
                                    className="relative z-10 object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.1)] group-hover:scale-105 transition-transform duration-500"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2) KEY PRODUCT DIFFERENTIATORS */}
            <section className="py-24 bg-white border-y border-slate-50">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
                            Key Product <span className="text-blue-600">Differentiators</span>
                        </h2>

                        <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                            {[
                                "Extend network coverage by linking multiple relay gateways to one border gateway",
                                "Enable enterprise IoT applications with Always-On connectivity",
                                "Integrated battery backup and cellular modem",
                                "Plug & Play factory-provisioned installation",
                                "Improve coverage and IoT adoption",
                                "Multi-function LED operational status",
                                "Fully integrated with LoRa network servers and sensors"
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-blue-50/50 transition-colors group">
                                    <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                                        <CheckCircle2 size={16} />
                                    </div>
                                    <p className="text-slate-700 font-medium leading-relaxed">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 3) KEY FEATURES SECTION */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2 order-2 lg:order-1">
                            <h2 className="text-3xl font-bold text-slate-900 mb-8 border-l-4 border-blue-600 pl-6">Core Capability</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    "IN865 / EU868 / RU864", "Time Duplex 8 Rx / 1 Tx",
                                    "Single SIM Support", "External LoRa Antenna",
                                    "Battery Backup", "27 dBm Tx Power",
                                    "Operational Status LED", "Web-Based Management",
                                    "Flexible Connectivity"
                                ].map((feature, i) => (
                                    <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                        <div className="w-2 h-2 rounded-full bg-blue-500" />
                                        <span className="text-slate-700 font-semibold text-sm">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:w-1/2 order-1 lg:order-2">
                            <div className="p-8 bg-white rounded-[2rem] shadow-xl shadow-slate-200/50">
                                <Image
                                    src="/New folder/Gateway Outdoor.png"
                                    alt="Gateway Features"
                                    width={600}
                                    height={400}
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4) TECHNICAL & FUNCTIONAL SYSTEM SPECIFICATIONS */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
                            Technical & Functional Specifications
                        </h2>
                        <div className="w-24 h-1 bg-blue-500 mx-auto mt-6 rounded-full" />
                    </div>

                    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
                        {specs.map((spec, i) => (
                            <div key={i} className="bg-white rounded-3xl p-8 border border-slate-100 shadow-lg hover:shadow-blue-100 transition-all group">
                                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 border border-blue-100 group-hover:scale-110 transition-transform">
                                    <spec.icon size={28} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-6">{spec.title}</h3>
                                <div className="space-y-4">
                                    {spec.items.map((item, j) => (
                                        <div key={j} className="flex flex-col gap-1 border-b border-slate-100 pb-3 last:border-0 last:pb-0">
                                            <span className="text-xs uppercase font-bold text-slate-400 tracking-wider">
                                                {item.label}
                                            </span>
                                            <span className="text-sm font-bold text-slate-700">
                                                {item.value}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5) PRODUCT DIMENSIONS SECTION */}
            <section className="py-24 bg-slate-50 overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900">Mechanical Dimensions</h2>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center justify-center gap-16 max-w-5xl mx-auto">
                        <div className="relative">
                            <Image
                                src="/New folder/Gateway Outdoor.png"
                                alt="Dimensions Mapping"
                                width={600}
                                height={600}
                                className="object-contain"
                            />
                            {/* Simple visual indicators would go here in a full mockup */}
                        </div>

                        <div className="grid gap-6 w-full lg:w-80">
                            {[
                                { label: "Width", value: "210 mm" },
                                { label: "Height", value: "190 mm" },
                                { label: "Depth", value: "100 mm" }
                            ].map((dim, i) => (
                                <div key={i} className="flex items-center justify-between bg-white px-8 py-6 rounded-2xl shadow-sm border border-slate-100">
                                    <span className="font-bold text-slate-500 uppercase text-xs tracking-[0.1em]">{dim.label}</span>
                                    <span className="text-2xl font-black text-slate-900">{dim.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 6) ENTERPRISE BENEFITS SECTION */}
            <section className="py-24 bg-blue-50 text-slate-900 relative">
                <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
                <div className="container mx-auto px-6 text-center relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-16">
                        Built for <span className="text-blue-600">Enterprise</span> IoT Deployments
                    </h2>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
                        {[
                            "Reliable Outdoor Performance", "Industrial Temperature Tolerance",
                            "Secure LoRaWAN Integration", "Low Power Consumption",
                            "Scalable Network Expansion"
                        ].map((point, i) => (
                            <div key={i} className="p-8 rounded-[2rem] bg-white border border-blue-100 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-200/50 transition-all group">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-blue-600 transition-colors">
                                    <CheckCircle2 size={24} className="text-blue-600 group-hover:text-white transition-colors" />
                                </div>
                                <h4 className="font-bold text-lg leading-snug text-slate-800">{point}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7) FINAL CALL TO ACTION SECTION */}

            {/* Minimal Footer Signature */}

        </div>
    )
}
