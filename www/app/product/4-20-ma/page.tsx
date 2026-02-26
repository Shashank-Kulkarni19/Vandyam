"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import {
    Droplets,
    Thermometer,
    Waves,
    Activity,
    ShieldCheck,
    Download,
    FileText,
    CheckCircle2,
    Building2,
    Factory,
    Sprout,
    WavesIcon,
    Wifi,
    Cloud,
    Battery,
    Settings
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ViOTNodePage() {
    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <section className="relative pt-20 pb-24 md:pt-32 md:pb-40 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50/30">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="lg:w-1/2 text-left space-y-6">
                            <div className="inline-flex items-center space-x-2 bg-blue-100/80 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold">
                                <Activity size={16} />
                                <span>Advanced IoT Sensing</span>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight leading-tight">
                                VIoT <span className="text-blue-600">Node</span>
                            </h1>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                                Water Quality Sensor
                            </h2>
                            <p className="text-xl text-gray-600 max-w-xl leading-relaxed">
                                Multi-Parameter Water Analysis for Smart Monitoring Systems. Precision sensing for enterprise-grade environmental intelligence.
                            </p>
                            <div className="flex flex-wrap gap-4 pt-4">
                                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-xl text-lg font-bold shadow-xl shadow-blue-200 transition-all">
                                    View Specifications
                                </Button>
                                <Button variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-6 rounded-xl text-lg font-bold transition-all">
                                    <Download className="mr-2 h-5 w-5" />
                                    Download Datasheet
                                </Button>
                            </div>
                        </div>
                        <div className="lg:w-1/2 relative">
                            <div className="relative z-10 animate-fade-in">
                                <Image
                                    src="/New folder/4-20 Ma.png"
                                    alt="ViOT Node Water Quality Sensor"
                                    width={600}
                                    height={600}
                                    className="rounded-3xl object-contain drop-shadow-2xl"
                                    priority
                                />
                            </div>
                            <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-300 rounded-full blur-3xl opacity-20"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Overview Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="relative p-12 bg-blue-100/50 rounded-[40px] overflow-hidden group">
                                <div className="grid grid-cols-2 gap-6 relative z-10">
                                    <div className="bg-white p-6 rounded-2xl shadow-sm group-hover:shadow-md transition-all">
                                        <Droplets className="text-blue-600 mb-3" size={24} />
                                        <h4 className="font-bold text-gray-900 border-none pl-0">Precision</h4>
                                        <p className="text-xs text-gray-500">Sub-ppm accuracy</p>
                                    </div>
                                    <div className="bg-white p-6 rounded-2xl shadow-sm group-hover:shadow-md transition-all">
                                        <ShieldCheck className="text-blue-600 mb-3" size={24} />
                                        <h4 className="font-bold text-gray-900 border-none pl-0">Durability</h4>
                                        <p className="text-xs text-gray-500">IP68 Marine-grade</p>
                                    </div>
                                    <div className="bg-white p-6 rounded-2xl shadow-sm group-hover:shadow-md transition-all">
                                        <Wifi className="text-blue-600 mb-3" size={24} />
                                        <h4 className="font-bold text-gray-900 border-none pl-0">Connectivity</h4>
                                        <p className="text-xs text-gray-500">LoRaWAN / 4G</p>
                                    </div>
                                    <div className="bg-white p-6 rounded-2xl shadow-sm group-hover:shadow-md transition-all">
                                        <Battery className="text-blue-600 mb-3" size={24} />
                                        <h4 className="font-bold text-gray-900 border-none pl-0">Low Power</h4>
                                        <p className="text-xs text-gray-500">Up to 5yr battery</p>
                                    </div>
                                </div>
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/50 rounded-full -mr-16 -mt-16"></div>
                            </div>
                        </div>
                        <div className="space-y-8 order-1 lg:order-2">
                            <div className="space-y-4">
                                <h3 className="text-blue-600 font-bold uppercase tracking-widest text-sm">Comprehensive Overview</h3>
                                <h2 className="text-4xl font-bold text-gray-900 border-l-4 border-blue-600 pl-6">Next-Generation Water Intelligence</h2>
                            </div>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                The ViOT Node is a high-performance, multi-parameter water quality sensor designed for real-time monitoring of critical environmental metrics. Engineered for both smart city infrastructure and heavy industrial applications, it provides the bridge between physical water chemistry and digital decision-making.
                            </p>
                            <div className="grid md:grid-cols-2 gap-6">
                                {[
                                    { title: "Real-time Monitoring", desc: "Instant visibility into water chemistry changes." },
                                    { title: "IoT-Enabled", desc: "Seamless connectivity with LoRaWAN and 4G options." },
                                    { title: "Remote Alerts", desc: "Custom threshold triggers send alerts directly to your team." },
                                    { title: "Data Logging", desc: "Historical trending for regulatory and operational analysis." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="flex-shrink-0 w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                                            <CheckCircle2 size={20} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">{item.title}</h4>
                                            <p className="text-sm text-gray-500">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Measured Water Parameters Section */}


            {/* Technical Specifications Section */}


            {/* Key Features Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <h2 className="text-4xl font-bold text-gray-900">Key Features</h2>
                            <ul className="space-y-6">
                                {[
                                    "Multi-parameter water quality monitoring",
                                    "Waterproof IP68 design",
                                    "Automatic sensor calibration",
                                    "Real-time quality alerts",
                                    "Data logging and trending",
                                    "Regulatory compliance reporting"
                                ].map((feature, i) => (
                                    <li key={i} className="flex items-start gap-4 group">
                                        <div className="mt-1 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                            <CheckCircle2 size={14} />
                                        </div>
                                        <span className="text-lg text-gray-700 font-medium">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative">
                            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-[50px] p-12 shadow-2xl overflow-hidden min-h-[400px] flex items-center justify-center relative">
                                <div className="absolute inset-0 opacity-10">
                                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] [background-size:20px_20px]"></div>
                                </div>
                                <div className="text-center relative z-10">
                                    <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-6 border border-white/20 text-white">
                                        <Settings className="animate-spin" size={40} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4">Industrial Intelligence</h3>
                                    <p className="text-blue-100 text-sm max-w-xs mx-auto">
                                        A proprietary blend of advanced sensors and edge-computing algorithms for unparalleled accuracy.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Industry Applications Section */}


            {/* Why Choose ViOT Node Section */}
            <section className="py-24 bg-blue-50 text-gray-900 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-200/20 rounded-full blur-[100px] -mr-64 -mt-64"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Why Choose VIoT Node</h2>
                        <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
                    </div>
                    <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
                        {[
                            { icon: Battery, title: "Long Battery Life", desc: "Optimized power management for years of operation." },
                            { icon: Wifi, title: "LoRaWAN Compatible", desc: "Long-range transmission with minimal infrastructure." },
                            { icon: Activity, title: "Remote Monitoring", desc: "Monitor your data from anywhere in the world." },
                            { icon: Cloud, title: "Cloud Integration", desc: "Seamless dashboarding and advanced analytics." },
                            { icon: Settings, title: "Easy Installation", desc: "Plug-and-play setup for rapid deployment." }
                        ].map((point, i) => (
                            <div key={i} className="space-y-4 text-center">
                                <div className="w-16 h-16 bg-white text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-blue-100">
                                    <point.icon size={30} />
                                </div>
                                <h3 className="font-bold text-lg text-gray-900">{point.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{point.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call To Action Section */}


        </div>
    )
}
