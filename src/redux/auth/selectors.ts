import { IRootState } from "redux/types";
import { createSelector } from "reselect";

const selectAuth = (state: IRootState) => state.auth;

export const selectIsAuthenticated = createSelector(
  selectAuth,
  ({ user }) => !!user
);
