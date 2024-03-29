import { defineStore } from 'pinia';
import router from '../../router/router';

export const useUserStore = defineStore('userStore', {
  state: () => {
    return {
      isLogedIn: false,
      tier: 0,
      username: '',
      token: localStorage.getItem('token'),
    };
  },
  actions: {
    logIn(username, password) {
      this.authAction(username, password, 'login');
    },
    signin(username, password) {
      this.authAction(username, password, 'signup');
    },
    async authAction(inputedUsername, password, endpoint) {
      try {
        const response = await fetch(`http://localhost:8000/auth/${endpoint}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: inputedUsername,
            password,
          }),
        });
        if (!response.ok) return;

        const data = await response.json();
        const { token, username, tier } = data;

        this.setToLogedIn(token, username, tier);
        router.push('/post');
      } catch (error) {
        console.log(error);
        //TODO some error handling
      }
    },
    //TODO perhaps some refactoring here
    async verifyToken() {
      if (!this.token) return;
      try {
        const response = await fetch(
          'http://localhost:8000/auth/verify-token',
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `${this.token}`,
            },
          }
        );
        if (!response.ok) return;

        const data = await response.json();
        const { token, username, tier } = data;

        this.setToLogedIn(token, username, tier);
        router.push('/post');
      } catch (error) {
        console.log(error);
      }
    },
    logout() {
      this.isLogedIn = false;
      this.tier = 0;
      this.username = '';
      localStorage.removeItem('token');
      router.push('/');
    },
    setToLogedIn(token, username, tier) {
      this.isLogedIn = true;
      this.username = username;
      this.tier = tier;
      localStorage.setItem('token', token);
    },
  },
});
