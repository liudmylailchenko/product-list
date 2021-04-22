import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { CssBaseline, StylesProvider } from '@material-ui/core';
import App from './App';
import { store } from './store/store';
import { history } from './utils/history';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <StylesProvider injectFirst>
        <CssBaseline />
        <Router history={history}>
          <App />
        </Router>
      </StylesProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
