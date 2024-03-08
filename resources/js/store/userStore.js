
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: function () {
    return {
      id: null,
      token: null,
      name: null,
      email: null,
    };
  },

  actions: {
    async setUser(res) {
      this.$state.id = res.data.user.id;
      this.$state.token = res.data.token;
      this.$state.name = res.data.user.name;
      this.$state.email = res.data.user.email;

    },

  },
});
