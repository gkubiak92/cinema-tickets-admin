import React from "react";
import {
  SeatArrangementProps,
  ISeatArrangementMappedState,
  ISeatArrangementMappedDispatch,
} from "./types";
import { Grid, Avatar, IconButton } from "@material-ui/core";
import { IRootState } from "redux/types";
import { selectHallSeatArrangement } from "redux/halls/selectors";
import { connect } from "react-redux";
import Seat from "./Seat";
import { selectSeatsToEdit } from "redux/hall/selectors";
import { toggleSeat } from "redux/hall/actions";

const SeatArrangement = ({
  seatArrangement,
  edit,
  toggleSeat,
}: SeatArrangementProps &
  ISeatArrangementMappedState &
  ISeatArrangementMappedDispatch) => {
  return seatArrangement ? (
    <Grid container spacing={2}>
      {Object.entries(seatArrangement).map((row) => (
        <Grid item container xs={12} key={`row${row[0]}`}>
          <Avatar>{row[0]}</Avatar>
          {row[1].map((seat, index) =>
            edit ? (
              <IconButton
                key={`${row[0]}${index}`}
                onClick={() => toggleSeat({ row: row[0], index: index })}
              >
                <Seat disabled={seat.disabled} />
              </IconButton>
            ) : (
              <Seat key={`${row[0]}${index}`} disabled={seat.disabled} />
            )
          )}
        </Grid>
      ))}
    </Grid>
  ) : (
    <Grid container></Grid>
  );
};

const mapStateToProps = (
  state: IRootState,
  { hallId, edit }: SeatArrangementProps
) => ({
  seatArrangement: edit
    ? selectSeatsToEdit(state)
    : selectHallSeatArrangement(hallId)(state),
});

const mapDispatchToProps = {
  toggleSeat,
};

export default connect(mapStateToProps, mapDispatchToProps)(SeatArrangement);
