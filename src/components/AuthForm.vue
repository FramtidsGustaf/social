<script setup>
import Input from './UI/BaseInput.vue';
import { ref } from 'vue';

const props = defineProps({
  action: {
    type: String
  }
});

const username = ref('');
const password = ref('');
const isValid = ref(false);
const link = props.action === 'login' ?
  { title: "Don't have an account?", destination: '/signin' } :
  { title: "Already have an account?", destination: '/login' };

const handleSubmit = () => {
  isValid.value = true;
  console.log(username.value, password.value);
}
</script>

<template>
  <div class="auth-form" :class="{ valid: isValid }">
    <h4 class="title">{{ props.action }}</h4>
    <Input v-model="username" name="username"/>
    <Input v-model="password" type="password" name="password"/>
    <div>
      <Button @click="handleSubmit" type="gradientAnimated">{{ props.action }}</Button>
      <Button :to="link.destination">{{ link.title }}</Button>
    </div>
  </div>
</template>