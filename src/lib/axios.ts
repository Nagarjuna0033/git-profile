import Axios from 'axios';
import type { InternalAxiosRequestConfig } from 'axios';
import { env } from '@/config/env';
import { paths } from '@/config/paths';
import { toast } from 'sonner';

function authRequestInterceptor(config: InternalAxiosRequestConfig) {
  if (config.headers) {
    config.headers.Accept = 'application/json';
  }
  config.withCredentials = true;
  return config;
}

export const api = Axios.create({
  baseURL: env.API_URL,
});

api.interceptors.request.use(authRequestInterceptor);
api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const message = error.response?.data?.message || error.message;

    toast.error('Error', {
      description: message,
    });

    if (error.response?.status === 401) {
      window.location.href = paths.home.getHref();
    }

    return Promise.reject(error);
  }
);
