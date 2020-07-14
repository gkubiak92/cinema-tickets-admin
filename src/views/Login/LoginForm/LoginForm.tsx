import React from "react";
import { Form } from "react-final-form";
import { ILoginData } from "redux/auth/types";
import { loginStartAction } from "redux/auth/actions";
import { TextField } from "mui-rff";
import { Button, Grid } from "@material-ui/core";
import { connect } from "react-redux";
import { IMappedDispatch } from "./types";

const initialValues: ILoginData = {
  email: "",
  password: "",
};

const LoginForm = ({ loginStartAction }: IMappedDispatch) => {
  const onSubmit = (values: ILoginData) => {
    loginStartAction(values);
  };
  return (
    <Form
      onSubmit={onSubmit}
      initialValues={initialValues}
      render={({ handleSubmit, submitting, values }) => (
        <form onSubmit={handleSubmit}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="stretch"
            spacing={4}
          >
            <Grid item xs={12}>
              <TextField name="email" placeholder="email" />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="password"
                placeholder="password"
                name="password"
              />
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary" type="submit">
                Login
              </Button>
            </Grid>
          </Grid>
        </form>
      )}
    />
  );
};

const mapDispatchToProps = {
  loginStartAction,
};

export default connect(null, mapDispatchToProps)(LoginForm);
