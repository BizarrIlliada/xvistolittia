import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '@/pages/HomePage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
    },
    {
      path: '/gallery',
      name: 'GalleryPage',
      component: () => import('@/pages/GalleryPage.vue'),
    },
    {
      path: '/about',
      name: 'AboutPage',
      component: () => import('@/pages/AboutPage.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFoundPage',
      component: () => import('@/pages/NotFoundPage.vue'),
    },
  ],
});

export default router;
