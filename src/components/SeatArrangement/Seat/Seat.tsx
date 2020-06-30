import React from "react";
import { EventSeat } from "@material-ui/icons";
import { ISeatProps } from "./types";

const Seat = ({ disabled }: ISeatProps) => {
  const color = disabled ? "disabled" : "primary";
  return <EventSeat color={color} fontSize="large" />;
};

export default Seat;
