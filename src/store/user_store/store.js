import { defineStore } from 'pinia';

export const useUserStore = defineStore('userStore', {
  state: () => {
    return {
      isLogedIn: false,
      tier: 0,
      token: null,
    };
  },
  actions: {
    logIn(username, password) {},
    signin(username, password) {},
  },
});
