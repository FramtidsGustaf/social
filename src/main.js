//Vue
import { createApp } from 'vue';
import App from './App.vue';
//Router
import router from './router/router';
//Global Components
import BaseButton from './components/UI/BaseButton.vue';

const app = createApp(App);

app.component('Button', BaseButton);

app.use(router);

app.mount('#app');
