import { IRootState } from "redux/types";
import { createSelector } from "reselect";

const selectHalls = (state: IRootState) => state.halls;

export const selectAllHalls = createSelector(selectHalls, ({ halls }) => halls);

export const selectHallsSelectList = createSelector(
  selectHalls,
  ({ halls }) => {
    const arr: { label: string; value: string }[] = [];
    halls.forEach((hall) => arr.push({ label: hall.name, value: hall.id }));
    return arr;
  }
);
