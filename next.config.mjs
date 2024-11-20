/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https", // Protocol is "https"
        hostname: "assets.aceternity.com", // Exact hostname (do not use wildcards like `**/`)
        port: "", // Leave port empty for default ports
        pathname: "/**/**", 
      },
    ],
  },
};

export default nextConfig;
