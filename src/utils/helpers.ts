import moment from 'moment';
import { getStorageItem } from './storage';

export const isAuthorized = () => {
  return !!getStorageItem('accessToken');
};

export const formatDates = (date: string) => {
  return moment(date).format('MMMM Do YYYY, h:mm:ss a');
};
