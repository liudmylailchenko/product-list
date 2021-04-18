import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Login } from './auth/Login';
import { Register } from './auth/Register';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Login} exact />
        <Route path="/register" component={Register} exact />
      </Switch>
    </div>
  );
}

export default App;
