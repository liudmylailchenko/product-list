import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { LoginPage } from './auth/LoginPage';
import { RegisterPage } from './auth/RegisterPage';
import { ProductsPage } from './products/ProductsPage';
import { ProductDetailsPage } from './productDetails/ProductDetailsPage';
import { ROUTES } from './constants/routes';
import { useAppDispatch } from './utils/hooks';
import { getProducts } from './store/productsSlice';
import { getStorageItem } from './utils/storage';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProducts());
  });

  return (
    <div className="App">
      <Switch>
        <Route path={ROUTES.LOGIN} component={LoginPage} exact />
        <Route path={ROUTES.REGISTER} component={RegisterPage} exact />
        <Route path={ROUTES.PRODUCTS} component={ProductsPage} exact />
        <Route
          path={ROUTES.PRODUCT_DETAILS(':productId')}
          component={ProductDetailsPage}
          exact
        />
      </Switch>
    </div>
  );
}

export default App;
