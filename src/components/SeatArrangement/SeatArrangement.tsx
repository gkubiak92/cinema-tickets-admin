import React from "react";
import { ISeatArrangementProps, ISeatArrangementMappedState } from "./types";
import { Grid, Avatar } from "@material-ui/core";
import { IRootState } from "redux/types";
import { selectHallSeatArrangement } from "redux/halls/selectors";
import { connect } from "react-redux";
import Seat from "./Seat";

const SeatArrangement = ({
  hallId,
  seatArrangement,
}: ISeatArrangementProps & ISeatArrangementMappedState) => {
  return seatArrangement ? (
    <Grid container spacing={2}>
      {Object.entries(seatArrangement).map((row) => (
        <Grid item container xs={12} key={`row${row[0]}`}>
          <Avatar>{row[0]}</Avatar>
          {row[1].map((seat, index) => (
            <Seat key={`${row[0]}${index}`} disabled={seat.disabled} />
          ))}
        </Grid>
      ))}
    </Grid>
  ) : (
    <Grid container></Grid>
  );
};

const mapStateToProps = (
  state: IRootState,
  ownProps: ISeatArrangementProps
) => ({
  seatArrangement: selectHallSeatArrangement(ownProps.hallId)(state),
});

export default connect(mapStateToProps)(SeatArrangement);
