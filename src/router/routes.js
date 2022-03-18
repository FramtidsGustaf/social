import LandingPage from '../pages/LandingPage.vue';
import ScoreboardPage from '../pages/ScoreboardPage.vue';
import AuthPage from '../pages/AuthPage.vue';
import StatusPage from '../pages/StatusPage.vue';

export default [
  {
    path: '/',
    component: LandingPage,
  },
  {
    path: '/scoreboard',
    component: ScoreboardPage
  },
  {
    path: '/auth',
    component: AuthPage
  },
  {
    path: '/status',
    component: StatusPage
  }
];
