<template>
  <div class="container">
    <button @click="incrementCounter"> + </button>
    <button @click="decrementCounter"> - </button>
    <button @click="resetCounter"> reset </button>
    <div>{{counter}}</div>
  </div>
</template>

<script>
// import Logo from '~/components/Logo.vue'
import { mapMutations, mapState } from 'vuex';
import {state} from "../store/counter";

export default {
  components: {
    // Logo
  },
  computed: {
    ...mapState({
      counter: state => state.counter.counter,
    }),
  },
  methods: {
    ...mapMutations({
      incrementCounter: 'counter/increment',
      decrementCounter: 'counter/decrement',
      resetCounter    : 'counter/reset',
    }),
  },
}
</script>

<style>
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
