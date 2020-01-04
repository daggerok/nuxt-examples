<template>
  <div>
    <small>This component mounts <code>~/posts/ololo.md</code> as Vue component</small>
    <h4>{{ title }}</h4>
    <post-ololo />
  </div>
</template>

<script>
  import fm from '~/posts/ololo.md'
  export default {
    name: 'ololo',
    components: {
      'post-ololo': fm.vue.component,
    },
    data() {
      return {
        title: fm.attributes.title,
      };
    },
  };
</script>

<style scoped>

</style>
