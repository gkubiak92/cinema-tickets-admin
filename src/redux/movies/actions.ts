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

export const fetchMoviesStart = (): IFetchMoviesStartAction => ({
  type: MoviesActionNames.FETCH_MOVIES_START,
});

export const fetchMoviesSuccess = (
  movies: IMovie[]
): IFetchMoviesSuccessAction => ({
  type: MoviesActionNames.FETCH_MOVIES_SUCCESS,
  payload: movies,
});

export const fetchMoviesFailure = (
  error: string
): IFetchMoviesFailureAction => ({
  type: MoviesActionNames.FETCH_MOVIES_FAILURE,
  payload: error,
});

export const addMovieStart = (movie: IMovie): IAddMovieStartAction => ({
  type: MoviesActionNames.ADD_MOVIE_START,
  payload: movie,
});

export const addMovieSuccess = (message: string): IAddMovieSuccessAction => ({
  type: MoviesActionNames.ADD_MOVIE_SUCCESS,
  payload: message,
});

export const addMovieFailure = (error: string): IAddMovieFailureAction => ({
  type: MoviesActionNames.ADD_MOVIE_FAILURE,
  payload: error,
});

export const deleteMovieStart = (id: string): IDeleteMovieStartAction => ({
  type: MoviesActionNames.DELETE_MOVIE_START,
  payload: id,
});

export const deleteMovieSuccess = (id: string): IDeleteMovieSuccessAction => ({
  type: MoviesActionNames.DELETE_MOVIE_SUCCESS,
  payload: id,
});

export const deleteMovieFailure = (
  error: string
): IDeleteMovieFailureAction => ({
  type: MoviesActionNames.DELETE_MOVIE_FAILURE,
  payload: error,
});
