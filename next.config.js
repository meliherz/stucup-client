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
        destination: '/clubs/:slug',
      },
      {
        source: '/events/:slug/:slug',
        destination: '/event-registration',
      },
    ];
  },
};
