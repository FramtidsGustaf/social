<script setup>

const props = defineProps({
  post: {
    type: Object,
  }
});

</script>

<template>
  <li class="leaderboard--listitem">
    <div class="leaderboard--listitem-flex">
      <div class="leaderboard--listitem-main">
        <h3 class="leaderboard--listitem-author">{{ post.author }}</h3>
        <p class="leaderboard--listitem-post">{{ post.post }}</p>
      </div>
      <div class="leaderboard--listitem-tier">{{ post.tier }}</div>
    </div>
  </li>
</template>