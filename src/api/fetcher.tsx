import {setToken} from '@/redux/slice/token.slice';
import {store} from '@/redux/store';
import axios, {AxiosRequestConfig} from 'axios';

const config = {
  BASE_URL: 'http://localhost:8000/',
  TIME_OUT: 3000,
};

const fetcher = axios.create({
  withCredentials: true,
  baseURL: config.BASE_URL,
  timeout: config.TIME_OUT,
});

fetcher.interceptors.request.use(
  function (request) {
    const state = store.getState();
    const accessToken = state?.token.accessToken;
    if (accessToken) {
      request.headers.Authorization = `Bearer ${accessToken}`;
    }
    return request;
  },
  function (error) {
    // Xử lý lỗi
    return Promise.reject(error);
  },
);

let isRefreshing = false;
let failedQueue: any = [];

const processQueue = (error: any, token = null) => {
  failedQueue.forEach((prom: any) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });

  failedQueue = [];
};

fetcher.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    const {response, config} = error;
    const originalRequest = config;
    const status = response?.status;

    if (status === 401) {
      if (!isRefreshing) {
        isRefreshing = true;
        return new Promise((resolve, reject) => {
          fetcher
            .post('/api/auth/token')
            .then((res) => {
              const token = {accessToken: res.data.accessToken};
              store.dispatch(setToken(token));
              fetcher.defaults.headers.common[
                'Authorization'
              ] = `Bearer ${token.accessToken}`;
              originalRequest.headers[
                'Authorization'
              ] = `Bearer ${token.accessToken}`;
              processQueue(null, token.accessToken);
              resolve(fetcher(originalRequest));
            })
            .catch((err) => {
              processQueue(err, null);
              store.dispatch({type: 'LOGOUT'});
              // Router.push('/login');
              reject(err);
            })
            .finally(() => {
              isRefreshing = false;
            });
        });
      }

      return new Promise((resolve, reject) => {
        failedQueue.push({resolve, reject});
      })
        .then((token) => {
          originalRequest.headers['Authorization'] = `Bearer ${token}`;
          return fetcher(originalRequest);
        })
        .catch((err) => {
          return Promise.reject(err);
        });
    }

    return Promise.reject(error);
  },
);

export default fetcher;
