import React from "react";
import LoginForm from "./LoginForm/LoginForm";
import { Grid, Paper, Typography } from "@material-ui/core";
import { connect } from "react-redux";
import { Props } from "./types";
import { Redirect } from "react-router-dom";
import { selectIsAuthenticated } from "redux/auth/selectors";
import { IRootState } from "redux/types";
import { useStyles } from "./styles";

const LoginPage = ({ isAuthenticated }: Props) => {
  const styles = useStyles();

  return isAuthenticated ? (
    <Redirect to="/" />
  ) : (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: "calc(100vh - 104px)" }}
    >
      <Paper className={styles.loginForm}>
        <Grid container justify="center">
          <Grid item xs={12}>
            <Typography variant="h6" align="center">
              CINEMA TICKETS ADMIN
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <LoginForm />
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

const mapStateToProps = (state: IRootState) => ({
  isAuthenticated: selectIsAuthenticated(state),
});

export default connect(mapStateToProps)(LoginPage);
