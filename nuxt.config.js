const pkg = require('./package')
const path = require('path')
const GITHUB_PAGES_ENDPOINT = '/Path/' // If Auto Deploy on GitHub Pages. Add GitHub Pages Endpoint.
const endPoint = process.env.NODE_ENV === 'GITHUB_PAGES' ? GITHUB_PAGES_ENDPOINT : '/'

module.exports = {
  // Setting Mode.
  mode: 'spa', // or 'universal'
  // Setting Dev. See -> https://ja.nuxtjs.org/api/configuration-dev/
  dev: {},
  // Seting Env. See -> https://ja.nuxtjs.org/api/configuration-env/
  env: {},
  // Setting Port & Host. See -> https://ja.nuxtjs.org/api/configuration-server/
  server: {},
  // Development Dir. Default -> Root
  srcDir: 'apps/',
  // Generate Options.
  generate: {
    // Build Dir. Default -> `dist`
    dir: 'deploy',
    // Generate 404.html
    fallback: true
  },
  // Customize of Router. See -> https://ja.nuxtjs.org/api/configuration-router/
  router: {
    // Default Endpoint -> '/'
    base: endPoint
  },

  // Build configuration
  build: {
    // Added Watching Dir.
    watch: ['./apps/types/**/*'],
    // You can extend webpack config here
    extend(config, ctx) {
      // Setting Root Path Alias.
      config.resolve.alias['@'] = path.join(__dirname, 'apps/')
      // ESLint.
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|ts|vue)$/,
          exclude: /(node_modules)/,
          loader: 'eslint-loader'
        })
      }
    },
    // Customize of Build HTML Minify.
    html: {
      minify: {
        removeComments: true
      }
    },
    // When Fonts & Images & Icons File Size Under 2.5KB, Encode to Base64 Data. ( on webpack url-loader )
    loaders: {
      fontUrl: { limit: 4000 },
      imgUrl: { limit: 4000 }
    }
  },

  // Setting Headers of the Page.
  head: {
    title: pkg.name, // Default -> pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }, // Default -> pkg.description
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'Nuxt.js, My, Starter, Kit'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: 'favicon/favicon.ico' }]
  },

  // Setting Manifest of the Page.
  manifest: {},

  // Setting Work Box.
  workbox: {},

  // Customize the progress-bar color
  loading: { color: '#fff' },

  // Global CSS. ( Default Setting & etc.. )
  css: [
    // Default Setting.
    '@/assets/styles/default-setting.styl',
    // Page Transitions. See -> https://ja.nuxtjs.org/guide/routing/#%E3%83%88%E3%83%A9%E3%83%B3%E3%82%B8%E3%82%B7%E3%83%A7%E3%83%B3
    '@/assets/styles/page-transitions.styl'
  ],

  // Customize of Page & Layout Transition. See -> https://ja.nuxtjs.org/api/configuration-transition/
  transition: {},
  layoutTransition: {},

  // Setting Modules. ( JS & CSS & Any More )
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    // '@nuxtjs/pwa', -> TODO.
    '@nuxtjs/axios',
    'nuxt-device-detect',
    '../modules/typescript.js',
    // Using Mixins Styles with Each Component.
    ['nuxt-stylus-resources-loader', [`${__dirname}/apps/assets/styles/mixins.styl`]]
  ],

  // Plugins to load before mounting the App
  plugins: ['@/plugins/Mixins', '@/plugins/CheckScreen'],

  // Axios module configuration
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  }
}
