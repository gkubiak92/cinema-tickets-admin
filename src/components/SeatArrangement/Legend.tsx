import React from "react";
import { Grid } from "@material-ui/core";
import { EventSeat } from "@material-ui/icons";

const Legend = () => (
  <Grid container>
    <Grid container xs={12} alignItems="center">
      <EventSeat color="disabled" />
      <p>Seat disabled</p>
    </Grid>
    <Grid container xs={12} alignItems="center">
      <EventSeat color="primary" />
      <p>Seat available</p>
    </Grid>
  </Grid>
);

export default Legend;
