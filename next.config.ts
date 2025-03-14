import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  distDir: process.env.NODE_ENV === "production" ? "build" : ".next",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "web-assets.same.dev",
        port: "",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
