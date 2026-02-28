/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    unoptimized: true,
  },

  experimental: {
    optimizePackageImports: ["lucide-react"],
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  allowedDevOrigins: [
    "192.168.40.1",
    "localhost",
    "127.0.0.1",
    "0.0.0.0",
  ],
};

export default nextConfig;