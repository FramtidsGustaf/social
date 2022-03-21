import LandingPage from '../pages/LandingPage.vue';
import LeaderboardPage from '../pages/LeaderboardPage.vue';
import PostPage from '../pages/PostPage.vue';
import LoginPage from '../pages/LoginPage.vue';
import NotFound from '../pages/NotFound.vue';
import SigninPage from '../pages/SigninPage.vue';
import { useUserStore } from '../store/user_store/store';

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
    name: 'Login',
    component: LoginPage,
  },
  {
    path: '/signin',
    component: SigninPage,
  },
  {
    path: '/post',
    component: PostPage,
    beforeEnter: (_to, _from, next) => {
      const store = useUserStore();
      if (store.isLogedIn) return true;
      next({ name: 'Login' });
    },
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFound,
  },
];
