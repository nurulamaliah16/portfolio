import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: { formats: ["image/avif", "image/webp"] },
  compiler: { removeConsole: process.env.NODE_ENV === "production" },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "DENY" },
        ],
      },
    ];
  },
};

export default nextConfig;
