import { createSelector } from "reselect";
import { IRootState } from "redux/types";

export const selectMovies = (state: IRootState) => state.movies;

export const selectAllMovies = createSelector(
  selectMovies,
  ({ movies }) => movies
);

export const selectMovie = (id: string) =>
  createSelector(selectMovies, ({ movies }) =>
    movies.find((movie) => movie.id === id)
  );

export const selectMessage = createSelector(
  selectMovies,
  ({ message }) => message
);
