import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Menu from "components/Menu";
import MoviesList from "views/movies-list";
import Dashboard from "views/dashboard";
import HallsList from "views/halls-list";

function App() {
  return (
    <div className="App">
      <Menu />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/movies" component={MoviesList} />
        <Route exact path="/halls" component={HallsList} />
      </Switch>
    </div>
  );
}

export default App;
