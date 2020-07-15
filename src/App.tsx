import React from "react";
import "./App.css";
import Menu from "components/Menu";
import AppHeader from "components/AppHeader";
import { useRootStyles, theme } from "App.styles";
import ContentContainer from "components/ContentContainer";
import { ThemeProvider } from "@material-ui/core";
import { IAppProps } from "types";
import { connect } from "react-redux";
import Routes from "router/Routes";
import { selectIsAuthenticated } from "redux/auth/selectors";
import { IRootState } from "redux/types";
import GlobalSpinner from "components/GlobalSpinner/GlobalSpinner";
import { selectIsSpinning } from "redux/ui/selectors";
import GlobalAlert from "components/GlobalAlert/GlobalAlert";

function App({ isSpinning, isAuthenticated }: IAppProps) {
  const classes = useRootStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <AppHeader />
        {isAuthenticated && <Menu />}
        {isSpinning && <GlobalSpinner />}
        <GlobalAlert />
        <ContentContainer>
          <Routes />
        </ContentContainer>
      </div>
    </ThemeProvider>
  );
}

const mapStateToProps = (state: IRootState) => ({
  isAuthenticated: selectIsAuthenticated(state),
  isSpinning: selectIsSpinning(state),
});

export default connect(mapStateToProps)(App);
