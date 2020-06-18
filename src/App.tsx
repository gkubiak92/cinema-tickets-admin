import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Menu from "components/Menu";
import MoviesList from "views/Movies";
import Dashboard from "views/Dashboard";
import HallsList from "views/Halls";
import AppHeader from "components/AppHeader";
import { useRootStyles } from "App.styles";
import ContentContainer from "components/ContentContainer";
import Toolbar from "@material-ui/core/Toolbar";
import AddMovie from "views/Movies/AddMovie";

function App() {
  const classes = useRootStyles();
  return (
    <div className={classes.root}>
      <AppHeader />
      <Menu />
      <Toolbar />
      <ContentContainer>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/movies" component={MoviesList} />
          <Route exact path="/halls" component={HallsList} />
          <Route exact path="/add-movie" component={AddMovie} />
        </Switch>
      </ContentContainer>
    </div>
  );
}

export default App;
