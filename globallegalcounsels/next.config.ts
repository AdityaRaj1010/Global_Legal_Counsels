import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  images: {
    remotePatterns: [
      new URL(
        "https://media.licdn.com/dms/image/v2/D4E03AQGfZZD2nk_edA/profile-displayphoto-shrink_400_400/B4EZVOet5zHUAo-/0/1740778430574?e=1760572800&v=beta&t=krQ0wbQhYE1FvH6htFnrFQayq_d_pXyOLn3E6Jm_jQs"
      ),
    ],
  },
  webpack(config: {
    module: {
      rules: {
        test: RegExp;
        issuer: { and: RegExp[] }; // Ensure it only applies to JS/TS/MDX files
        use: string[];
      }[];
    };
  }) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: { and: [/\.(js|ts|md)x?$/] }, // Ensure it only applies to JS/TS/MDX files
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

export default nextConfig;
