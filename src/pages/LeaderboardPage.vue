<script setup>
import LeaderboardList from "../components/leaderboard/LeaderboardList.vue";
import LeaderboardListItem from "../components/leaderboard/LeaderboardListItem.vue";

class Post {
  author;
  post;
  tier;
  id = Math.random();

  constructor(author, post, tier) {
    this.author = author;
    this.post = post;
    this.tier = tier;
  }
}

const posts = [
  new Post('Reginald Rivera', 'Apple pie lollipop powder sesame snaps gingerbread macaroon muffin. Wafer wafer tiramisu cake cupcake. Tart wafer croissant wafer jelly beans.', 100),
  new Post('Beth Jordan', 'Apple pie lollipop powder sesame snaps gingerbread macaroon muffin. Wafer wafer tiramisu cake cupcake. Tart wafer croissant wafer jelly beans.', 80),
  new Post('Lena Tores', 'Apple pie lollipop powder sesame snaps gingerbread macaroon muffin. Wafer wafer tiramisu cake cupcake. Tart wafer croissant wafer jelly beans.', 74),
  new Post('Sara Reynolds', 'Apple pie lollipop powder sesame snaps gingerbread macaroon muffin. Wafer wafer tiramisu cake cupcake. Tart wafer croissant wafer jelly beans.', 73),
  new Post('Brad Cook', 'Apple pie lollipop powder sesame snaps gingerbread macaroon muffin. Wafer wafer tiramisu cake cupcake. Tart wafer croissant wafer jelly beans.', 20),
  new Post('Pearl Prescott', 'Apple pie lollipop powder sesame snaps gingerbread macaroon muffin. Wafer wafer tiramisu cake cupcake. Tart wafer croissant wafer jelly beans.', 19),

];

</script>

<template>
  <div class="leaderboard">
    <div class="leaderboard--wrapper">
      <h2 class="leaderboard--title">Leaderboard</h2>
      <LeaderboardList class="leaderboard--list">
        <LeaderboardListItem v-for="post in posts" :key="post.id" :post="post" />
      </LeaderboardList>
    </div>
  </div>
</template>