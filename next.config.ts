import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  cacheComponents: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  // async redirects() {
  //   return [
  //     {
  //       source: "/",
  //       destination: "https://goriachev.com.ua",
  //       permanent: true,
  //     },
  //     {
  //       source: "/:path*",
  //       destination: "https://goriachev.com.ua/:path*",
  //       permanent: true,
  //     },
  //   ];
  // },
};

export default nextConfig;
