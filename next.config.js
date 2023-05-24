/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
}

module.exports = nextConfig

module.exports = {
  async rewrites() {
    return [
      {
        source: '/clubs/:slug',
        destination: '/university-page',
      },
      {
        source: '/university/:slug',
        destination: '/university-page',
      },
    ];
  },
};
