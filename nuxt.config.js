module.exports = {
  cache: true,
  plugins: [
    '~plugins/registerSw.js'
  ],
  /*
  ** Headers of the page
  */
  head: {
    title: 'Jakub Juszczak 🦄 Frontend Developer from Bochum',
    titleTemplate: '%s - Web Development',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#ffffff' },
      { hid: 'description', name: 'description', content: 'Jakub Juszczak Frontend Developer with passion.' }
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', href: '/favicon-32x32.png', sizes: '32x32'},
      { rel: 'icon', type: 'image/png', href: '/favicon-16x16.png', sizes: '16x16'},
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'manifest', href: '/manifest.json' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600,700'}
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    '~assets/css/main.css',
    { src: '~assets/styles/_base.scss', lang: 'scss' }
    ],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#FBC227' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    loaders: [
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: 'url-loader',
        query: {
          limit: 1000, // 1KO
          name: 'img/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 1000, // 1 KO
          name: 'fonts/[name].[hash:7].[ext]'
        }
      }
    ]
  }
}
