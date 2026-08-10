import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.whirlingwind.com" }],
        destination: "https://whirlingwind.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
