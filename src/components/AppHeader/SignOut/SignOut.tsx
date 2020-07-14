import React from "react";
import { Button } from "@material-ui/core";
import { logoutStart } from "redux/auth/actions";
import { connect } from "react-redux";
import { Props } from "./types";

const SignOut = ({ logoutStart }: Props) => (
  <Button
    onClick={() => {
      logoutStart();
    }}
  >
    Sign Out
  </Button>
);

const mapDispatchToProps = {
  logoutStart,
};

export default connect(null, mapDispatchToProps)(SignOut);
