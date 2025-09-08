/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  // The assetPrefix you already have is key for relative paths.
  assetPrefix: './',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  // Add this line for the GitHub Pages subdirectory
  basePath: '/SulvLandingPage',
};

module.exports = nextConfig;