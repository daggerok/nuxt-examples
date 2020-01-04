<template>
  <div class="container">
    <ul>
      <li><nuxt-link to="/">index: /</nuxt-link></li>
      <li><nuxt-link to="/ololo">ololo.md: /ololo</nuxt-link></li>
      <li><nuxt-link to="/posts?name=ololo">ololo.md: /?name=ololo</nuxt-link></li>
      <li><nuxt-link to="/posts?name=trololo">trololo.md: /?name=trololo</nuxt-link></li>
    </ul>
  </div>
</template>

<style>
.ul {
  list-style: none;
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
