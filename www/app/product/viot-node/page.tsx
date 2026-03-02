"use client"

import { Header } from "@/components/header"
import Image from "next/image"
import {
    Download,
    Mail,
    Cpu,
    Thermometer,
    Droplets,
    Activity,
    Zap,
    ShieldCheck,
    Wifi,
    Cloud,
    Battery,
    ArrowRight,
    Search,
    BarChart3,
    Waves,
    Building2,
    Factory,
    Sprout,
    WavesIcon
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ViotNodeEnterprisePage() {
    return (
        <div className="min-h-screen bg-[#F5F7FA] text-[#0A2540] font-sans selection:bg-[#2E7DFF]/20">
            <Header />

            {/* 1) HERO SECTION */}
            <section className="relative pt-32 pb-40 overflow-hidden bg-white">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-20">
                        <div className="lg:w-1/2 space-y-8">
                            <div className="space-y-4">
                                <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-[#0A2540] leading-[1.1]">
                                    4-20mA Node
                                </h1>
                                <p className="text-2xl md:text-3xl font-medium text-[#2E7DFF]">
                                    Intelligent Industrial Monitoring Platform
                                </p>
                                <p className="text-xl text-[#0A2540]/70 max-w-2xl leading-relaxed">
                                    A multi-sensor IoT device engineered for motion sensing, temperature tracking,
                                    and high-precision water quality monitoring in demanding industrial environments.
                                </p>
                            </div>


                        </div>

                        <div className="lg:w-1/2 flex justify-center">
                            <div className="relative">
                                <div className="absolute inset-0 bg-[#2E7DFF] rounded-full blur-[120px] opacity-10" />
                                <Image
                                    src="\New folder\4-20 Ma.png"
                                    alt="VIoT Node Device"
                                    width={600}
                                    height={600}
                                    className="relative z-10 object-contain drop-shadow-[0_32px_64px_rgba(10,37,64,0.15)]"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2) PRODUCT OVERVIEW */}
            <section className="py-24 bg-[#F5F7FA]">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540]">
                            Intelligent IoT Sensing Platform
                        </h2>
                        <div className="w-16 h-1 bg-[#2E7DFF] mx-auto rounded-full" />
                        <p className="text-xl text-[#0A2540]/70 leading-relaxed">
                            The VIoT Node integrates motion sensing, temperature monitoring, and water quality analytics
                            in an industrial-grade compact device. Designed for mission-critical reliability and scalable
                            deployments, it provides a unified platform for comprehensive facility and environmental tracking.
                        </p>
                    </div>
                </div>
            </section>

            {/* 3) SENSOR MODULES SECTION */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Card 1: Motion Sensor Module */}
                        <div className="p-8 rounded-[12px] bg-[#F5F7FA] border border-[#0A2540]/5 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center mb-6 shadow-sm">
                                <Activity className="text-[#2E7DFF]" size={28} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Motion Sensor Module</h3>
                            <ul className="space-y-3 mb-8 text-[#0A2540]/70">
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#2E7DFF]" />
                                    6-axis accelerometer & gyroscope
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#2E7DFF]" />
                                    Configurable sensitivity threshold
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#2E7DFF]" />
                                    Wake-on-motion
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#2E7DFF]" />
                                    Tamper detection
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#2E7DFF]" />
                                    Fall detection
                                </li>
                            </ul>
                            <div className="pt-4 border-t border-[#0A2540]/10">
                                <p className="text-sm font-bold uppercase tracking-wider text-[#0A2540]/40 mb-2">Applications</p>
                                <p className="text-[#0A2540]/70">Asset tracking, vibration monitoring, equipment safety.</p>
                            </div>
                        </div>

                        {/* Card 2: Temperature Monitoring Module */}
                        <div className="p-8 rounded-[12px] bg-[#F5F7FA] border border-[#0A2540]/5 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center mb-6 shadow-sm">
                                <Thermometer className="text-[#2E7DFF]" size={28} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Temperature Monitoring</h3>
                            <ul className="space-y-3 mb-8 text-[#0A2540]/70">
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#2E7DFF]" />
                                    Range: -40°C to +85°C
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#2E7DFF]" />
                                    Accuracy: ±0.5°C
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#2E7DFF]" />
                                    Resolution: 0.1°C
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#2E7DFF]" />
                                    Configurable alarm thresholds
                                </li>
                            </ul>
                            <div className="pt-4 border-t border-[#0A2540]/10">
                                <p className="text-sm font-bold uppercase tracking-wider text-[#0A2540]/40 mb-2">Applications</p>
                                <p className="text-[#0A2540]/70">Cold chain, pharma storage, data centers.</p>
                            </div>
                        </div>

                        {/* Card 3: Water Quality Monitoring Module */}
                        <div className="p-8 rounded-[12px] bg-[#F5F7FA] border border-[#0A2540]/5 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center mb-6 shadow-sm">
                                <Droplets className="text-[#2E7DFF]" size={28} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Water Quality Module</h3>
                            <div className="grid grid-cols-2 gap-y-3 mb-6">
                                <div>
                                    <p className="text-xs font-bold uppercase text-[#0A2540]/40">Chlorine</p>
                                    <p className="font-semibold text-[#0A2540]">0–10 ppm</p>
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase text-[#0A2540]/40">pH</p>
                                    <p className="font-semibold text-[#0A2540]">0–14</p>
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase text-[#0A2540]/40">Turbidity</p>
                                    <p className="font-semibold text-[#0A2540]">0–4000 NTU</p>
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase text-[#0A2540]/40">Temp</p>
                                    <p className="font-semibold text-[#0A2540]">0–50°C</p>
                                </div>
                            </div>
                            <ul className="space-y-2 mb-6 text-[#0A2540]/70 text-sm">
                                <li className="flex items-center gap-2">• IP68 waterproof</li>
                                <li className="flex items-center gap-2">• Automatic calibration</li>
                                <li className="flex items-center gap-2">• Real-time alerts</li>
                                <li className="flex items-center gap-2">• Regulatory compliance reporting</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4) WHY VIoT NODE SECTION */}
            <section className="py-24 bg-[#F5F7FA]">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#0A2540]">Why VIoT Node?</h2>
                        <p className="text-[#0A2540]/60 text-lg">Reliable, Secure, and Scalable Industrial IoT Deployment.</p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "Industrial-Grade Hardware", icon: Zap, desc: "Built to withstand harsh environments and continuous operation." },
                            { title: "Ultra-Low Power Consumption", icon: Battery, desc: "Advanced power management for multi-year battery longevity." },
                            { title: "Secure Data Transmission", icon: ShieldCheck, desc: "End-to-end encryption ensuring data integrity and confidentiality." },
                            { title: "Cloud & Edge Integration", icon: Cloud, desc: "Flexible architecture for distributed and centralized monitoring." }
                        ].map((feature, i) => (
                            <div key={i} className="bg-white p-8 rounded-[12px] shadow-sm border border-[#0A2540]/5 hover:shadow-lg transition-all text-center group">
                                <div className="w-16 h-16 bg-[#F5F7FA] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#2E7DFF]/10 transition-colors">
                                    <feature.icon className="text-[#2E7DFF]" size={32} />
                                </div>
                                <h4 className="text-xl font-bold mb-4">{feature.title}</h4>
                                <p className="text-[#0A2540]/60 leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5) TECHNICAL SPECIFICATIONS */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-[#0A2540] mb-12 border-l-4 border-[#2E7DFF] pl-6">Technical Specifications</h2>
                        <div className="overflow-hidden rounded-[12px] border border-[#0A2540]/10 shadow-sm">
                            <table className="w-full text-left">
                                <tbody className="divide-y divide-[#0A2540]/10">
                                    {[
                                        { label: "Connectivity", value: "LoRaWAN / WiFi / Cellular" },
                                        { label: "Power", value: "Long-life internal battery" },
                                        { label: "Enclosure", value: "Industrial IP-rated (IP65/IP68 options)" },
                                        { label: "Data Logging", value: "Cloud-sync & Local Storage" },
                                        { label: "Alerts", value: "Real-time Dashboard / SMS / Email" }
                                    ].map((spec, i) => (
                                        <tr key={i} className="hover:bg-[#F5F7FA] transition-colors">
                                            <td className="py-5 px-6 font-bold text-[#0A2540]/40 uppercase text-xs tracking-widest w-1/3">{spec.label}</td>
                                            <td className="py-5 px-6 font-semibold text-[#0A2540]">{spec.value}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6) INDUSTRY APPLICATIONS */}
            <section className="py-24 bg-[#F5F7FA]">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-[#0A2540] text-center mb-16">Industry Applications</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                        {[
                            { name: "Smart Cities", icon: Building2 },
                            { name: "Industrial Automation", icon: Factory },
                            { name: "Cold Chain Monitoring", icon: Thermometer },
                            { name: "Water Treatment", icon: Droplets },
                            { name: "Agriculture", icon: Sprout }
                        ].map((app, i) => (
                            <div key={i} className="flex flex-col items-center gap-4 text-center">
                                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-sm hover:scale-110 transition-transform cursor-default">
                                    <app.icon className="text-[#2E7DFF]" size={36} />
                                </div>
                                <span className="font-bold text-[#0A2540]">{app.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
