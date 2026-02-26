"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Download, Mail } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Header } from "@/components/header";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import Select from "react-select";
import { Textarea } from "@/components/ui/textarea";
import emailjs from '@emailjs/browser';
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const quoteFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(1, "Company is required"),
  productsSelect: z.array(z.string()).min(1, "Please select at least one product"),
  quantity: z.string(),
});

const productOptions = [
  { value: "1", label: "VIoT 2.0 Gateway – WiFi + 4G" },
  { value: "2", label: "VIoT 2.0 Gateway – WiFi (Private)" },
  { value: "3", label: "VIoT 2.0 Gateway – WiFi (Public)" },
  { value: "4", label: "VIoT 2.0 Node – 4–20mA" },
  { value: "5", label: "VIoT 2.0 Node – GPS" },
];

const getProductName = (value: string) => {
  const product = productOptions.find(p => p.value === value);
  return product ? product.label : 'Unknown';
};

type QuoteFormValues = z.infer<typeof quoteFormSchema>;

export default function LoRaWANPage() {
  const [showDialog, setShowDialog] = useState(false);
  const [loading, setLoading] = useState(false);

  // Initialize EmailJS
  useEffect(() => {
    if (typeof window !== 'undefined') {
      emailjs.init({
        publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '',
      });
    }
  }, []);

  const form = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      productsSelect: [],
      quantity: '0',
    },
  });

  const handleDownload = (filename: string) => {
    const link = document.createElement('a');
    link.href = `/lorawan/${encodeURIComponent(filename)}`;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleFormSubmit = async (data: QuoteFormValues) => {
    try {
      setLoading(true);

      // Map form data to EmailJS template parameters
      // Your EmailJS template should use these parameter names: {{name}}, {{email}}, {{company}}, {{product}}, {{quantity}}
      const selectedProducts = data.productsSelect.map(getProductName).join(", ");
      const templateParams = {
        name: data.name,
        email: data.email,
        company: data.company,
        product: selectedProducts || 'Not selected',
        quantity: data.quantity,
      };

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_OFFICE_TEMPLATE_ID || '',
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
      );

      // Send email using EmailJS
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
      );

      alert("Thank you! We'll get back to you soon.");
      form.reset();
      setShowDialog(false);
    } catch (error) {
      console.error('Email sending failed:', error);
      alert('Failed to send email. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    form.reset();
    setShowDialog(false);
  };


  return (
    <>
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Get Quote</DialogTitle>
            <DialogDescription>
              Please fill in the form below to get a quote.
            </DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleFormSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="your.email@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company</FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="Your company name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="productsSelect"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Products</FormLabel>
                    <FormControl>
                      <Select
                        isMulti
                        options={productOptions}
                        value={productOptions.filter(option => field.value.includes(option.value))}
                        onChange={(selected) => {
                          field.onChange(selected ? selected.map(option => option.value) : []);
                        }}
                        placeholder="Select products"
                        className="react-select-container"
                        classNamePrefix="react-select"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="quantity"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Quantity</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Enter quantity" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <DialogFooter>
                <Button type="button" variant="outline" onClick={handleCancel} disabled={loading}>
                  Cancel
                </Button>
                <Button type="submit" disabled={loading}>
                  {loading ? "Sending..." : "Submit"}
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
      <Header />
      <div className="container p-4 pt-8 flex flex-col gap-4 mx-auto">
        <div >
          <Card>
            <CardHeader>
              <CardTitle>VIoT 2.0 Gateway – WiFi + 4G</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-6 items-center">
                <Image src="/lorawan/images/gateway.png" alt="VIoT 2.0 Gateway – WiFi + 4G" width={100} height={100} />
                <ul className="list-disc list-inside">
                  <li>Dual Connectivity: Ensures continuous operation with both WiFi and 4G LTE support for seamless failover.</li>
                  <li>City-Scale LoRaWAN Coverage: Enables reliable, long-range communication for large-scale deployments.</li>
                  <li>Massive Node Capacity: Supports up to 10,000 IoT nodes for scalable, enterprise-grade networks.</li>
                  <li>Built-In Power Backup: Up to 6 hours battery runtime for uninterrupted data transmission during outages.</li>
                  <li>Rugged IP67 Enclosure: Designed for demanding outdoor environments—resistant to dust, rain, and extreme conditions.</li>
                </ul>
              </div>
              <div className="flex gap-2 justify-end mt-4">
                <Button variant="secondary" onClick={() => handleDownload("VIoT Gateway Catalogue.pdf")}><Download className="h-4 w-4 mr-2" /> Download Brochure</Button>
                <Button variant="outline" onClick={() => setShowDialog(true)}><Mail className="h-4 w-4 mr-2" /> Get Quote</Button>
              </div>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>VIoT 2.0 Gateway – WiFi (Private)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-6 items-center">
                <Image src="/lorawan/images/gateway.png" alt="VIoT 2.0 Gateway – WiFi (Private)" width={100} height={100} />
                <ul className="list-disc list-inside">
                  <li>Secure Private Network Mode: Ideal for controlled, enterprise-grade IoT environments.</li>
                  <li>Extended LoRaWAN Range: Reliable coverage across industrial campuses, sites, and gated networks.</li>
                  <li>High Node Handling: Manages up to 10,000 connected devices for large-scale private IoT ecosystems.</li>
                  <li>Uninterrupted Operation: Up to 6 hours of battery backup for reliable uptime.</li>
                  <li>Industrial-Grade Durability: IP67-rated housing built for rugged, on-ground deployments.</li>
                </ul>
              </div>
              <div className="flex gap-2 justify-end mt-4">
                <Button variant="secondary" onClick={() => handleDownload("VIoT Gateway Catalogue.pdf")}><Download className="h-4 w-4 mr-2" /> Download Brochure</Button>
                <Button variant="outline" onClick={() => setShowDialog(true)}><Mail className="h-4 w-4 mr-2" /> Get Quote</Button>
              </div>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>VIoT 2.0 Gateway – WiFi (Public)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-6 items-center">
                <Image src="/lorawan/images/gateway.png" alt="VIoT 2.0 Gateway – WiFi (Public)" width={100} height={100} />
                <ul className="list-disc list-inside">
                  <li>Public Network Ready: Reliable WiFi-based connectivity for smart city and community IoT applications.</li>
                  <li>Wide-Area LoRaWAN Communication: Covers large zones efficiently without the need for repeaters.</li>
                  <li>Scalable Connectivity: Supports up to 10,000 nodes for high-density IoT networks.</li>
                  <li>Reliable Field Operation: Built-in 6-hour power backup ensures continuous data flow.</li>
                  <li>Weatherproof Design: IP67 enclosure built for long-term outdoor and public-space installations.</li>
                </ul>
              </div>
              <div className="flex gap-2 justify-end mt-4">
                <Button variant="secondary" onClick={() => handleDownload("VIoT Gateway Catalogue.pdf")}><Download className="h-4 w-4 mr-2" /> Download Brochure</Button>
                <Button variant="outline" onClick={() => setShowDialog(true)}><Mail className="h-4 w-4 mr-2" /> Get Quote</Button>
              </div>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>VIoT 2.0 Node – 4–20mA</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-6 items-center">
                <Image src="/lorawan/images/node-4.png" alt="VIoT 2.0 Node – 4–20mA" width={100} height={100} />
                <ul className="list-disc list-inside">
                  <li>Direct Industrial Sensor Integration: Connects seamlessly with 4–20mA sensors for real-time monitoring of critical parameters.</li>
                  <li>Dual-Channel, High-Accuracy ADC: 12-bit precision ensures consistent and reliable data acquisition.</li>
                  <li>Legacy System Compatibility: Built-in RS485 Modbus RTU support for smooth integration with existing PLCs and control systems.</li>
                  <li>Low-Power Architecture: Optimized for remote or power-limited environments with extended battery backup.</li>
                  <li>Configurable Intelligence: Supports local sampling, edge preprocessing, and data scaling for cleaner, smarter analytics.</li>
                </ul>
              </div>
              <div className="flex gap-2 justify-end mt-4">
                <Button variant="secondary" onClick={() => handleDownload("4-20 mA Node.pdf")}><Download className="h-4 w-4 mr-2" /> Download Brochure</Button>
                <Button variant="outline" onClick={() => setShowDialog(true)}><Mail className="h-4 w-4 mr-2" /> Get Quote</Button>
              </div>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>VIoT 2.0 Node – GPS</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-6 items-center">
                <Image src="/lorawan/images/node-gps.png" alt="VIoT 2.0 Node – GPS" width={100} height={100} />
                <ul className="list-disc list-inside">
                  <li>Multi-Constellation Tracking: Supports GPS + NavIC for accurate and reliable positioning.</li>
                  <li>High-Precision Performance: Achieves ~2.5m accuracy with configurable update rates up to 10Hz.</li>
                  <li>Smart Motion & Geofence Alerts: Real-time notifications for unauthorized movement or inactivity.</li>
                  <li>Energy-Efficient Design: Long-lasting battery for continuous field operation with minimal maintenance.</li>
                  <li>Remote Manageability: OTA firmware updates and secure API integration for easy fleet management and scalability.</li>
                </ul>
              </div>
              <div className="flex gap-2 justify-end mt-4">
                <Button variant="secondary" onClick={() => handleDownload("GPS Node.pdf")}><Download className="h-4 w-4 mr-2" /> Download Brochure</Button>
                <Button variant="outline" onClick={() => setShowDialog(true)}><Mail className="h-4 w-4 mr-2" /> Get Quote</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}
