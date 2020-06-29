import React, { useEffect } from "react";
import "./App.css";
import Menu from "components/Menu";
import AppHeader from "components/AppHeader";
import { useRootStyles, theme } from "App.styles";
import ContentContainer from "components/ContentContainer";
import Toolbar from "@material-ui/core/Toolbar";
import { ThemeProvider } from "@material-ui/core";
import { fetchMoviesStart } from "redux/movies/actions";
import { fetchHallsStart } from "redux/halls/actions";
import { IAppMappedDispatch } from "types";
import { connect } from "react-redux";
import Routes from "router/Routes";

function App({ fetchMoviesStart, fetchHallsStart }: IAppMappedDispatch) {
  useEffect(() => {
    fetchMoviesStart();
    fetchHallsStart();
  }, [fetchMoviesStart, fetchHallsStart]);
  const classes = useRootStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <AppHeader />
        <Menu />
        <Toolbar />
        <ContentContainer>
          <Routes />
        </ContentContainer>
      </div>
    </ThemeProvider>
  );
}

const mapDispatchToProps = {
  fetchMoviesStart,
  fetchHallsStart,
};

export default connect(null, mapDispatchToProps)(App);
