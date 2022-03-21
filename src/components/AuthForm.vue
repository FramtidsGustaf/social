<script setup>
import Input from './UI/BaseInput.vue';
import { ref } from 'vue';
import { useUserStore } from '../store/user_store/store';

const props = defineProps({
  action: {
    type: String
  }
});

const store = useUserStore();

const username = ref('');
const password = ref('');
const isValid = ref(false);
const link = props.action === 'login' ?
  { title: "Don't have an account?", destination: '/signin' } :
  { title: "Already have an account?", destination: '/login' };

const handleSubmit = () => {
  if (props.action === 'login') store.logIn(username.value, password.value);
  if (props.action === 'signin') store.signin(username.value, password.value);
}
</script>

<template>
  <div class="auth-form">
    <form @submit.prevent="handleSubmit" :class="{ valid: isValid }">
      <h4 class="title">{{ props.action }}</h4>
      <Input v-model="username" name="username" />
      <Input v-model="password" type="password" name="password" />
      <div>
        <Button class="auth-form--submit-button" type="gradientAnimated">{{ props.action }}</Button>
        <router-link :to="link.destination" class="auth-form--link">{{ link.title }}</router-link>
      </div>
    </form>
  </div>
</template>