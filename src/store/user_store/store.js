import { defineStore } from 'pinia';
import router from '../../router/router';

export const useUserStore = defineStore('userStore', {
  state: () => {
    return {
      isLogedIn: false,
      tier: 0,
      token: null,
    };
  },
  actions: {
    logIn(username, password) {
      this.authAction(username, password, 'login');
    },
    signin(username, password) {
      this.authAction(username, password, 'signin');
    },
    async authAction(username, password, endpoint) {
      try {
        const response = await fetch(`http://localhost:8000/auth/${endpoint}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username,
            password,
          }),
        });
        const data = await response.json();
        if (!response.ok) return;
        this.token = data.token;
        this.isLogedIn = true;
        router.push('/post');
        //TODO store token in localstorage
      } catch (error) {
        console.log(error);
        //TODO some error handling
      }

      //TODO Set tier when backend supports tier
    },
  },
});
