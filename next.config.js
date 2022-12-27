/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.prismic.io',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/articles",
        destination: "/",
      },
    ];
  },
};

module.exports = nextConfig;
