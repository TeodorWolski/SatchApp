import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import { routes } from 'routes';
import Saves from 'views/Saves';
import Home from 'views/Home';
import Videos from 'views/Videos';
import Forgeeks from 'views/Forgeeks';

const Root = () => (
  <BrowserRouter>
    <MainTemplate>
      <Switch>
        <Route path={routes.home} />
        <Route path={routes.saves} />
        <Route path={routes.videos} />
        <Route path={routes.geeks} />
      </Switch>
    </MainTemplate>
  </BrowserRouter>
);

export default Root;
