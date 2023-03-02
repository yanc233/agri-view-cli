/*
 * @Author: Yanc
 * @Date: 2022-11-23 18:12:57
 * @LastEditTime: 2023-03-02 17:01:45
 */
import { setRouteEmitter } from '@/utils/route-listener';
import { Router, RouteLocationNormalized } from 'vue-router';
import { useUserStore } from '@/store';
import { WHITE_LIST } from '../constants';

export default function setupPermissionGuard(router: Router) {
  router.beforeEach((to: RouteLocationNormalized) => {
    if (!WHITE_LIST.includes(to.name as string)) {
      const userStore = useUserStore();

      let exist = true; // 通过这里可以控制是否开启路由权限验证
      const menuList = userStore.allResource.children;

      while (menuList?.length && !exist) {
        const element = menuList.shift();
        if (element?.url === to.name) exist = true;

        if (element?.children) {
          menuList.push(...element.children);
        }
      }

      if (exist) {
        setRouteEmitter(to);
      } else {
        router.replace({ name: 'notFound' });
      }
    }
  });
}
