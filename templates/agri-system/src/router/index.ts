/*
 * @Author: Yanc
 * @Date: 2022-03-24 11:02:35
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-03-02 17:23:40
 * @FilePath: \samplePointFe\src\router\index.ts
 * @Description:
 */
import { createRouter, createWebHistory } from 'vue-router';
import DEFAULT_LAYOUT from '@/layout/default-layout.vue';
import appRoutes from './routes';
import createRouteGuard from './guard';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: 'login',
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/system/login/index.vue'),
    },
    {
      name: 'root',
      path: '/',
      component: DEFAULT_LAYOUT,
      children: [...appRoutes],
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: () =>
        import('agri-system2/src/views/system/not-found/index.vue'),
    },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});

createRouteGuard(router);

export default router;
