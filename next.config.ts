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
          // Ask for device capability hints so the server can decide animation
          // up-front. Critical-CH makes the browser retry the first navigation
          // with the hints, so even a cold first visit is covered.
          { key: "Accept-CH", value: "Sec-CH-Device-Memory, Sec-CH-Prefers-Reduced-Motion" },
          { key: "Critical-CH", value: "Sec-CH-Device-Memory, Sec-CH-Prefers-Reduced-Motion" },
          { key: "Vary", value: "Sec-CH-Device-Memory, Sec-CH-Prefers-Reduced-Motion" },
        ],
      },
    ];
  },
};

export default nextConfig;
