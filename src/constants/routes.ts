export const ROUTES = {
  LOGIN: '/login',
  REGISTER: '/register',
  PRODUCTS: '/',
  PRODUCT_DETAILS: (productId: string | number) => `/product/${productId}`,
};
