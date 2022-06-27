/* module.exports = {
  compiler: {
    emotion: {
      sourceMap: true,
      autoLabel: true,
      labelFormat: "[local]",
    },
  },
};
 */
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