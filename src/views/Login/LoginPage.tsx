import React from "react";
import LoginForm from "./LoginForm/LoginForm";
import { Grid } from "@material-ui/core";
import { connect } from "react-redux";
import { Props } from "./types";
import { Redirect } from "react-router-dom";
import { selectIsAuthenticated } from "redux/auth/selectors";
import { IRootState } from "redux/types";

const LoginPage = ({ isAuthenticated }: Props) => {
  return isAuthenticated ? (
    <Redirect to="/" />
  ) : (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={3}>
        <LoginForm />
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state: IRootState) => ({
  isAuthenticated: selectIsAuthenticated(state),
});

export default connect(mapStateToProps)(LoginPage);
