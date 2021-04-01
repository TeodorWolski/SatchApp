import React from 'react';
import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import { routes } from 'routes';
import { Provider } from 'react-redux';
import store from 'store';
import Saves from 'views/Saves';
import Home from 'views/Home';
import Videos from 'views/Videos';
import Geeks from 'views/Geeks';

const Root = () => (
  <Provider>
    <BrowserRouter>
      <MainTemplate>
        <Switch>
          <Route exact path={routes.load} render={() => <Redirect to={routes.home} />} />
          <Route exact path={routes.home} component={Home} />
          <Route exact path={routes.saves} component={Saves} />
          <Route exact path={routes.videos} component={Videos} />
          <Route exact path={routes.geeks} component={Geeks} />
        </Switch>
      </MainTemplate>
    </BrowserRouter>
  </Provider>
);

export default Root;
