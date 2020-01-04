import path from 'path';
import FMMode from 'frontmatter-markdown-loader/mode';

const baseHref = process.env.BASE_HREF || '/';

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: baseHref + 'favicon.ico' }
    ],
    base: {
      href: baseHref,
    },
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'highlight.js/styles/github.css', // TODO
    'github-markdown-css/github-markdown.css', // TODO
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // '@nuxtjs/markdownit', // TODO
    'nuxt-i18n',
  ],
  // // TODO:
  // markdownit: {
  //   html: true,
  //   injected: true,
  //   preset: 'default',
  //   typographer: true,
  //   linkify: true,
  //   breaks: true,
  //   use: [
  //     'markdown-it-div',
  //     'markdown-it-attrs',
  //   ],
  // },
  i18n: {
    /*
    // see locales folder (locales/en, locales/rf, etc...).
    locales: ['en', 'fr', 'es'],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: {
          welcome: 'Welcome',
        },
        fr: {
          welcome: 'Bienvenue',
        },
        es: {
          welcome: 'Bienvenido',
        },
      },
    },
    */
    /*
    <nuxt-link :to="localePath('index')">{{ $t('home') }}</nuxt-link>
    <nuxt-link :to="localePath('index', 'en')">Homepage in English</nuxt-link>
    <nuxt-link
      :to="localePath({ name: 'category-slug', params: { slug: category.slug } })">
      {{ category.title }}
    </nuxt-link>
    */
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      const isProd = process.env.NODE_ENV === 'production';
      const isClient = ctx && ctx.isClient;
      if (isProd && isClient) {
        config.optimization.splitChunks.maxSize = 249856; // 244 Kib
      }
      config.module.rules.push({
        test: /\.(md|markdown)$/i,
        loader: 'frontmatter-markdown-loader',
        include: path.resolve(__dirname, 'posts'),
        options: {
          mode: [FMMode.VUE_COMPONENT],
          vue: {
            root: 'dynamicMarkdown',
          },
        },
      });
    },
  },
  generate: {
    routes: [
      '/',
      '/ololo',
      '/posts?name=ololo',
      '/posts?name=trololo',
    ],
  },
  router: {
    base: baseHref,
    mode: 'history',
  },
}
