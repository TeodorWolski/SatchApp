import React from 'react';
import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import { routes } from 'routes';
import { Provider } from 'react-redux';
import store from 'redux/store';
import Saves from 'views/Saves';
import Home from 'views/Home';
import Videos from 'views/Videos';
import Geeks from 'views/Geeks';
import LoginPage from 'views/LoginPage';
import RegisterPage from 'views/RegisterPage';
import { AuthProvider } from 'context/AuthContext';

const Root = () => (
  <Provider store={store}>
    <AuthProvider>
      <BrowserRouter>
        <MainTemplate>
          <Switch>
            <Route exact path={routes.load} render={() => <Redirect to={routes.home} />} />
            <Route exact path={routes.login} component={LoginPage} />
            <Route exact path={routes.register} component={RegisterPage} />
            <Route exact path={routes.home} component={Home} />
            <Route exact path={routes.saves} component={Saves} />
            <Route exact path={routes.videos} component={Videos} />
            <Route exact path={routes.geeks} component={Geeks} />
          </Switch>
        </MainTemplate>
      </BrowserRouter>
    </AuthProvider>
  </Provider>
);

export default Root;
