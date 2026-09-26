/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Workaround for Next.js 16 image optimization limitation in offline intranet environments
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
