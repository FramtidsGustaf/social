<script setup>
import TheHeader from './components/layout/TheHeader.vue';
import { useUserStore } from './store/user_store/store';

const store = useUserStore();
store.verifyToken();
</script>

<template>
  <TheHeader />
  <router-view></router-view>
</template>

<style lang="scss">
@import "style/main.scss";
</style>
