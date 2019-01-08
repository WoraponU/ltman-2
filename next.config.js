const withSass = require('@zeit/next-sass')

module.exports = withSass({
  publicRuntimeConfig: {
    NODE_ENV: process.env.NODE_ENV
  },

  webpack(config, options) {
    return config
  }
})
