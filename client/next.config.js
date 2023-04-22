/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  env: {
    host: "http://localhost:5000",
  },
}

module.exports = nextConfig
