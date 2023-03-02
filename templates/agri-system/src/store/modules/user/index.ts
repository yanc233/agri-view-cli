/*
 * @Author: Mr.Car
 * @Date: 2022-03-16 15:11:09
 */
import { defineStore } from 'pinia';
import { login as userLogin, LoginData, getResourceByUser } from '@/api/user';
import { setToken, clearToken } from '@/utils/auth';
import { removeRouteListener } from '@/utils/route-listener';
import { Message } from '@arco-design/web-vue';

const useUserStore = defineStore('userStore', {
  state: (): any => ({
    name: undefined,
    avatar: undefined,
    role: '',
    allResource: {},
  }),

  getters: {
    userInfo(state) {
      return { ...state };
    },
    getResource(): any {
      if (this.allResource.length < 1) {
        this.allResource = JSON.parse(
          localStorage.getItem('menueTree') as string
        );
      }
      return this.allResource;
    },
  },

  actions: {
    // Set user's information
    setInfo(partial: any) {
      this.$patch(partial);
    },

    resetInfo() {
      this.$reset();
    },

    // 登录
    async login(loginForm: LoginData) {
      try {
        const res: any = await userLogin(loginForm);
        localStorage.setItem('userInfo', JSON.stringify(res));
        setToken(res.tokenName, res.tokenValue);
        this.allResource = await getResourceByUser();
        if (this.allResource.children.length === 0) {
          Message.info('用户资源权限为空,请联系管理员!');
        }
        localStorage.setItem('menueTree', JSON.stringify(this.allResource));
      } catch (err) {
        clearToken();
        throw err;
      }
    },

    // 登出
    async logout() {
      this.resetInfo();
      clearToken();
      removeRouteListener();
    },
  },

  persist: true,
});

export default useUserStore;
