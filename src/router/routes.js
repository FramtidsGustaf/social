import LandingPage from '../pages/LandingPage.vue';
import LeaderboardPage from '../pages/LeaderboardPage.vue';
import PostPage from '../pages/PostPage.vue';
import LoginPage from '../pages/LoginPage.vue';
import NotFound from '../pages/NotFound.vue';
import SigninPage from '../pages/SigninPage.vue';

export default [
  {
    path: '/',
    component: LandingPage,
  },
  {
    path: '/leaderboard',
    component: LeaderboardPage,
  },
  {
    path: '/login',
    component: LoginPage,
  },
  {
    path: '/signin',
    component: SigninPage,
  },
  {
    path: '/post',
    component: PostPage,
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFound,
  },
];
