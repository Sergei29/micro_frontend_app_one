const NextFederationPlugin = require("@module-federation/nextjs-mf");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, options) => {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: "frontend_one",
        remotes: {
          frontend_three: `frontend_three@http://localhost:3002/_next/static/${
            isServer ? "ssr" : "chunks"
          }/remoteEntry_3.js`,
          frontend_two: `frontend_two@http://localhost:3001/_next/static/${
            isServer ? "ssr" : "chunks"
          }/remoteEntry_2.js`,
        },
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./nav": "./src/components/Nav/index.tsx",
        },
      })
    );
    return config;
  },
};

module.exports = nextConfig;
