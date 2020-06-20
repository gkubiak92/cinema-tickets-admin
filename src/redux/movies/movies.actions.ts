import { MoviesActionNames } from "./types";
import { IMovie } from "api/types";

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

export const addMovieStartAction = (movie: IMovie) => ({
  type: MoviesActionNames.ADD_MOVIE_START,
  payload: movie,
});

export const addMovieSuccessAction = (message: string) => ({
  type: MoviesActionNames.ADD_MOVIE_SUCCESS,
  payload: message,
});

export const addMovieFailureAction = (error: string) => ({
  type: MoviesActionNames.ADD_MOVIE_FAILURE,
  payload: error,
});

export const deleteMovieStartAction = (id: string) => ({
  type: MoviesActionNames.DELETE_MOVIE_START,
  payload: id,
});

export const deleteMovieSuccessAction = (id: string) => ({
  type: MoviesActionNames.DELETE_MOVIE_SUCCESS,
  payload: id,
});

export const deleteMovieFailureAction = (error: string) => ({
  type: MoviesActionNames.DELETE_MOVIE_FAILURE,
  payload: error,
});
