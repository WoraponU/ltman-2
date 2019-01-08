const withSass = require('@zeit/next-sass')

module.exports = withSass({
  publicRuntimeConfig: {
    NODE_ENV: process.env.NODE_ENV,
    APOLLO_SERVER_URL: process.env.APOLLO_SERVER_URL
  },

  webpack(config, options) {
    return config
  }
})
