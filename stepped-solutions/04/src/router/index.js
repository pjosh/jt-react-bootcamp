import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HOME_PATH, LIST_PATH, CHART_PATH, MAP_PATH } from './paths';
import Home from 'pages/Home';
import List from 'pages/List';
import Chart from 'pages/Chart';
import Map from 'pages/Map';

const Router = (
  <BrowserRouter>
    <Switch>
      <Route exact path={HOME_PATH}>
        <Home />
      </Route>
      <Route exact path={LIST_PATH}>
        <List />
      </Route>
      <Route exact path={CHART_PATH}>
        <Chart />
      </Route>
      <Route exact path={MAP_PATH}>
        <Map />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Router;
