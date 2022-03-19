<script setup>
import { ref } from 'vue';

const props = defineProps({
  type: {
    type: String,
    default: 'text'
  },
  modelValue: {
    type: String
  },
  name: {
    type: String,
    required: true
  }
});

const input = ref('')
const isTyping = ref(false);

const emit = defineEmits(['update:modelValue']);

const toggleLable = () => {
  if (input.value) isTyping.value = true;
  else isTyping.value = false;
}

const handleInput = () => {
  toggleLable();
  emit('update:modelValue', input.value);
}

</script>

<template>
  <div class="input-group">
    <label :for="name" class="label" :class="{ typing: isTyping }">{{ name }}</label>
    <input
      @input="handleInput"
      v-model="input"
      :type="type"
      :id="name"
      class="input"
      :placeholder="name"
      autocomplete="off"
    />
  </div>
</template>