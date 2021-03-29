import axios from "../../_snowpack/pkg/axios.js";
import config from "../config/config.js";
const HttpClient = axios.create({
  baseURL: config.isProd ? config.PROD_API_URL : config.DEV_API_URL,
  withCredentials: true,
  timeout: 3e3,
  headers: {"Content-Type": "application/json"}
});
const handleReqFulfilled = (config2) => {
  return {
    ...config2,
    data: JSON.stringify(config2.data),
    params: JSON.stringify(config2.params)
  };
};
const handleResFulfilled = (response) => {
  if (response.config.url === "auth/login" && response.status === 200) {
    HttpClient.defaults.headers.common["Authorization"] = `Bearer ${response.data.token.accessToken}`;
  }
  return response;
};
const handleRejected = (error) => {
  return Promise.reject(error);
};
HttpClient.interceptors.request.use(handleReqFulfilled, handleRejected);
HttpClient.interceptors.response.use(handleResFulfilled, handleRejected);
export default HttpClient;
