/*
 * @Author: Mr.Car
 * @Date: 2022-03-22 23:29:50
 */
import axios from 'axios';

export interface LoginData {
  username: string;
  password: string;
}

export interface LoginRes {
  token: string;
  username: string;
}

export function login(data: LoginData) {
  return axios.post(
    `${import.meta.env.VITE_API_SYSTEM_PRECFIX ?? ''}/system/user/login`,
    data
  );
}
export function getImg(codeId: any) {
  return axios.get(
    `${
      import.meta.env.VITE_API_SYSTEM_PRECFIX ?? ''
    }/system/user/get_captcha/${codeId}`
  );
}

export function getResourceByUser() {
  return axios.get(
    `${
      import.meta.env.VITE_API_SYSTEM_PRECFIX ?? ''
    }/system/resource/list_resource_by_username/super`
  );
}

export function logout() {
  return axios.post<LoginRes>(
    `${import.meta.env.VITE_API_SYSTEM_PRECFIX ?? ''}/system/user/logout`
  );
}

export function getUserInfo() {
  return axios.get(
    `${import.meta.env.VITE_API_SYSTEM_PRECFIX ?? ''}/system/user/info`
  );
}
export function eidtPassword(data: any) {
  return axios.post(
    `${
      import.meta.env.VITE_API_SYSTEM_PRECFIX ?? ''
    }/system/system/user/changePwd`,
    data
  );
}

export function editUserInfo(data: any) {
  return axios.post(
    `${
      import.meta.env.VITE_API_SYSTEM_PRECFIX ?? ''
    }/system/system/user/save_user`,
    data
  );
}

export function checkLogin() {
  return axios.get<number, number>(
    `${import.meta.env.VITE_API_SYSTEM_PRECFIX ?? ''}/system/user/check_login`
  );
}
