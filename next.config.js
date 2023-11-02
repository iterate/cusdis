module.exports = {
  rewrites() {
    return [
      {
        source: '/doc',
        destination: '/doc/index.html',
      },
    ]
  },
  async headers() {
    return [
      {
        source: '/js/:filename*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
        ],
      },
    ]
  },
}
