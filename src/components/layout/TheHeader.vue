<script setup>

</script>

<template>
  <div class="header">
    <div class="content">
      <router-link to="/">
        <h1 class="title">Social</h1>
      </router-link>
      <div class="buttons">
        <Button type="dark" to="/login">Login</Button>
        <Button type="dark" to="/status">Status</Button>
        <Button type="gradientAnimated" to="/scoreboard">Scoreboard</Button>
      </div>
    </div>
  </div>
</template>