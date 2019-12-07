<template>
  <div>
    <h3>User {{user.id}}</h3>
    <code>{{user.username}}</code>
    <p>{{user.name}}</p>
  </div>
</template>

<script>
  export default {
    name: "User",
    props: ['user']
  }
</script>

<style scoped>

</style>
