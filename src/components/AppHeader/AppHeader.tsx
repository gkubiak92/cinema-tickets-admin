import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { useStyles } from "./styles";
import SignOut from "./SignOut/SignOut";
import { connect } from "react-redux";
import { IRootState } from "redux/types";
import { selectIsAuthenticated } from "redux/auth/selectors";
import { Props } from "./types";

const AppHeader = ({ isAuthenticated }: Props) => {
  const classes = useStyles();
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" noWrap>
          Cinema Tickets Admin
        </Typography>
        {isAuthenticated && <SignOut />}
      </Toolbar>
    </AppBar>
  );
};

const mapStateToProps = (state: IRootState) => ({
  isAuthenticated: selectIsAuthenticated(state),
});

export default connect(mapStateToProps)(AppHeader);
