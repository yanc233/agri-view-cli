/*
 * @Author: Yanc
 * @Date: 2022-09-05 17:53:57
 * @LastEditTime: 2022-12-02 16:53:56
 */
import type { Router } from 'vue-router';

import createLoadProgress from './loadProgress';
import setupPermissionGuard from './permission';

export default function createRouteGuard(router: Router) {
  createLoadProgress(router);
  setupPermissionGuard(router);
}
