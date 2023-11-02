module.exports = {
  rewrites() {
    return [
      {
        source: '/doc',
        destination: '/doc/index.html'
      }
    ]
  },
  async headers() {
    return [
      {
        source: "/js/*",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "https://wise-copywriter-025422.framer.app"
          }
        ]
      }
    ]
  }
}