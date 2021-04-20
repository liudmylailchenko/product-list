import { getStorageItem } from './storage';

export const isAuthorized = () => {
  return !!getStorageItem('access_token');
};
