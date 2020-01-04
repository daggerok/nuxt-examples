<template>
  <div>
    <small>This component mounts <code>~/posts/${file name which is passed through "name" query on URL}.md</code> as Vue component dynamically</small>
    <h2>{{ attributes.title }}</h2>
    <component :is="selectedArticle" />
  </div>
</template>

<script>
  export default {
    name: 'posts',
    validate ({ query }) {
      const pages = ['ololo', 'trololo'];
      return pages.includes(query.name);
    },
    data () {
      return {
        attributes: {},
        selectedArticle: null,
      };
    },
    created () {
      // const markdown = require(`~/posts/${this.$route.query.name}.md`);
      // this.attributes = markdown.attributes;
      // this.selectedArticle = markdown.vue.component;

      // // Use Async Components for the benefit of code splitting
      // // https://vuejs.org/v2/guide/components-dynamic-async.html#Async-ComponentsΩ`
      // this.selectedArticle = () => import(`~/posts/${this.$route.query.name}.md`).then(({ vue }) => vue.component)

      import(`~/posts/${this.$route.query.name}.md`).then(markdown => {
        this.attributes = markdown.attributes; // md page frontmatter
        this.selectedArticle = markdown.vue.component; // dynamic vue
      });
    }
  };
</script>

<style scoped>

</style>
