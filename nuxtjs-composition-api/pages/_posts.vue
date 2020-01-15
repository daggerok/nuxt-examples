<template>
  <div>
    <small>This component mounts <code>~/posts/${file name which is passed through "name" query on URL}.md</code> as Vue component dynamically</small>
    <h2>{{ attributes.title }}</h2>
    <component :is="selectedArticle" />
  </div>
</template>

<script>
  import { reactive, ref, onMounted } from '@vue/composition-api';
  export default {
    name: 'posts',
    validate ({ query }) {
      const pages = ['ololo', 'trololo'];
      return pages.includes(query.name);
    },
    setup(props, context) {
      const attributes = ref({});
      const selectedArticle = ref();
      onMounted(() => {
        console.log('context.root._route', context.root._route);
        import(`~/posts/${context.root._route.query.name}.md`).then(markdown => {
          attributes.value = markdown.attributes; // md page frontmatter
          selectedArticle.value = markdown.vue.component; // dynamic vue
        });
      });
      return { attributes, selectedArticle, };
    },
    // created () {
    //   // const markdown = require(`~/posts/${this.$route.query.name}.md`);
    //   // this.attributes = markdown.attributes;
    //   // this.selectedArticle = markdown.vue.component;
    //
    //   // // Use Async Components for the benefit of code splitting
    //   // // https://vuejs.org/v2/guide/components-dynamic-async.html#Async-ComponentsΩ`
    //   // this.selectedArticle = () => import(`~/posts/${this.$route.query.name}.md`).then(({ vue }) => vue.component)
    //
    //   import(`~/posts/${this.$route.query.name}.md`).then(markdown => {
    //     this.attributes = markdown.attributes; // md page frontmatter
    //     this.selectedArticle = markdown.vue.component; // dynamic vue
    //   });
    // }
  };
</script>

<style scoped>

</style>
