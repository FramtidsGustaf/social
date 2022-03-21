<script setup>
import LeaderboardList from "../components/leaderboard/LeaderboardList.vue";
import LeaderboardListItem from "../components/leaderboard/LeaderboardListItem.vue";

const hejsan = [1, 2, 3, 4, 5, 6];

</script>

<template>
  <div class="leaderboard">
    <div class="leaderboard--wrapper">
      <h2 class="leaderboard--title">Leaderboard</h2>
      <LeaderboardList class="leaderboard--list">
        <LeaderboardListItem v-for="hej in hejsan" :key="hej"></LeaderboardListItem>
      </LeaderboardList>
    </div>
  </div>
</template>