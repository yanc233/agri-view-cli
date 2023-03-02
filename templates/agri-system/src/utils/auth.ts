const isLogin = () => {
  return !!localStorage.getItem(localStorage.getItem('_taken') as string);
};

const getToken = () => {
  return {
    tokenName: localStorage.getItem('_taken'),

    tokenValue: localStorage.getItem(localStorage.getItem('_taken') as string),
  };
};

const setToken = (tokenName: string, tokenValue: string) => {
  localStorage.setItem(tokenName, tokenValue);
  localStorage.setItem('_taken', tokenName);
};

const clearToken = () => {
  localStorage.removeItem(localStorage.getItem('_taken') as string);
};

export { isLogin, getToken, setToken, clearToken };
