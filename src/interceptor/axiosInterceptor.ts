import axios from "axios";
import { BASE_API_URL } from "../environment/environment";

const axiosInstance = axios.create({
  baseURL: BASE_API_URL,
});

axiosInstance.interceptors.request.use((config) => {
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error);
    return error;
  }
);

export default axiosInstance;
