import React from 'react';
import { Switch, BrowserRouter, Route, Redirect  } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import { routes } from 'routes';

const Root = () => 
<BrowserRouter>
  <MainTemplate>
    <Switch>
      <Route path={routes.}/>
      <Route />
      <Route />
      <Route />
    </Switch>
  </MainTemplate>
</BrowserRouter>;

export default Root;
