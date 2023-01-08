/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['myserver'],
  },
  output: 'standalone',
}

module.exports = nextConfig
