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

* https://egghead.io/lessons/javascript-creating-demo-apis-with-json-server
* https://github.com/typicode/json-server
* https://github.com/foreversd/forever
* https://vueschool.io/courses/nuxtjs-fundamentals
* https://nuxtjs.org/api/configuration-router/#base
* https://www.vuemastery.com/download-nuxt
* https://ru.nuxtjs.org/
