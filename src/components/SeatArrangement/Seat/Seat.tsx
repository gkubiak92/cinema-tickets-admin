import React from "react";
import { EventSeat } from "@material-ui/icons";
import { ISeatProps } from "./types";

const Seat = ({ disabled }: ISeatProps) => {
  const color = disabled ? "transparent" : "primary";
  return <EventSeat style={{ color: color }} fontSize="large" />;
};

export default Seat;
