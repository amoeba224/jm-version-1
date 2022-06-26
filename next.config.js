// module.exports = {
//   compiler: {
//     emotion: {
//       sourceMap: true,
//       autoLabel: true,
//       labelFormat: "[local]",
//     },
//   },
// };

module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:5000/:path*' // Proxy to Backend
      }
    ]
  }
}