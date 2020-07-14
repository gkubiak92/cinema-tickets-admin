import React from "react";
import { RouteProps, Redirect, Route } from "react-router-dom";
import { IRootState } from "redux/types";
import { selectIsAuthenticated } from "redux/auth/selectors";
import { connect } from "react-redux";

type MappedState = {
  isAuthenticated: boolean;
};

type Props = MappedState & RouteProps;

const AuthRequiredRoute = ({ isAuthenticated, component, path }: Props) => {
  console.log("isauth:", isAuthenticated);
  if (!isAuthenticated) {
    return <Redirect to="/login" />;
  }

  return <Route exact path={path} component={component} />;
};

const mapStateToProps = (state: IRootState) => ({
  isAuthenticated: selectIsAuthenticated(state),
});

export default connect(mapStateToProps)(AuthRequiredRoute);
