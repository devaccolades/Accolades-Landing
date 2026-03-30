/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  images: {
    domains: [ 'https://admin.accoladesweb.com', 'https://strapi.video.accoladesweb.com'], // Your existing Strapi host configuration+
    unoptimized: true, // Disable Next.js image optimization
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
