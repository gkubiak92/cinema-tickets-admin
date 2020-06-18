import { IRootState } from "redux/types";
import { createSelector } from "reselect";

const selectHalls = (state: IRootState) => state.halls;

export const selectAllHalls = createSelector(selectHalls, ({ halls }) => halls);
