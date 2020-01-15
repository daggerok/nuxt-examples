<template>
  <div>
    <small>This component mounts <code>~/posts/ololo.md</code> as Vue component</small>
    <h4>{{ title }}</h4>
    <post-ololo/>
  </div>
</template>

<script>
  import { reactive, ref, computed } from '@vue/composition-api';
  import fm from '~/posts/ololo.md';

  export default {
    name: 'ololo',
    components: {
      'post-ololo': fm.vue.component,
    },
    setup() {
      const title = ref(fm.attributes.title);
      return { title, };
    },
  };
</script>

<style scoped>

</style>
