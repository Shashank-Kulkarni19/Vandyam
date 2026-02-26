import "./globals.css";

import { Analytics } from "@vercel/analytics/react";
import { Footer } from "@/components/footer";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import type React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Vandyam - Real Solutions. True IoT. No Compromises.",
    template: "%s | Vandyam",
  },
  description:
    "Vandyam specializes in AIoT solutions, integrating Artificial Intelligence into IoT and embedded hardware systems. Smart agriculture, real-time monitoring, and data analytics for sustainable digital transformation.",
  keywords: [
    "IoT",
    "Smart Agriculture",
    "Real-time Monitoring",
    "Data Analytics",
    "AIoT",
    "Smart Cities",
    "Industrial IoT",
    "Embedded Systems",
    "Cloud Infrastructure",
    "Digital Transformation",
  ],
  authors: [{ name: "Vandyam Solutions" }],
  creator: "Vandyam Solutions",
  publisher: "Vandyam Solutions",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://vandyam.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vandyam.com",
    title: "Vandyam - Real Solutions. True IoT. No Compromises.",
    description: "Vandyam specializes in AIoT solutions, integrating Artificial Intelligence into IoT and embedded hardware systems.",
    siteName: "Vandyam",
    images: [
      {
        url: "/home/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vandyam - IoT Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vandyam - Real Solutions. True IoT. No Compromises.",
    description: "Vandyam specializes in AIoT solutions, integrating Artificial Intelligence into IoT and embedded hardware systems.",
    images: ["/home/twitter-image.png"],
    creator: "@vandyam",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/home/icon.png",
    shortcut: "/home/favicon.ico",
    apple: "/home/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className={inter.className}>
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
