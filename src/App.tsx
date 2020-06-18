import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Menu from "components/Menu";
import MoviesList from "views/movies-list";
import Dashboard from "views/dashboard";
import HallsList from "views/halls-list";
import AppHeader from "components/AppHeader";
import { useStyles } from "App.styles";
import ContentContainer from "components/ContentContainer";
import Toolbar from "@material-ui/core/Toolbar";

function App() {
  const classes = useStyles();
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
        </Switch>
      </ContentContainer>
    </div>
  );
}

export default App;
