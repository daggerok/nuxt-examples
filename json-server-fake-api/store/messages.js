export const state = () => ({
  messages: [],
});

export const getters = {
  messagesAmount() {

  }
};

export const actions = {
  getMessages() {
    //
  },
};

export const mutations = {
  setMessages(state, messages) {
    state.messages = messages;
  },
};
