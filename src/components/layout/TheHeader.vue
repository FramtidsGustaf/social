<script setup>
import { useUserStore } from '../../store/user_store/store';

const store = useUserStore();

</script>

<template>
  <div class="header">
    <div class="header--content">
      <router-link to="/">
        <h1 class="header--content-title">Social</h1>
      </router-link>
      <div>
        <Button type="dark" to="/login">Login</Button>
        <Button v-if="store.isLogedIn" type="dark" to="/post">Post</Button>
        <Button type="gradientAnimated" to="/leaderboard">Leaderboard</Button>
      </div>
      <div v-if="store.isLogedIn" class="header--content-tier">Your Tier: {{ store.tier }}</div>
    </div>
  </div>
</template>