# vuetify-axios-vuex-nuxt-manual

```bash
create-nuxt-app vuetify-axios-vuex-nuxt-manual # without Vuetify.js
cd vuetify-axios-vuex-nuxt-manual/
npm i -E vuetify @mdi/font
npm i -ED sass-loader sass vue-jest@4.0.0-beta.2
```

_plugins/vuefy.js_

```js
import '@mdi/font/css/materialdesignicons.css';
import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
});
```

_nuxt.config.js_

```js
export default {
  css: [
    // '@mdi/font/css/materialdesignicons.css',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/vuetify.js',
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    ['@nuxtjs/vuetify', { /* module options */ }]
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    vendor: [
      'axios',
      'vuetify',
    ],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
```
