/*
 * @Author: Mr.Car
 * @Date: 2022-03-16 15:11:09
 */
import { App } from 'vue';
import AgriIcon from './agri-icon/index.vue';
import Breadcrumb from './breadcrumb/index.vue';

export default {
  install(Vue: App) {
    Vue.component('Breadcrumb', Breadcrumb);
    Vue.component('ArgiIcon', AgriIcon);
  },
};
