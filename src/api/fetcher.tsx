import axios, {AxiosRequestConfig} from 'axios';

const config = {
  BASE_URL: 'http://localhost:8000/',
  TIME_OUT: 3000,
};

const fetcher = axios.create({
  baseURL: config.BASE_URL,
  timeout: config.TIME_OUT,
});

fetcher.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  },
);

// fetcher.defaults.headers.common['Authorization'] =
//   'Bear ' + window.localStorage.getItem('accessToken');

export default fetcher;
