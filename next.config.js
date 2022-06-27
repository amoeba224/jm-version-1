const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `http://localhost:5000/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;