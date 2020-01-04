# nuxtjs-frontmatter-markdown-loader

## markdown

<!--

```bash
npm i -E @nuxtjs/markdownit
npm i -E markdown-it-div markdown-it-attrs
npm i -E highlight.js github-markdown-css
```

_nuxt.config.js_

```js
export default {
  modules: [
    '@nuxtjs/markdownit',
    // ...
  ],
  markdownit: {
    html: true,
    injected: true,
    preset: 'default',
    typographer: true,
    linkify: true,
    breaks: true,
    use: [
      'markdown-it-div',
      'markdown-it-attrs',
    ],
  },
  css: [
    'highlight.js/styles/github.css',
    'github-markdown-css/github-markdown.css',
  ],
  // ...
};
```

-->

### frontmatter-markdown-loader

```bash
npm i -ED frontmatter-markdown-loader
```

_nuxt.config.js_

```js
import path from 'path';

export default {
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config) {
      config.module.rules.push({
        test: /\.(md|markdown)$/i,
        loader: 'frontmatter-markdown-loader',
        include: path.resolve(__dirname, 'posts'),
        options: {
          vue: {
            root: 'dynamicMarkdown',
          },
        },
      });
    },
  },
  // ...
};
```

<!--

## i18n

```bash
npm i -E nuxt-i18n
mkdir -p locales/en locales/ru
```

_nuxt.config.js_

```js
export default {
  modules: [
    'nuxt-i18n',
    // ...
  ],
  i18n: {
    // use locales/en, locales/ru, etc folders...
  },
  // ...
};
```

-->

## resources

* https://github.com/marinaaisa/nuxt-markdown-blog-starter
* [frontmatter-markdown-loader example](https://github.com/hmsk/frontmatter-markdown-loader-nuxt-sample/)
* [Build own blog with Nuxt.js](https://www.youtube.com/watch?v=qOjbRDVQzH8)
