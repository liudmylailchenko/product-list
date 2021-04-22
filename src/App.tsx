import { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { LoginPage } from './auth/LoginPage';
import { RegisterPage } from './auth/RegisterPage';
import { ProductsPage } from './products/ProductsPage';
import { ProductDetailsPage } from './productDetails/ProductDetailsPage';
import { ROUTES } from './constants/routes';
import { useAppDispatch, useAppSelector } from './utils/hooks';
import { getProducts } from './store/productsSlice';

function App() {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products);

  // Get a list of products so that it is available on any page
  useEffect(() => {
    if (!products.list.length) {
      dispatch(getProducts());
    }
  }, [dispatch, products.list.length]);

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
