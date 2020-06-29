import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "views/Dashboard";
import MoviesList from "views/Movies/List";
import EditMovie from "views/Movies/Edit";
import HallsList from "views/Halls/List";
import EditHall from "views/Halls/Edit";
import ScreeningList from "views/Screenings/List";
import EditScreening from "views/Screenings/Edit";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route exact path="/movies" component={MoviesList} />
    <Route exact path="/edit-movie" component={EditMovie} />
    <Route exact path="/edit-movie/:id" component={EditMovie} />
    <Route exact path="/halls" component={HallsList} />
    <Route exact path="/edit-hall" component={EditHall} />
    <Route exact path="/edit-hall/:id" component={EditHall} />
    <Route exact path="/screenings" component={ScreeningList} />
    <Route exact path="/edit-screening" component={EditScreening} />
    <Route exact path="/edit-screening/:id" component={EditScreening} />
  </Switch>
);

export default Routes;
