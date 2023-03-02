/*
 * @Author: Yanc
 * @Date: 2022-08-22 13:33:06
 * @LastEditTime: 2023-03-02 17:40:49
 */
/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string;
  readonly VITE_FILE_BASE_URL: string;
  readonly VITE_LAYER_TR_URL: string;
  readonly VITE_LAYER_TR_URL: string;
}

declare module 'agri-cpns';
declare module '@magic-words/canvas2image';

declare module 'ol-ext/filter/Crop';
declare module 'ol-ext/filter/Mask';
