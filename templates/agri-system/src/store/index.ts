/*
 * @Author: Yanc
 * @Date: 2022-08-22 13:33:06
 * @LastEditTime: 2023-02-27 19:19:09
 */
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import useAppStore from './modules/app';
import useUserStore from './modules/user';

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

export { useAppStore, useUserStore };
export default pinia;
