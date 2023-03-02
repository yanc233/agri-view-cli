import axios from 'axios';

import useAxiosInterceptors from '@/hooks/useAxiosInterceptors';

if (import.meta.env.VITE_API_BASE_URL) {
  axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;
}

useAxiosInterceptors(axios);
