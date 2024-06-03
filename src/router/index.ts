import { createRouter, createWebHistory } from 'vue-router';
import i18n from '@/i18n';

import HomePage from '@/pages/HomePage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
      meta: {
        translationKey: 'home',
      },
    },
    {
      path: '/gallery',
      name: 'GalleryPage',
      component: () => import('@/pages/GalleryPage.vue'),
      meta: {
        translationKey: 'gallery',
      },
    },
    {
      path: '/about',
      name: 'AboutPage',
      component: () => import('@/pages/AboutPage.vue'),
      meta: {
        translationKey: 'aboutUs',
      },
    },
    // {
    //   path: '/rules',
    //   name: 'RulesPage',
    //   component: () => import('@/pages/AboutPage.vue'),
    //   meta: {
    //     translationKey: 'rules',
    //   },
    // },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFoundPage',
      component: () => import('@/pages/NotFoundPage.vue'),
      meta: {
        translationKey: 'notFound',
      },
    },
  ],
});

const { t } = i18n.global;

router.beforeEach((to) => {
  //TODO: tab name is not reactive in the case when language switches
  document.title = t('shared.tabName', { title: t('shared.' + to.meta.translationKey as string) })
});

export default router;
