import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
    Wifi,
    Battery,
    Coins,
    Network,
    Lamp,
    Trash2,
    Car,
    Wind,
    ArrowRight,
    TrendingUp,
    ShieldCheck,
    Activity,
    Droplets,
    Zap,
    PhoneCall
} from "lucide-react";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
    title: "Smart City Solutions | Vandyam",
    description: "Enabling scalable, cost-effective IoT infrastructure for next-generation urban development using LoRaWAN technology.",
};

const SmartCityCard = ({
    icon: Icon,
    title,
    description,
    image
}: {
    icon: any,
    title: string,
    description: string,
    image?: string
}) => (
    <Card className="group border-none outline-none shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 rounded-2xl overflow-hidden bg-white">
        {image && (
            <div className="relative h-48 w-full overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                    <Icon className="h-6 w-6 text-blue-400" />
                </div>
            </div>
        )}
        {!image && (
            <CardHeader className="flex flex-row items-center space-x-4 pb-2">
                <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
                    <Icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl font-bold">{title}</CardTitle>
            </CardHeader>
        )}
        <CardContent className={image ? "p-6" : "p-6 pt-2"}>
            {image && <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">{title}</h3>}
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {description}
            </p>
        </CardContent>
    </Card>
);

const FeatureCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
    <div className="p-6 rounded-2xl bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border border-blue-50">
        <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white mb-4 shadow-blue-200 shadow-lg">
            <Icon className="h-6 w-6" />
        </div>
        <h3 className="text-lg font-bold mb-2 text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
    </div>
);

export default function SmartCityPage() {
    return (
        <main className="min-h-screen bg-slate-50 overflow-x-hidden">
            <Header />

            {/* 1️⃣ Hero Section */}
            <section className="relative h-screen flex items-center justify-center text-white text-center px-4 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=2000"
                        alt="Smart City Skyline"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/40 to-slate-900/80 z-10" />
                </div>

                <div className="relative z-20 max-w-5xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-blue-600/20 border border-blue-400/30 text-blue-400 font-medium text-sm mb-6 backdrop-blur-sm tracking-wider uppercase">
                        Future of Urban Intelligence
                    </span>
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight leading-tight">
                        Smart City Solutions <br />
                        <span className="text-blue-400">Powered by LoRaWAN</span>
                    </h1>
                    <p className="text-lg md:text-2xl mb-12 text-slate-200 max-w-3xl mx-auto leading-relaxed opacity-90">
                        Enabling scalable, cost-effective IoT infrastructure for <br className="hidden md:block" />
                        next-generation urban development.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button asChild size="lg" className="rounded-full px-8 py-6 text-lg font-bold bg-blue-600 hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20">
                            <Link href="#solutions">
                                Explore Solutions <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                        <Button asChild size="lg" className="rounded-full px-8 py-6 text-lg font-bold bg-blue-500 hover:bg-blue-400 text-white transition-all shadow-xl shadow-blue-500/30">
                            <Link href="/contact">Learn More</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* 2️⃣ Why LoRaWAN Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="max-w-xl">
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                                Why LoRaWAN is the <span className="text-blue-600">Top Priority</span> for Smart Cities
                            </h2>
                            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                                <p>
                                    As urban centers evolve into Smart Cities, the demand for reliable, long-range, and energy-efficient connectivity becomes paramount. LoRaWAN emerges as the definitive solution for high-volume, low-data municipal applications.
                                </p>
                                <ul className="space-y-4 pt-4 border-l-2 border-blue-600 pl-6 italic font-medium text-slate-900">
                                    <li>Infrastructure: Smart street lighting & utility monitoring</li>
                                    <li>Efficiency: Waste management & parking occupancy</li>
                                    <li>Sustainability: Real-time air & water quality monitoring</li>
                                </ul>
                            </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6">
                            <FeatureCard
                                icon={Wifi}
                                title="Wide Coverage"
                                description="Connect thousands of devices over several kilometers with deep indoor penetration."
                            />
                            <FeatureCard
                                icon={Battery}
                                title="Long Battery Life"
                                description="Sensors can run for 10+ years on a single battery, reducing maintenance drastically."
                            />
                            <FeatureCard
                                icon={Coins}
                                title="Low Deployment Cost"
                                description="Minimize CAPEX/OPEX with unlicensed spectrum and simple infrastructure."
                            />
                            <FeatureCard
                                icon={Network}
                                title="Scalable Network"
                                description="Easily add thousands of nodes to a single gateway as your city needs grow."
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* 3️⃣ Smart City Use Cases Section */}
            <section id="solutions" className="py-24 bg-slate-50">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Innovative Urban Use Cases</h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                            Transforming city operations through precise data and automated responses.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <SmartCityCard
                            icon={Lamp}
                            title="Smart Street Lighting"
                            description="Automated brightness control based on ambient light and traffic, reducing energy consumption by up to 40%."
                            image="https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80&w=800"
                        />
                        <SmartCityCard
                            icon={Trash2}
                            title="Waste Management"
                            description="Fill-level sensors for bins optimize collection routes, reducing fuel costs and preventing overflow in public spaces."
                            image="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=800"
                        />
                        <SmartCityCard
                            icon={Car}
                            title="Smart Parking"
                            description="Real-time occupancy monitoring guides drivers to available spots, reducing traffic congestion and CO2 emissions."
                            image="https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&q=80&w=800"
                        />
                        <SmartCityCard
                            icon={Wind}
                            title="Air Quality Monitoring"
                            description="Distributed sensor networks track pollutants (PM2.5, NO2) to provide actionable health data to citizens and planners."
                            image="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800"
                        />
                    </div>
                </div>
            </section>

            {/* 4️⃣ Market Opportunity Section */}


            {/* 5️⃣ LoRaWAN Segment Outlook Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl animate-in fade-in slide-in-from-left-8 duration-700">
                            <Image
                                src="https://images.unsplash.com/photo-1597589827317-4c6d6e0a90bd?auto=format&fit=crop&q=80&w=1200"
                                alt="LoRaWAN Architecture"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                                <div className="flex items-center space-x-4 mb-2">
                                    <ShieldCheck className="h-6 w-6 text-green-400" />
                                    <span className="font-bold text-lg text-white">Enterprise-Grade Security</span>
                                </div>
                                <p className="text-slate-300 text-sm">AES-128 end-to-end encryption for every packet in the network.</p>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-4xl font-bold text-slate-900 leading-tight">
                                    The Anchor for <br />
                                    <span className="text-blue-600">Cross-Sector Expansion</span>
                                </h2>
                                <p className="text-lg text-slate-600 leading-relaxed">
                                    Smart city deployments act as a foundational anchor for wider LoRaWAN rollouts. Once the network is established for street lighting or waste management, it creates a unified multi-application infrastructure.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { icon: Droplets, label: "Water Metering" },
                                    { icon: Zap, label: "Energy Monitoring" },
                                    { icon: ShieldCheck, label: "Public Safety" },
                                    { icon: Activity, label: "Agriculture" },
                                    { icon: Network, label: "Asset Tracking" },
                                    { icon: TrendingUp, label: "Industrial IoT" }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center space-x-3 p-4 rounded-xl bg-slate-50 hover:bg-blue-50 transition-colors border border-slate-100 group">
                                        <item.icon className="h-5 w-5 text-blue-600 group-hover:scale-110 transition-transform" />
                                        <span className="font-medium text-slate-700">{item.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </main>
    );
}
