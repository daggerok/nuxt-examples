<template>
  <div>
    <h3>from</h3>
    <User :user="message.from" />
    <h3>to</h3>
    <User :user="message.to" />
    <h2>subject</h2>
    <h3>{{message.subject}}</h3>
    <p>{{message.body}}</p>
  </div>
</template>

<script>
  import User from "./User";

  export default {
    name: "Message",
    components: { User },
    props: ["message"]
  }
</script>

<style scoped>

</style>
