import axios from "axios";
import { localStorageKeys } from "../app/config/localStorageKeys";
import { sleep } from "../app/utils/sleep";

const baseURL = import.meta.env.DEV ? 'http://localhost:3000' : import.meta.env.VITE_API_URL

export const httpClientService = axios.create({ baseURL })

httpClientService.interceptors.request.use(config => {
  const accessToken = localStorage.getItem(localStorageKeys.ACCESS_TOKEN);

  if(accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`
  }

  return config;
})

httpClientService.interceptors.response.use(async data => {
  import.meta.env.DEV && await sleep(1200);

  return data;
})
