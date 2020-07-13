import React from "react";
import { Form } from "react-final-form";
import { ILoginData } from "redux/auth/types";
import { loginStartAction } from "redux/auth/actions";
import { TextField } from "mui-rff";
import { Button } from "@material-ui/core";
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
          <TextField name="email" />
          <TextField name="password" />
          <Button type="submit">Login</Button>
        </form>
      )}
    />
  );
};

const mapDispatchToProps = {
  loginStartAction,
};

export default connect(null, mapDispatchToProps)(LoginForm);
