/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  experimental: {
    instrumentationHook: true,
  },
  reactStrictMode: true,
};

export default nextConfig;
