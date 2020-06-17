import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { Movie, EventSeat } from "@material-ui/icons";
import { useStyles } from "./menu.styles";
import { Link } from "react-router-dom";

const Menu = () => {
  const classes = useStyles();
  return (
    <Drawer
      variant="permanent"
      className={classes.drawer}
      classes={{ paper: classes.drawerPaper }}
    >
      <List>
        <ListItem button component={Link} to="/movies">
          <ListItemIcon>
            <Movie />
          </ListItemIcon>
          <ListItemText>Movies</ListItemText>
        </ListItem>
        <ListItem button component={Link} to="/halls">
          <ListItemIcon>
            <EventSeat />
          </ListItemIcon>
          <ListItemText>Halls</ListItemText>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Menu;
