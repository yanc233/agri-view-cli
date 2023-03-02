/*
 * @Author: Yanc
 * @Date: 2022-03-24 11:02:35
 * @LastEditors: Yanc
 * @LastEditTime: 2022-03-24 13:51:21
 * @FilePath: \samplePointFe\src\hooks\locale.ts
 * @Description:
 */

import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { Message } from '@arco-design/web-vue';

export default function useLocale() {
  const i18 = useI18n();
  const currentLocale = computed(() => {
    return i18.locale.value;
  });
  const changeLocale = (value: string) => {
    i18.locale.value = value;
    localStorage.setItem('arco-locale', value);
    Message.success(i18.t('navbar.action.locale'));
  };
  return {
    currentLocale,
    changeLocale,
  };
}
