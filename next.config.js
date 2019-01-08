module.exports = {
  publicRuntimeConfig: {
    NODE_ENV: process.env.NODE_ENV
  },

  webpack(config, options) {
    return config
  }
}
