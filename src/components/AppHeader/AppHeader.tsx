import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { useStyles } from "./styles";

const AppHeader = () => {
  const classes = useStyles();
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" noWrap>
          Cinema Tickets Admin
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
