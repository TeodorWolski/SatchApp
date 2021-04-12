import React from 'react';
import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import { routes } from 'routes';
import PrivateRoute from 'routes/PrivateRoute';
import { Provider } from 'react-redux';
import store from 'redux/store';
import Saves from 'views/Saves';
import Home from 'views/Home';
import Videos from 'views/Videos';
import Geeks from 'views/Geeks';
import LoginPage from 'views/LoginPage';
import RegisterPage from 'views/RegisterPage';
import Settings from 'views/Settings';
import { AuthProvider } from 'context/AuthContext';

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <AuthProvider>
        <MainTemplate>
          <Switch>
            <PrivateRoute exact path={routes.load} />
            <Route path={routes.login} component={LoginPage} />
            <Route path={routes.register} component={RegisterPage} />
            <PrivateRoute exact path={routes.home} component={Home} />
            <PrivateRoute exact path={routes.saves} component={Saves} />
            <PrivateRoute exact path={routes.videos} component={Videos} />
            <PrivateRoute exact path={routes.geeks} component={Geeks} />
            <PrivateRoute exact path={routes.settings} component={Settings} />
          </Switch>
        </MainTemplate>
      </AuthProvider>
    </BrowserRouter>
  </Provider>
);

export default Root;
