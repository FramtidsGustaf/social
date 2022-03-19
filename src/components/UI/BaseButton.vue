<script setup>

const props = defineProps({
  type: {
    type: String,
    default: 'btn'
  },
  to: {
    type: String
  }
});

const className = {
  btn: 'btn',
  dark: 'btn btn--dark',
  hollow: 'btn btn--hollow',
  gradient: 'btn btn--gradient',
  gradientAnimated: 'btn btn--gradient btn--gradient-animated'
}

</script>

<template>
  <router-link v-if="to" :class="className[type]" :to="to">
    <slot></slot>
  </router-link>
  <button v-else :class="className[type]">
    <slot></slot>
  </button>
</template>