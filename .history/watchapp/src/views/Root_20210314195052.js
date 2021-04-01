import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import { routes } from 'routes';
import Saves from 'views/Saves';
import Home from 'views/Home';
import Videos from 'views/Videos';
import Geeks from 'views/Geeks';

const Root = () => (
  <BrowserRouter>
    <MainTemplate>
      <Switch>
        <Route path={routes.home} component={Home} />
        <Route path={routes.saves} component={Saves} />
        <Route path={routes.videos} component={Videos} />
        <Route path={routes.geeks} component={Geeks} />
      </Switch>
    </MainTemplate>
  </BrowserRouter>
);

export default Root;
