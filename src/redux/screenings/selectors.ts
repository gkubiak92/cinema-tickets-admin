import { IRootState } from "redux/types";
import { createSelector } from "reselect";

const selectScreenings = (state: IRootState) => state.screenings;

export const selectAllScreenings = createSelector(
  selectScreenings,
  ({ screenings }) => screenings
);

export const selectScreening = (id: string) =>
  createSelector(selectScreenings, ({ screenings }) =>
    screenings.find((screening) => screening.id === id)
  );
