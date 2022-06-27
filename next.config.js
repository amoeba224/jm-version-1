<<<<<<< HEAD
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
=======
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
>>>>>>> b43be4e28ebf44e58b137dccf8c221839a24115d

module.exports = nextConfig;