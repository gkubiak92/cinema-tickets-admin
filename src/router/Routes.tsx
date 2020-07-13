import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "views/Dashboard";
import MoviesList from "views/Movies/List";
import EditMovie from "views/Movies/Edit";
import HallsList from "views/Halls/List";
import EditHall from "views/Halls/Edit";
import ScreeningList from "views/Screenings/List";
import EditScreening from "views/Screenings/Edit";
import LoginPage from "views/Login/LoginPage";
import AuthRequiredRoute from "./AuthRequiredRoute";

const Routes = () => (
  <Switch>
    <Route exact path="/login" component={LoginPage} />
    <AuthRequiredRoute exact path="/" component={Dashboard} />
    <AuthRequiredRoute exact path="/movies" component={MoviesList} />
    <AuthRequiredRoute exact path="/edit-movie" component={EditMovie} />
    <AuthRequiredRoute exact path="/edit-movie/:id" component={EditMovie} />
    <AuthRequiredRoute exact path="/halls" component={HallsList} />
    <AuthRequiredRoute exact path="/edit-hall" component={EditHall} />
    <AuthRequiredRoute exact path="/edit-hall/:id" component={EditHall} />
    <AuthRequiredRoute exact path="/screenings" component={ScreeningList} />
    <AuthRequiredRoute exact path="/edit-screening" component={EditScreening} />
    <AuthRequiredRoute
      exact
      path="/edit-screening/:id"
      component={EditScreening}
    />
  </Switch>
);

export default Routes;
