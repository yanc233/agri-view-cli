/*
 * @Author: Yanc
 * @Date: 2022-03-24 11:02:35
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-03-02 17:23:13
 * @FilePath: \samplePointFe\src\router\routes\index.ts
 * @Description:
 */
import type { RouteRecordRaw } from 'vue-router';

const system: any = import.meta.glob('./system/*.ts', { eager: true });

const modules: any = import.meta.glob('./modules/*.ts', { eager: true });

const appRoutes: RouteRecordRaw[] = [];

Object.keys(Object.assign(system, modules)).forEach((key) => {
  const defaultModule = system[key].default;
  if (!defaultModule) return;
  if (defaultModule.name === 'login') return;
  const moduleList = Array.isArray(defaultModule)
    ? [...defaultModule]
    : [defaultModule];
  appRoutes.push(...moduleList);
});

export default appRoutes;
