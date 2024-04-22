import axios, { AxiosInstance } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
  timeout: 30 * 1000, // 30 sec
});

export default axiosInstance;
