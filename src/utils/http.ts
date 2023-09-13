import { AxiosRequestConfig, AxiosResponse } from "axios";
import service from "./request";

export default {
  get(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    return service.get(url, config);
  },
  post(url: string, data?: object, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    return service.post(url, data, config);
  },
  patch<T>(
    url: string,
    data?: object,
    config?: AxiosRequestConfig
  ): Promise<T> {
    return service.patch(url, data, config);
  },
  delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return service.delete(url, config);
  },
}