import { createSelector } from "reselect";
import { IRootState } from "redux/types";
import { IMovie } from "api/types";

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

export const selectMoviesSelectList = createSelector(
  selectMovies,
  ({ movies }) => {
    const arr: { label: string; value: string }[] = [];
    movies.forEach((movie: IMovie) => {
      arr.push({ label: movie.title, value: movie.id });
    });
    return arr;
  }
);
