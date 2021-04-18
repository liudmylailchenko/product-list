import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import {
  createMuiTheme,
  CssBaseline,
  StylesProvider,
  ThemeProvider,
} from '@material-ui/core';
import { indigo, pink } from '@material-ui/core/colors';
import App from './App';
import { store } from './store/store';
import { history } from './utils/history';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: indigo[200],
    },
    secondary: {
      main: pink[200],
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <StylesProvider injectFirst>
          <CssBaseline />
          <Router history={history}>
            <App />
          </Router>
        </StylesProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
