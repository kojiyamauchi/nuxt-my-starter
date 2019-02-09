// Import TS-Lint Webpack Plugins.
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

module.exports = function() {
  // Add .ts extension for store, middleware and more
  this.nuxt.options.extensions.push('ts')
  // Extend build
  this.extendBuild((config, { isClient }) => {
    const tsLoader = {
      loader: 'ts-loader',
      options: {
        appendTsSuffixTo: [/\.vue$/],
        transpileOnly: true // Remove Types Only on TS Loader. ( Don't Use Linter.)
      },
      exclude: [/vendor/, /\.nuxt/]
    }
    // Add TypeScript loader
    config.module.rules.push(
      Object.assign(
        {
          test: /((client|server)\.js)|(\.tsx?)$/
        },
        tsLoader
      )
    )
    // Add TypeScript loader for vue files
    for (let rule of config.module.rules) {
      if (rule.loader === 'vue-loader') {
        rule.options.loaders = rule.options.loaders || {}
        rule.options.loaders.ts = tsLoader
      }
    }
    // Add .ts extension in webpack resolve
    if (config.resolve.extensions.indexOf('.ts') === -1) {
      config.resolve.extensions.push('.ts')
    }
    // TS-Lint Webpack Plugins. (Client Only.)
    if (isClient) {
      config.plugins.push(
        new ForkTsCheckerWebpackPlugin({
          workers: ForkTsCheckerWebpackPlugin.ONE_CPU,
          tslint: true, // TS-Lint on Webpack Plugins.
          vue: true
        })
      )
    }
  })
}
