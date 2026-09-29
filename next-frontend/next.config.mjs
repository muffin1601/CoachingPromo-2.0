import { PHASE_DEVELOPMENT_SERVER } from 'next/constants.js';

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    const backend = (process.env.BACKEND_URL || "http://127.0.0.1:5001").replace(/\/$/, "");
    return { afterFiles: [
      { source: "/api/:path*", destination: `${backend}/api/:path*` },
      { source: "/uploads/:path*", destination: `${backend}/uploads/:path*` },
    ] };
  },
  images: { remotePatterns: [{ protocol: "http", hostname: "localhost", port: "5001", pathname: "/**" }, { protocol: "https", hostname: "**", pathname: "/**" }] },
};
// Development and production must not overwrite each other's webpack manifests.
export default (phase) => ({
  ...nextConfig,
  distDir: phase === PHASE_DEVELOPMENT_SERVER ? '.next-dev' : '.next',
});
