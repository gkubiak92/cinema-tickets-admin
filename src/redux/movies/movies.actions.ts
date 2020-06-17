import { MoviesActionNames } from "./types";

export const fetchMoviesStartAction = () => ({
  type: MoviesActionNames.FETCH_MOVIES_START,
  payload: null,
});

export const fetchMoviesSuccessAction = (movies: Object[]) => ({
  type: MoviesActionNames.FETCH_MOVIES_SUCCESS,
  payload: movies,
});

export const fetchMoviesFailureAction = (error: string) => ({
  type: MoviesActionNames.FETCH_MOVIES_FAILURE,
  payload: error,
});
