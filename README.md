# nuxt-examples [![Build Status](https://travis-ci.org/daggerok/nuxt-examples.svg?branch=master)](https://travis-ci.org/daggerok/nuxt-examples)
Nuxt.js playgrounds

```bash
npm i -g create-nuxt-app
create-nuxt-app simple
cd simple
npm i
npm run build
npm run generate
docker run -it --rm --name app -p 80:80 -v $(pwd)/dist:/usr/share/nginx/html:ro nginx:1.17.6-alpine
http :/
```

## resources

* https://vueschool.io/courses/nuxtjs-fundamentals
* https://nuxtjs.org/api/configuration-router/#base
* https://www.vuemastery.com/download-nuxt
* https://ru.nuxtjs.org/
