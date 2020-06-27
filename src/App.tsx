import React, { useEffect } from "react";
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
import EditHall from "views/Halls/Edit";
import { fetchMoviesStart } from 'redux/movies/actions'
import { fetchHallsStart } from 'redux/halls/actions'
import { IAppMappedDispatch } from "types";
import { connect } from "react-redux";

function App({ fetchMoviesStart, fetchHallsStart }: & IAppMappedDispatch) {
  useEffect(() => {
    fetchMoviesStart();
    fetchHallsStart();
  }, [fetchMoviesStart, fetchHallsStart])
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
            <Route exact path="/edit-hall" component={EditHall} />
            <Route exact path="/edit-hall/:id" component={EditHall} />
            <Route exact path="/screenings" component={ScreeningList} />
            <Route exact path="/edit-screening" component={EditScreening} />
            <Route exact path="/edit-screening/:id" component={EditScreening} />
          </Switch>
        </ContentContainer>
      </div>
    </ThemeProvider>
  );
}

const mapDispatchToProps = {
  fetchMoviesStart,
  fetchHallsStart
}

export default connect(null, mapDispatchToProps)(App);
