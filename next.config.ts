import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: 'standalone',
  async redirects() {
    return [
      {
        source: '/review/list',
        destination: '/review',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
