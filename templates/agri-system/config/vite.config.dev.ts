/*
 * @Author: Mr.Car
 * @Date: 2022-03-16 15:11:09
 */
import { mergeConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import baseConig from './vite.config.base';

export default mergeConfig(
  {
    mode: 'development',
    plugins: [
      eslint({
        cache: false,
        include: ['src/**/*.ts', 'src/**/*.tsx', 'src/**/*.vue'],
        exclude: ['node_modules'],
      }),
    ],
    optimizeDeps: {
      include: ['@vueuse/core'],
    },
  },
  baseConig
);
