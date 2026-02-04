import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Referrer-Policy',
            value: 'no-referrer-when-downgrade',
          },
        ],
      },
    ];
  },
  // Turbopack is the default bundler in Next.js 16
  // It handles Mapbox GL worker files automatically
  turbopack: {},
};

export default nextConfig;
