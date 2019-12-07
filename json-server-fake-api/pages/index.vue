<template>
  <div class="container">
    <Users :users="getUsersFromState" />
  </div>
</template>

<script>
import Message from "../components/Message";
import Users from "../components/Users";
import { mapMutations, mapState, mapActions } from "vuex";

export default {
  components: { Users, Message },
  computed: {
    ...mapState({ //              store/users.js/state.users
      getUsersFromState: state => state.users   .users.users,
    }),
  },
  methods: {
    ...mapActions({
      getUsers: "users/getUsers",
    }),
  },
  created() {
    this.getUsers();
  }
}
</script>
