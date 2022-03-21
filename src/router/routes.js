import LandingPage from '../pages/LandingPage.vue';
import LeaderboardPage from '../pages/LeaderboardPage.vue';
import StatusPage from '../pages/StatusPage.vue';
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
    path: '/status',
    component: StatusPage,
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFound,
  },
];
