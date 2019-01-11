const withSass = require('@zeit/next-sass')
const OptimizeCssnanoPlugin = require('@intervolga/optimize-cssnano-plugin')

module.exports = withSass({
  publicRuntimeConfig: {
    NODE_ENV: process.env.NODE_ENV,
    APOLLO_SERVER_URL: process.env.APOLLO_SERVER_URL
  },

  webpack(config, { buildId, dev, isServer, defaultLoaders }) {
    if (!dev) {
      config.plugins.push(
        new OptimizeCssnanoPlugin({
          sourceMap: false,
          cssnanoOptions: {
            preset: [
              'default',
              {
                discardComments: {
                  removeAll: true
                }
              }
            ]
          }
        })
      )
    }
    return config
  }
})
