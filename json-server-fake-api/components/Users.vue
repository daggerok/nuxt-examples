<template>
  <div class="container">
    <h2>Users</h2>
    <div v-for="user in users">
      <User :user="user" />
    </div>
  </div>
</template>

<script>
  import User from "./User";

  export default {
    name: "Users",
    components: { User },
    props: ['users']
  }
</script>

<style scoped>

</style>
