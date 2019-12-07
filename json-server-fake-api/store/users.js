import axios from "axios";

export const state = () => ({
  users: [],
});

export const getters = {
  usersAmount() {
    //
  }
};

export const actions = {
  getUsers({ commit }) {
    axios
      .get("http://127.0.0.1:8080/users")
      .catch(reason => console.log('error', reason))
      .then(value => value.data)
      .then(users => commit({
        type: 'setUsers',
        users,
      }))
  },
};

export const mutations = {
  setUsers(state, users) {
    state.users = users;
  },
};
