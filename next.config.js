/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['dvvjkgh94f2v6.cloudfront.net','images.unsplash.com','unsplash.com','pfsrealty.com'],
  },
  publicRuntimeConfig: {
    // Define your environment variables here
    API_URL: process.env.API_URL || 'http://localhost:3000'
  }
}

module.exports = nextConfig
