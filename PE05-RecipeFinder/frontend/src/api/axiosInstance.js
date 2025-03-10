import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3030/api', // Update with your backend URL
});

export default axiosInstance;
