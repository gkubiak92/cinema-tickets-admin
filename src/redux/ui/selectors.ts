import { IRootState } from "redux/types";
import { createSelector } from "reselect";

const selectUI = (state: IRootState) => state.ui;

export const selectIsSpinning = createSelector(
  selectUI,
  ({ spinning }) => spinning
);
