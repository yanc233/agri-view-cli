/*
 * @Date: 2022-03-24 11:02:35
 * @LastEditTime: 2022-04-14 16:09:36
 */
import { DirectiveBinding } from 'vue';

function checkPermission(el: HTMLElement, binding: DirectiveBinding) {
  const { value } = binding; // 自定义指令绑定的值
  const permissionValues: Array<any> =
    JSON.parse(localStorage.getItem('permissions') as string) ?? []; // 缓存中的所有权限构成的数组
  let hasPermission = true;

  if (Array.isArray(value)) {
    // 在绑定值是数组的情况下,只要有一个满足权限就表示有权限
    hasPermission = value.some((item: any) => {
      return permissionValues.includes(item);
    });
  } else {
    hasPermission = permissionValues.includes(value);
  }
  // 没有权限就移除元素
  if (!hasPermission && el.parentNode) {
    el.parentNode.removeChild(el);
  }
}

export default {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    checkPermission(el, binding);
  },
  updated(el: HTMLElement, binding: DirectiveBinding) {
    checkPermission(el, binding);
  },
};
