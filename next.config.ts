// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',           // <— tells Next to generate static HTML into ./out
  // Optional but recommended for GH Pages:
  trailingSlash: true,        // makes URLs end with / (better for static hosts)
  images: { unoptimized: true } // if you're using <Image>, disable the optimizer
};

module.exports = nextConfig;
