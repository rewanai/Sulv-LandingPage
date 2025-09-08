import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',           // <-- key for GitHub Pages
  trailingSlash: true,        // URLs like /about/ -> /about/index.html
  images: {
    unoptimized: true,        // next/image works in static export
  },
  // If you were hosting at username.github.io/repo-name you’d need basePath/assetPrefix.
  // Because you’re using a custom domain (sulv.rewan.ai), you DO NOT need basePath or assetPrefix.
  // basePath: '/SulvLandingPage',
  // assetPrefix: '/SulvLandingPage/',
  eslint: { ignoreDuringBuilds: true },  // optional: don’t fail CI on lint
  typescript: { ignoreBuildErrors: false }
};

export default nextConfig;
