import {
  MoviesActionNames,
  IFetchMoviesStartAction,
  IFetchMoviesSuccessAction,
  IFetchMoviesFailureAction,
  IAddMovieStartAction,
  IAddMovieSuccessAction,
  IAddMovieFailureAction,
  IDeleteMovieStartAction,
  IDeleteMovieSuccessAction,
  IDeleteMovieFailureAction,
} from "./types";
import { IMovie } from "api/types";

export const fetchMoviesStartAction = (): IFetchMoviesStartAction => ({
  type: MoviesActionNames.FETCH_MOVIES_START,
});

export const fetchMoviesSuccessAction = (
  movies: IMovie[]
): IFetchMoviesSuccessAction => ({
  type: MoviesActionNames.FETCH_MOVIES_SUCCESS,
  payload: movies,
});

export const fetchMoviesFailureAction = (
  error: string
): IFetchMoviesFailureAction => ({
  type: MoviesActionNames.FETCH_MOVIES_FAILURE,
  payload: error,
});

export const addMovieStartAction = (movie: IMovie): IAddMovieStartAction => ({
  type: MoviesActionNames.ADD_MOVIE_START,
  payload: movie,
});

export const addMovieSuccessAction = (
  message: string
): IAddMovieSuccessAction => ({
  type: MoviesActionNames.ADD_MOVIE_SUCCESS,
  payload: message,
});

export const addMovieFailureAction = (
  error: string
): IAddMovieFailureAction => ({
  type: MoviesActionNames.ADD_MOVIE_FAILURE,
  payload: error,
});

export const deleteMovieStartAction = (
  id: string
): IDeleteMovieStartAction => ({
  type: MoviesActionNames.DELETE_MOVIE_START,
  payload: id,
});

export const deleteMovieSuccessAction = (
  id: string
): IDeleteMovieSuccessAction => ({
  type: MoviesActionNames.DELETE_MOVIE_SUCCESS,
  payload: id,
});

export const deleteMovieFailureAction = (
  error: string
): IDeleteMovieFailureAction => ({
  type: MoviesActionNames.DELETE_MOVIE_FAILURE,
  payload: error,
});
