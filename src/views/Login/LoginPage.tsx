import React from "react";
import { ILoginData } from "redux/auth/types";
import { loginStartAction } from "redux/auth/actions";
import { connect } from "react-redux";
import { IMappedDispatch } from "./types";
import { Form, Field } from "react-final-form";
import { TextField } from "mui-rff";
import { Button } from "@material-ui/core";

const initialValues: ILoginData = {
  email: "",
  password: "",
};

const LoginPage = ({ loginStartAction }: IMappedDispatch) => {
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

export default connect(null, mapDispatchToProps)(LoginPage);
