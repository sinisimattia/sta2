require('dotenv').config()
const { identity } = require('./snisni.config.json')

module.exports = {
  mode: 'universal',
  telemetry: false,
  /*
   ** Headers of the page
   */
  head: {
    title: identity.name,
    meta: [
      {
        charset: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content: identity.slogan || process.env.npm_package_description,
      },
    ],
    link: [
      {
        rel: 'icon',
        type: identity.icon.type,
        href: identity.icon.src,
      },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#000',
  },
  /*
   ** Global CSS
   */
  css: ['~assets/scss/app.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /**
   ** Server middleware mapping
   */
  serverMiddleware: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://buefy.github.io/#/documentation
    'nuxt-buefy',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    // Doc: https://www.npmjs.com/package/@nuxtjs/style-resources
    '@nuxtjs/style-resources',
    // Doc: https://www.npmjs.com/package/nuxt-fontawesome
    'nuxt-fontawesome',
    // Doc: https://www.npmjs.com/package/@nuxtjs/svg
    '@nuxtjs/svg',
  ],
  /**
   * Buefy module configuration
   * See https://github.com/buefy/nuxt-buefy
   */
  buefy: {
    css: false,
    materialDesignIcons: false,
    defaultIconPack: 'fas',
  },

  /**
   * Use FontAwesome icons with a wrapper
   * based on the official 'vue-fontawesome'
   * component
   * See: https://www.npmjs.com/package/nuxt-fontawesome
   */
  fontawesome: {
    component: 'fa',
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas'],
      },
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['fab'],
      },
    ],
  },

  styleResources: {
    scss: ['~assets/scss/app.scss'],
  },

  /*
   ** Http module configuration
   ** See https://http.nuxtjs.org/api/#prefix
   */
  // http: {
  //  proxy: true
  // },
  axios: {
    baseURL: 'http://backend/',
    browserBaseURL: 'http://localhost:8080',
    proxy: true,
  },
  /*
   ** Build configuration
   */
  build: {
    /**
     * Babel configuration
     */
    babel: {
      babelrc: true,
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
}
