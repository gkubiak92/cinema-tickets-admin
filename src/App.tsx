import React, { useEffect } from "react";
import "./App.css";
import Menu from "components/Menu";
import AppHeader from "components/AppHeader";
import { useRootStyles, theme } from "App.styles";
import ContentContainer from "components/ContentContainer";
import { ThemeProvider } from "@material-ui/core";
import { fetchMoviesStart } from "redux/movies/actions";
import { fetchHallsStart } from "redux/halls/actions";
import { IAppProps } from "types";
import { connect } from "react-redux";
import Routes from "router/Routes";
import { selectIsAuthenticated } from "redux/auth/selectors";
import { IRootState } from "redux/types";

function App({
  isAuthenticated,
  fetchMoviesStart,
  fetchHallsStart,
}: IAppProps) {
  useEffect(() => {
    fetchMoviesStart();
    fetchHallsStart();
  }, [fetchMoviesStart, fetchHallsStart]);
  const classes = useRootStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <AppHeader />
        {isAuthenticated && <Menu />}
        <ContentContainer>
          <Routes />
        </ContentContainer>
      </div>
    </ThemeProvider>
  );
}

const mapStateToProps = (state: IRootState) => ({
  isAuthenticated: selectIsAuthenticated(state),
});

const mapDispatchToProps = {
  fetchMoviesStart,
  fetchHallsStart,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
