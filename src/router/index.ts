import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        title: '这是一个彩蛋',
      },
      component: HomeView,
    },
    {
      path: '/music',
      name: 'music',
      meta: {
        title: '音乐搜索',
      },
      component: () => import('../views/MusicView.vue'),
    },
  ],
});

router.beforeEach((to, _, next) => {
  if(to.meta.title) document.title = to.meta.title as string;
  next();
});

export default router;
