<template>
  <div>
    <h2>Messages</h2>
    <div v-for="message in messages">
      <Message :message="message"/>
    </div>
  </div>
</template>

<script>
  import Message from "./Message";

  export default {
    name: "Messages",
    components: { Message },
    props: ["messages"]
  }
</script>

<style scoped>

</style>
