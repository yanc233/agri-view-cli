/*
 * @Author: Yanc
 * @Date: 2022-09-05 17:53:57
 * @LastEditTime: 2023-02-27 19:29:01
 */
import type { Router } from 'vue-router';
import NProgress from 'nprogress';
import { checkLogin } from '@/api/user';
import { WHITE_LIST } from '../constants';

export default function createLoadProgress(router: Router) {
  router.beforeEach(async (to, from, next) => {
    NProgress.start();

    if (!WHITE_LIST.find((item) => item === to.name)) {
      const status = await checkLogin();
      if (status === 205) {
        // 未修改初始密码 跳转至个人中心
        router.push({
          name: 'setting',
        });
      }
    }
    next();
  });

  router.afterEach(() => {
    NProgress.done();
  });
}
