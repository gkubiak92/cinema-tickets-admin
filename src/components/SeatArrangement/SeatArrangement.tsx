import React from "react";
import { ISeatArrangementProps, ISeatArrangementMappedState } from "./types";
import { Grid, Avatar } from "@material-ui/core";
import { EventSeat } from "@material-ui/icons";
import { IRootState } from "redux/types";
import { selectHallSeatArrangement } from "redux/halls/selectors";
import { connect } from "react-redux";

const SeatArrangement = ({
  hallId,
  seatArrangement,
}: ISeatArrangementProps & ISeatArrangementMappedState) => {
  return seatArrangement ? (
    <Grid container spacing={2}>
      {Object.entries(seatArrangement).map((row) => (
        <Grid item container xs={12} key={`row${row[0]}`}>
          <Avatar>{row[0]}</Avatar>
          {row[1].map((seat, index) =>
            seat.disabled ? (
              <EventSeat
                key={`${row[0]}${index}`}
                style={{ color: "transparent" }}
                fontSize="large"
              />
            ) : (
              <EventSeat
                key={`${row[0]}${index}`}
                color="primary"
                fontSize="large"
              />
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
  ownProps: ISeatArrangementProps
) => ({
  seatArrangement: selectHallSeatArrangement(ownProps.hallId)(state),
});

export default connect(mapStateToProps)(SeatArrangement);
