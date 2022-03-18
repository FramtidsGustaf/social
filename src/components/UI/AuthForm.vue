<script setup>
import Input from './BaseInput.vue';
import { ref } from 'vue';

const props = defineProps({
  action: {
    type: String
  }
});


const username = ref('');
const password = ref('');
const isValid = ref(false);
const title = ref(props.action)

const handleSubmit = () => {
  isValid.value = true;
  console.log(username.value, password.value);
}

</script>

<template>
  <form @submit.prevent="handleSubmit" class="auth-form" :class="{ valid: isValid }">
    <h4 class="title">{{ title }}</h4>
    <Input v-model="username" name="username"></Input>
    <Input v-model="password" type="password" name="password"></Input>
    <div>
      <Button type="gradientAnimated">{{ title }}</Button>
    </div>
  </form>
</template>