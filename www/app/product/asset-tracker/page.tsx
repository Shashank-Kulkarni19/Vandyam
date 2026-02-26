"use client"

import { Header } from "@/components/header"
import Image from "next/image"
import { CheckCircle2, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function GPSLocationTrackingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* 1) HERO SECTION */}
      <section className="py-20 md:py-32 bg-gray-50/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-8">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
                  In-Built Sensor Node
                </h1>
              </div>

              <p className="text-xl text-gray-600 leading-relaxed">
                A high-precision GNSS-based location tracking device designed for real-time monitoring, geofencing, and intelligent asset visibility across logistics, fleet, and smart infrastructure deployments.
              </p>

              <div className="space-y-4">
                <h3 className="font-bold text-gray-900 border-l-4 border-blue-600 pl-4">Technical Highlights</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8 text-gray-700">
                  <li className="flex items-center gap-2">• GPS-enabled location tracking</li>
                  <li className="flex items-center gap-2">• GNSS Capabilities</li>
                  <li className="flex items-center gap-2">• Systems: GPS, NAVIC</li>
                  <li className="flex items-center gap-2">• Accuracy: ~2.5m CEP (open sky)</li>
                  <li className="flex items-center gap-2">• Update Rate: Configurable, up to 10 Hz</li>
                  <li className="flex items-center gap-2">• Acquisition Sensitivity: -148 dBm</li>
                </ul>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-xl text-lg font-bold transition-all">
                  Request Demo
                </Button>
                <Button variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-6 rounded-xl text-lg font-bold transition-all flex items-center gap-2">
                  <Download size={20} />
                  Download Datasheet
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <Image
                src="/New folder/InBuiltSensorNode.png"
                alt="VIoT Node GPS-Enabled Location Tracking"
                width={550}
                height={550}
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2) GNSS & POSITIONING CAPABILITIES */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold text-gray-900">High-Precision GNSS Tracking</h2>
              <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 bg-gray-50 p-8 md:p-12 rounded-[2rem] border border-gray-100">
              {[
                "Multi-constellation GNSS support (GPS & NAVIC)",
                "High acquisition sensitivity (-148 dBm)",
                "~2.5m CEP positioning accuracy",
                "Configurable reporting rate up to 10 Hz",
                "Reliable open-sky performance"
              ].map((point, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <CheckCircle2 className="text-blue-600 mt-1 flex-shrink-0" size={24} />
                  <span className="text-lg text-gray-700 font-medium">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3) KEY FEATURES SECTION */}
      <section className="py-24 bg-gray-50/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center max-w-6xl mx-auto">
            <div className="lg:w-1/2 space-y-10">
              <h2 className="text-4xl font-bold text-gray-900">Key Features</h2>
              <div className="grid sm:grid-cols-1 gap-6">
                {[
                  "Real-time GPS location tracking",
                  "Configurable reporting intervals",
                  "Geofencing capabilities",
                  "Motion detection and alerts",
                  "Long battery life",
                  "OTA firmware updates"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 font-bold">
                      {i + 1}
                    </div>
                    <span className="text-xl text-gray-800 font-semibold">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 bg-white p-12 rounded-[3rem] shadow-sm border border-gray-100">
              <Image
                src="/New folder/InBuiltSensorNode.png"
                alt="VIoT Node Product View"
                width={450}
                height={450}
                className="object-contain mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4) INDUSTRY APPLICATIONS */}


      {/* 5) TECHNICAL SUMMARY */}
      <section className="py-24 bg-gray-50/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center">Technical Overview</h2>
            <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden divide-y divide-gray-100">
              {[
                { label: "GNSS Systems", value: "GPS, NAVIC" },
                { label: "Accuracy", value: "~2.5m CEP (open sky)" },
                { label: "Update Rate", value: "Up to 10 Hz (configurable)" },
                { label: "Sensitivity", value: "-148 dBm" },
                { label: "Reporting", value: "Configurable intervals" },
                { label: "Alerts", value: "Motion detection & geofencing" }
              ].map((spec, i) => (
                <div key={i} className="grid grid-cols-1 md:grid-cols-2 p-8 items-center">
                  <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-2 md:mb-0">{spec.label}</span>
                  <span className="text-gray-900 text-xl font-semibold">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6) CALL TO ACTION SECTION */}

    </div>
  )
}
