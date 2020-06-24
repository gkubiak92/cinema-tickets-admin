import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Menu from "components/Menu";
import MoviesList from "views/Movies/List";
import Dashboard from "views/Dashboard";
import HallsList from "views/Halls/List";
import AppHeader from "components/AppHeader";
import { useRootStyles, theme } from "App.styles";
import ContentContainer from "components/ContentContainer";
import Toolbar from "@material-ui/core/Toolbar";
import EditMovie from "views/Movies/Edit/EditMovie";
import { ThemeProvider } from "@material-ui/core";
import ScreeningList from "views/Screenings/List";
import EditScreening from "views/Screenings/Edit";

function App() {
  const classes = useRootStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <AppHeader />
        <Menu />
        <Toolbar />
        <ContentContainer>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/movies" component={MoviesList} />
            <Route exact path="/edit-movie" component={EditMovie} />
            <Route exact path="/edit-movie/:id" component={EditMovie} />
            <Route exact path="/halls" component={HallsList} />
            <Route exact path="/screenings" component={ScreeningList} />
            <Route exact path="/edit-screening" component={EditScreening} />
            <Route exact path="/edit-screening/:id" component={EditScreening} />
          </Switch>
        </ContentContainer>
      </div>
    </ThemeProvider>
  );
}

export default App;
