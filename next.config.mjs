/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Don't run ESLint during build, linting errors won't fail the build
    ignoreDuringBuilds: true,
  }
};

export default nextConfig;
