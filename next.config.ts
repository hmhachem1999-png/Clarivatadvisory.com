import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Emit a fully static site to ./out for upload to any static host.
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
