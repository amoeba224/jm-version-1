 module.exports = {
  compiler: {
    emotion: {
      sourceMap: true,
      autoLabel: true,
      labelFormat: "[local]",
    },
  },
};

// module.exports = {
//   async redirects() {
//     return [
//       {
//         source: '/login',
//         destination: '/',
//         permanent: true,
//       },
//     ]
//   },
// };

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

