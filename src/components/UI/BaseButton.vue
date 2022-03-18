<script setup>

</script>

<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<style lang="scss">
  .btn {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>