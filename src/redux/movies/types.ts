import { IMovie } from "api/types";

export enum MoviesActionNames {
  FETCH_MOVIES_START = "FETCH_MOVIES_START",
  FETCH_MOVIES_SUCCESS = "FETCH_MOVIES_SUCCESS",
  FETCH_MOVIES_FAILURE = "FETCH_MOVIES_FAILURE",
  ADD_MOVIE_START = "ADD_MOVIE_START",
  ADD_MOVIE_SUCCESS = "ADD_MOVIE_SUCCESS",
  ADD_MOVIE_FAILURE = "ADD_MOVIE_FAILURE",
  DELETE_MOVIE_START = "DELETE_MOVIE_START",
  DELETE_MOVIE_SUCCESS = "DELETE_MOVIE_SUCCESS",
  DELETE_MOVIE_FAILURE = "DELETE_MOVIE_FAILURE",
}

export interface IFetchMoviesStartAction {
  type: typeof MoviesActionNames.FETCH_MOVIES_START;
}

export interface IFetchMoviesSuccessAction {
  type: typeof MoviesActionNames.FETCH_MOVIES_SUCCESS;
  payload: IMovie[];
}

export interface IFetchMoviesFailureAction {
  type: typeof MoviesActionNames.FETCH_MOVIES_FAILURE;
  payload: string;
}

export interface IAddMovieStartAction {
  type: typeof MoviesActionNames.ADD_MOVIE_START;
  payload: IMovie;
}

export interface IAddMovieSuccessAction {
  type: typeof MoviesActionNames.ADD_MOVIE_SUCCESS;
}

export interface IAddMovieFailureAction {
  type: typeof MoviesActionNames.ADD_MOVIE_FAILURE;
  payload: string;
}

export interface IDeleteMovieStartAction {
  type: typeof MoviesActionNames.DELETE_MOVIE_START;
  payload: string;
}

export interface IDeleteMovieSuccessAction {
  type: typeof MoviesActionNames.DELETE_MOVIE_SUCCESS;
  payload: string;
}

export interface IDeleteMovieFailureAction {
  type: typeof MoviesActionNames.DELETE_MOVIE_FAILURE;
  payload: string;
}

export type MoviesActionTypes =
  | IFetchMoviesStartAction
  | IFetchMoviesSuccessAction
  | IFetchMoviesFailureAction
  | IAddMovieStartAction
  | IAddMovieSuccessAction
  | IAddMovieFailureAction
  | IDeleteMovieStartAction
  | IDeleteMovieSuccessAction
  | IDeleteMovieFailureAction;

export interface IMoviesState {
  movies: IMovie[];
  isFetching: boolean;
  message: string;
  error: string;
  isDataLoaded: boolean;
}
