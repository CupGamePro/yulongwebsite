import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { Message } from "@arco-design/web-react";

const service = axios.create({
  timeout: 5000
});

service.interceptors.request.use((config: AxiosRequestConfig) => {
  return config;
}, (error: AxiosError) => {
  console.log(error);
  return Promise.reject(error);
})

service.interceptors.response.use((response: AxiosResponse) => response.data, (error: AxiosError) => {
  console.log('err' + error);
  // 处理错误
  let message = '';
  const status = error.response?.status;
  switch (status) {
    case 401:
      message = error.response?.data?.message || 'token失效，请重新登录';
      break;
    case 404:
      message = error.response?.data?.message || '请求地址错误';
      break;
    case 500:
      message = error.response?.data?.message || '服务未发现';
      break;
    default:
      message = error.response?.data?.message || '网络连接失败';
  }
  Message.error(message);
  return Promise.reject(error);
})

export default service;