import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HOME_PATH, LIST_PATH, CHART_PATH, EPISODES_PATH } from './paths';
import Home from 'pages/Home';
// import List from 'pages/List';
import List from 'pages/ListHook';
import Chart from 'pages/Chart';
import Episodes from 'pages/Episodes';

const Router = () => (
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
      <Route exact path={EPISODES_PATH}>
        <Episodes />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Router;
