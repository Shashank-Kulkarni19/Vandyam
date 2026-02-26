"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "Ramanathan Venkataraman",
      position: "Chief Technology Officer",
      company: "Hachidori Robotics Pvt. Ltd.",
      text: "Appreciate the professionalism and technical skills demonstrated by Vandyam team while developing software frontend utilities for our Autonomous Mobile Robots (AMR). Through continuous engagement and iterative releases, Vandyam is able to handle our complex technical requirements effectively. I would highly recommend Vandyam as a reliable partner.",
    },

    {
      id: 2,
      name: "Manish Verma",
      position: "Associate Director-CTO Office",
      company: "Judge India Solutions",
      text: "Vandyam Solutions Private Limited has been a trusted partner in engineering talent acquisition, consistently delivering high-quality, vetted candidates with impressive speed and expertise. Their deep technical insight and hands-on experience have helped us meet project deadlines without compromise. We highly recommend Vandyam for organizations seeking reliable and skilled talent.",
    },
    {
      id: 3,
      name: "Jicksen Joy",
      position: "CEO",
      company: "Omnyk",
      text: "Vandyam Solutions has been a vital partner in developing firmware for Avida, our heart health wearable. They delivered production-ready, compliant firmware and offered expert consulting on algorithm enhancement. Their CI/CD pipelines streamlined our process, and their adaptability to Omnyk’s evolving needs truly stood out. We highly recommend Vandyam for their technical excellence and commitment to client success.",
    },

  ]

  // Auto-transition every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Hear From Our Happy Clients: Their Stories</h2>

        </div>

        <div className="max-w-4xl mx-auto">
          {/* Single Testimonial Box */}
          <Card
            className="bg-white/95 backdrop-blur-lg border-2 border-blue-400 shadow-2xl transition-all duration-700 ease-in-out hover:shadow-4xl hover:border-blue-500 hover:bg-white rounded-2xl group"
          >
            <CardContent className="p-10 md:p-14 transition-all duration-500">
              {/* Testimonial Content */}
              <div className="text-center">
                {/* Testimonial Text */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-6 transition-all duration-500 group-hover:from-blue-100 group-hover:to-indigo-100 group-hover:shadow-lg">
                  <blockquote className="text-lg md:text-xl italic leading-relaxed text-gray-800 transition-all duration-500 ease-in-out group-hover:text-gray-900">
                    "{currentTestimonial.text}"
                  </blockquote>
                </div>

                {/* Author Info */}
                <div className="bg-white rounded-lg p-4 shadow-md transition-all duration-500 ease-in-out group-hover:shadow-xl group-hover:bg-blue-50">
                  <h4 className="text-xl font-bold text-gray-800 transition-all duration-500 group-hover:text-blue-800">{currentTestimonial.name}</h4>
                  <p className="text-gray-600 transition-all duration-500 group-hover:text-gray-800 group-hover:font-medium">{currentTestimonial.position}</p>
                  <p className="text-gray-500 text-sm transition-all duration-500 group-hover:text-gray-700 group-hover:font-medium">{currentTestimonial.company}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Progress Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 rounded-full transition-all duration-300 ${index === currentIndex
                  ? 'bg-blue-600 w-12'
                  : 'bg-blue-300 w-3 hover:bg-blue-400'
                  }`}
              />
            ))}
          </div>

          {/* Testimonial Counter */}
          <div className="text-center mt-4">
            <p className="text-gray-600 text-sm">
              {currentIndex + 1} of {testimonials.length}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
