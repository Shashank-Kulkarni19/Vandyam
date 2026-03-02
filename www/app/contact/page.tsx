"use client"

import { useState, useRef, useEffect } from "react"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, CheckCircle, X } from "lucide-react"
import emailjs from '@emailjs/browser'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: ""
  })
  const [showSuccess, setShowSuccess] = useState(false)
  const [loading, setLoading] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  // Initialize EmailJS
  useEffect(() => {
    // Check if we're in the browser and initialize EmailJS
    if (typeof window !== 'undefined') {
      emailjs.init({
        publicKey: process.env.NEXT_PUBLIC_DEOGO_JOTA || '',
      });
    }
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate required fields
    if (!formData.firstName.trim() || !formData.lastName.trim() || !formData.email.trim() || !formData.message.trim()) {
      alert('Please fill in all required fields.')
      return
    }

    try {
      setLoading(true)

      // Log environment variables for debugging
      console.log('Service ID:', process.env.NEXT_PUBLIC_KRISHNA_RONALDO);
      console.log('Template ID:', process.env.NEXT_PUBLIC_LEO_MERCY);
      console.log('Public Key:', process.env.NEXT_PUBLIC_DEOGO_JOTA);

      // Send email using EmailJS
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_KRISHNA_RONALDO || '',
        process.env.NEXT_PUBLIC_LEO_MERCY || '',
        formRef.current as HTMLFormElement,
        process.env.NEXT_PUBLIC_DEOGO_JOTA || ''
      );

      // Clear the form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        message: ""
      })

      // Show success popup
      setShowSuccess(true)

      // Auto-hide popup after 3 seconds
      setTimeout(() => {
        setShowSuccess(false)
      }, 3000)
    } catch (error) {
      console.error('Email sending failed:', error)
      alert('Failed to send email. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const closeSuccessPopup = () => {
    setShowSuccess(false)
  }
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Get In Touch</h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Ready to transform your operations? Let's talk!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Send us a message</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you within 24 hours</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <Input
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="John"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <Input
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Doe"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                    <Input
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Your Company Name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your farming needs and how we can help..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    disabled={loading}
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
                <p className="text-gray-600 mb-8">
                  We're here to help you revolutionize your operations. Reach out to us through any of the
                  following channels.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Address</h3>
                    <p className="text-gray-600">
                      #40,Somwarpeth
                      <br />
                      Tilakwadi Belagavi, 590006
                      <br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Phone</h3>
                    <p className="text-gray-600">+91 9591056108</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Email</h3>
                    <p className="text-gray-600">office@vandyam.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:30 AM - 6:30 PM IST
                      <br />
                      Saturday & Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </section>

      {/* Success Popup */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md mx-4 text-center relative">
            <button
              onClick={closeSuccessPopup}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="mb-4">
              <CheckCircle className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Message Sent Successfully!</h3>
              <p className="text-gray-600">
                Thank you for contacting us. We'll get back to you within 24 hours.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Map Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Visit Our Office</h2>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3849.8647624193856!2d74.5197089!3d15.8497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf66e2c2a3f3d3%3A0x1!2sRGQ4%2B2G%20Belagavi%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Vandyam Office Location"
              ></iframe>
            </div>
            <div className="text-center mt-6">
              <p className="text-gray-600 text-lg font-medium">Vandyam Solutions Pvt Ltd</p>
              <p className="text-gray-600">Belagavi, Karnataka, India</p>
              <a
                href="https://www.google.com/maps/search/Vandyam+Solutions+Belagavi+Karnataka"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <MapPin className="h-5 w-5 mr-2" />
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
