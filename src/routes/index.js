import React from "react";
import { Route, Switch } from "react-router-dom";


import Auth from "../components/Auth";
import ConfirmEmail from "../components/Auth/ConfirmEmail";
import Dashboard from "../components/DashBoard";

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <Auth />
    </Route>
    <Route path="/confirmEmail">
      <ConfirmEmail />
    </Route>
    <Route path="/dashboard">
      <Dashboard />
    </Route>
  </Switch>
);

export default Routes;
