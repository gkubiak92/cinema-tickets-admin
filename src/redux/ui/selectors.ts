import { IRootState } from "redux/types";
import { createSelector } from "reselect";

const selectUI = (state: IRootState) => state.ui;

export const selectIsSpinning = createSelector(
  selectUI,
  ({ spinning }) => spinning
);

export const selectGlobalAlert = createSelector(selectUI, ({ alert }) => alert);

export const selectIsAlertOpen = createSelector(
  selectGlobalAlert,
  ({ open }) => open
);

export const selectAlertMessage = createSelector(
  selectGlobalAlert,
  ({ message }) => message
);
