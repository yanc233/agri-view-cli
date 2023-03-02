import { Message } from '@arco-design/web-vue';
import { AxiosRequestConfig } from 'axios';
import { getToken, clearToken } from '@/utils/auth';
import router from '@/router';

export default function useAxiosInterceptors(axios: any) {
  axios.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token: any = getToken() ?? null;
      if (token) {
        if (!config.headers) config.headers = {};
        config.headers[token.tokenName] = token.tokenValue;
      }
      // removePendding(config);
      // addPendding(config);

      return config;
    },
    (error: any) => {
      // do something
      return Promise.reject(error);
    }
  );

  // add response interceptors
  axios.interceptors.response.use(
    (res: any) => {
      if (res.status === 205) {
        Message.error({
          content: '请先修改默认密码!',
          duration: 1000,
        });
        return res.status;
      }
      return res.data;
    },
    (err: any) => {
      // penddingRequests.delete(generateKey(err.config));
      const { response } = err;
      if (response) {
        switch (response.status) {
          case 400:
            err.message = response.data || '请求错误(400)';
            break;
          case 401:
            // err.message = response.data || '未登陆(401)';
            err.message = 401;
            // token过期处理重登陆
            clearToken(); // 删除已经失效或过期的token
            router.replace({
              path: '/login', // 重定向倒/login
            });
            break;
          case 403:
            err.message = response.data || '拒绝访问(403)';
            break;
          case 404:
            err.message = response.data || '请求出错(404)';
            break;
          case 408:
            err.message = response.data || '请求超时(408)';
            break;
          case 500:
            err.message = response.data || '服务器错误(500)';
            break;
          case 501:
            err.message = response.data || '服务未实现(501)';
            break;
          case 502:
            err.message = response.data || '网络错误(502)';
            break;
          case 503:
            err.message = response.data || '服务不可用(503)';
            break;
          case 504:
            err.message = response.data || '网络超时(504)';
            break;
          case 505:
            err.message = response.data || 'HTTP版本不受支持(505)';
            break;
          default:
            err.message = `连接出错(${response.status})!`;
        }
      }
      if (err.message !== 401) {
        Message.error({
          content: err.message,
          duration: 5 * 1000,
        });
      }

      return Promise.reject(err);
    }
  );
}
