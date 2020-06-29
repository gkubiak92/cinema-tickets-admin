import { IRootState } from "redux/types";
import { createSelector } from "reselect";

const selectHall = (state: IRootState) => state.hall;

export const selectSeatsToEdit = createSelector(
  selectHall,
  ({ seatArrangement }) => seatArrangement
);

export const selectHallToEditData = createSelector(
  selectHall,
  ({ id, name, seatArrangement }) => {
    return {
      id,
      name,
      rows: Object.keys(seatArrangement).length ?? 0,
      seatsPerRow: Object.entries(seatArrangement).length
        ? Object.entries(seatArrangement)[0][1].length
        : 0,
    };
  }
);

export const selectIsHallDataSet = createSelector(
  selectHall,
  ({ name, seatArrangement }) => (!!name && !!seatArrangement ? true : false)
);
