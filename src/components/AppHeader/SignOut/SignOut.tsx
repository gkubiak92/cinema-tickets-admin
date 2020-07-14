import React from "react";
import { Button } from "@material-ui/core";
import { logoutStartAction } from "redux/auth/actions";
import { connect } from "react-redux";
import { Props } from "./types";

const SignOut = ({ logoutStartAction }: Props) => (
  <Button
    onClick={() => {
      logoutStartAction();
    }}
  >
    Sign Out
  </Button>
);

const mapDispatchToProps = {
  logoutStartAction,
};

export default connect(null, mapDispatchToProps)(SignOut);
