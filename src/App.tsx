import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { LoginPage } from './auth/LoginPage';
import { RegisterPage } from './auth/RegisterPage';
import { Header } from './components/Header';
import { ProductsPage } from './products/ProductsPage';
import { ProductDetailsPage } from './products/ProductDetailsPage';
import { ROUTES } from './constants/routes';
import { useAppDispatch } from './utils/hooks';
import { getProducts } from './store/productsSlice';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProducts());
  });

  return (
    <div className="App">
      <Header />
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
