import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
  output: 'standalone',
};

export default nextConfig;
