<script setup>
import { useUserStore } from '../../store/user_store/store';

const store = useUserStore();

const handleLogout = () => {
  store.logout();
}

</script>

<template>
  <div class="header">
    <div class="header--content">
      <router-link to="/">
        <h1 class="header--content-title">Social</h1>
      </router-link>
      <div>
        <Button v-if="!store.isLogedIn" type="dark" to="/login">Login</Button>
        <Button v-if="store.isLogedIn" type="dark" to="/post">Post</Button>
        <Button type="gradientAnimated" to="/leaderboard">Leaderboard</Button>
        <Button v-if="store.isLogedIn" @click="handleLogout" type="hollow">Logout</Button>
      </div>
    </div>
    <div class="header--userinfo">
      <div class="header--userinfo-username">{{ store.username }}</div>
      <div v-if="store.isLogedIn" class="header--userinfo-tier">Your Tier: {{ store.tier }}</div>
    </div>
  </div>
</template>