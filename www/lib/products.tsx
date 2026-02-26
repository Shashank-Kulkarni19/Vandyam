import { Cpu, FireExtinguisher, Network, Shield, Smartphone } from "lucide-react";

export const PRODUCTS_MAP = {
  "gateway-network": {
    icon: <Network className="h-12 w-12 text-green-500" />,
    title: "Gateway Network",
    image: "/products/gateway.png",
    description:
      "LoRa mesh networking enables reliable, long-range communication across vast or challenging terrains such as forests, agricultural lands, or industrial zones. In this setup, gateways communicate with each other over distances of up to 4 km, provided there is a clear line of sight. Likewise, end devices can maintain connections with gateways over distances of up to 10 km or more, ensuring seamless data transmission across large areas.",
    features: [
      {
        title: "Long-Range Communication",
        description: "Enables reliable data transmission over extended distances, ideal for large or remote areas.",
      },
      {
        title: "Multiple Nodes Connection",
        description: "Supports connectivity for thousands of devices within the same network for wide-area coverage.",
      },
      {
        title: "Ethernet and Wi-Fi Connection",
        description: "Provides flexible backhaul options through both wired Ethernet and wireless Wi-Fi connections.",
      },
      {
        title: " Industrial Grade Build",
        description: "Designed with rugged, weather-resistant materials to ensure reliable operation in harsh environments.",
      },
    ],
  },
  "human-detector": {
    icon: <Cpu className="h-12 w-12 text-blue-500" />,
    title: "Human Detector",
    image: "",
    description:
      "Detect people up to 8 m, even through walls or objects, and track movement and count up to three individuals—all while measuring their speed. Operating reliably in rain, fog, or darkness, it complements cameras and smart systems. Compact and portable, it's simple to set up and connects via UART or GPIO. Advanced filtering avoids false alarms from pets or objects. The HumaSense Pro delivers instant, anonymous updates on presence and movement—privacy-safe, precise, and seamlessly integrated.",
    features: [
      {
        title: "Accurate Detection & Tracking",
        description:
          "mmWave radar delivers precise measurements of distance, speed, and position by interpreting frequency shifts and reflection patterns.",
      },
      {
        title: "Reliable in All Conditions",
        description: "It consistently works in darkness, fog, rain, and dust because radio waves penetrate these conditions, unlike optical sensors.",
      },
      {
        title: "Advanced Sensing Capabilities",
        description:
          " It can detect micro-movements (like breathing), differentiate multiple individuals, and perform speed and angle estimation simultaneously.",
      },
      {
        title: "Seamless Integration",
        description:
          "Compact, SoC-based modules with standard interfaces (UART, SPI, I²C) enable easy embedding into cameras, alarms, IoT hubs, and industrial systems.",
      },
    ],
  },
  "radio-collar": {
    icon: <Shield className="h-12 w-12 text-yellow-500" />,
    title: "Radio Collar",
    image: "/products/radio.png",
    description:
      "Wildlife collars provide real-time tracking to monitor animal movements, migration routes, and habitat usage, offering critical data for conservation and research. These devices help detect unusual behaviors or inactivity, which can indicate distress, injury, or poaching threats. By supporting anti-poaching operations and enabling researchers to better understand species behavior, wildlife collars play a vital role in protecting endangered animals and promoting sustainable wildlife management across diverse ecosystems and remote terrains.",
    features: [
      {
        title: "Anti-Poaching Surveillance",
        description: "Provides real-time location data to detect and deter illegal hunting or poaching activities.",
      },
      {
        title: "Human-Wildlife Conflict Prevention",
        description: " Alerts authorities when animals approach human settlements, reducing conflict and protecting both wildlife and communities.",
      },
      {
        title: "Health & Survival Monitoring",
        description: "Monitors activity patterns and unusual behavior to identify health issues or threats to survival.",
      },
      {
        title: "Movement & Migration Tracking",
        description: "Captures precise movement data to study migration routes, territory ranges, and seasonal behaviors.",
      },
    ],
  },
  "asset-tracker": {
    icon: <Smartphone className="h-12 w-12 text-orange-500" />,
    title: "Asset Tracker",
    image: "/products/asset.png",
    description:
      "Our compact and rugged GPS tracker provides real-time, high-precision location and motion monitoring, ideal for both indoor and outdoor environments. Designed with a simple plug-and-play setup, it ensures hassle-free installation and reliable performance. Its long battery life and durable build make it perfect for tracking assets, vehicles, or equipment across challenging terrains or remote locations.",
    features: [
      {
        title: "Compact & Durable Build",
        description: "Features a small, rugged design built to withstand tough indoor and outdoor conditions.",
      },
      {
        title: "Plug-and-Play Design",
        description: "Enables quick and easy installation without complex setup procedures.",
      },
      {
        title: "Motion Detection",
        description: "Detects movement or unusual activity to enhance security and monitoring.",
      },
      {
        title: "Low Power Consumption",
        description: "Operates efficiently with minimal energy use, ensuring extended battery life.",
      },
    ],
  },
  "fire-alerting": {
    icon: <FireExtinguisher className="h-12 w-12 text-indigo-500" />,
    title: "Fire Alerting",
    image: "/products/fire.png",
    description:
      "Vandyam is developing a smart, expandable fire alerting system that predicts fire risks by monitoring temperature, humidity, soil dryness, and wind patterns. It analyzes historical fire data and detects unusual changes in forest conditions. The system provides early warnings, enabling rapid response and preventive actions to protect forests, wildlife, and nearby communities from the threat of wildfires.",
    features: [
      {
        title: "Monitoring temperature, humidity, soil dryness, and wind patterns",
        description: "Continuously tracks key environmental factors that influence fire risks.",
      },
      {
        title: " Analyzing historical fire data to identify high-risk areas",
        description: "Studies past fire incidents to predict and map zones with higher vulnerability.",
      },
      {
        title: "Detecting unusual environmental changes in real-time",
        description: "Instantly identifies abnormal conditions that may indicate potential fire outbreaks.",
      },
      {
        title: "Sending early alerts for timely preventive action",
        description: "Delivers immediate warnings to enable quick response and minimize fire damage.",
      },
    ],
  },
};

// Keep the old array for backward compatibility
export const PRODUCTS_LIST = Object.values(PRODUCTS_MAP);

// Helper function to get product by route
export function getProductByRoute(route: string) {
  return PRODUCTS_MAP[route as keyof typeof PRODUCTS_MAP];
}

// Helper function to find product by title (for backward compatibility)
export function getProductByTitle(title: string) {
  return PRODUCTS_LIST.find((product) => product.title === title);
}

// Get all available routes
export const PRODUCT_ROUTES = Object.keys(PRODUCTS_MAP);
