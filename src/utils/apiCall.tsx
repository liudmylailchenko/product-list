import axios from 'axios';
import { getStorageItem } from './storage';

const API_URL = process.env.REACT_APP_API_URL;

export const apiCall = axios.create({
  baseURL: API_URL,
});

apiCall.interceptors.request.use((config) => {
  const token = getStorageItem('access_token');
  return token
    ? {
        ...config,
        headers: {
          Authorization: `Token ${token}`,
          ...config.headers,
        },
      }
    : config;
});
