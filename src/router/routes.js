import LandingPage from '../pages/LandingPage.vue';
import ScoreboardPage from '../pages/ScoreboardPage.vue';
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
    path: '/scoreboard',
    component: ScoreboardPage,
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
