export const setStorageItem = (key: string, value: string) =>
  window.localStorage.setItem(key, value);

export const getStorageItem = (key: string, def = '') =>
  (window.localStorage && window.localStorage.getItem(key)) || def;

export const clearStorage = () => window.localStorage.clear();
