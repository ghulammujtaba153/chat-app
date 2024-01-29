/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["robohash.org","robohash"],
  },
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "http://localhost:4000/:path*",
      },
    ];
  },
};

export default nextConfig;
