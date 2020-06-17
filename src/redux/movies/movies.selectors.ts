import { createSelector } from "reselect";
import { IRootState } from "redux/types";

export const selectMovies = (state: IRootState) => state.movies;

export const selectAllMovies = createSelector(
  selectMovies,
  ({ movies }) => movies
);
