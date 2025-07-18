/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost"], // Your existing Strapi host configuration
  },
  // Add font optimization settings:
  optimizeFonts: true, // Enabled by default in Next.js 13+
  experimental: {
    fontLoaders: [
      {
        loader: '@next/font/google',
        options: { subsets: ['latin'] }
      }
    ],
  },
}

export default nextConfig