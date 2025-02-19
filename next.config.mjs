/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "",
  assetPrefix: "./", // Required for correct asset loading in GitHub Pages
  images: {
    unoptimized: true, // GitHub Pages does not support Next.js image optimization
    remotePatterns: [
      {
        protocol: "https", // Protocol is "https"
        hostname: "assets.aceternity.com", // Exact hostname (do not use wildcards like `**/`)
        port: "", // Leave port empty for default ports
        pathname: "/**/**", 
      },{
        protocol: "https", // Protocol is "https"
        hostname: "github.com", // Exact hostname (do not use wildcards like `**/`)
        port: "", // Leave port empty for default ports
        pathname: "/**/**", 
      },{
        protocol: "https", // Protocol is "https"
        hostname: "matlabacademy-content.mathworks.com", // Exact hostname (do not use wildcards like `**/`)
        port: "", // Leave port empty for default ports
        pathname: "/**/**", 
      },
    ],
  },
};

export default nextConfig;
