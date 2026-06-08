/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  trailingSlash: true,

  images: {
    unoptimized: true,
  },

  // REQUIRED for GitHub Pages project repo
  basePath: "/my-portfolio",
  assetPrefix: "/my-portfolio/",
};

export default nextConfig;