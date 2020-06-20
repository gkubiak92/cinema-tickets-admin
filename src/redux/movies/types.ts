import { IMovie } from "api/types";

export const MoviesActionNames = {
  FETCH_MOVIES_START: "FETCH_MOVIES_START",
  FETCH_MOVIES_SUCCESS: "FETCH_MOVIES_SUCCESS",
  FETCH_MOVIES_FAILURE: "FETCH_MOVIES_FAILURE",
  ADD_MOVIE_START: "ADD_MOVIE_START",
  ADD_MOVIE_SUCCESS: "ADD_MOVIE_SUCCESS",
  ADD_MOVIE_FAILURE: "ADD_MOVIE_FAILURE",
  DELETE_MOVIE_START: "DELETE_MOVIE_START",
  DELETE_MOVIE_SUCCESS: "DELETE_MOVIE_SUCCESS",
  DELETE_MOVIE_FAILURE: "DELETE_MOVIE_FAILURE",
};

interface IFetchMoviesStartAction {
  type: typeof MoviesActionNames.FETCH_MOVIES_START;
  payload?: any;
}

interface IFetchMoviesSuccessAction {
  type: typeof MoviesActionNames.FETCH_MOVIES_SUCCESS;
  payload: IMovie[];
}

interface IFetchMoviesFailureAction {
  type: typeof MoviesActionNames.FETCH_MOVIES_FAILURE;
  payload: string;
}

export interface IAddMovieStartAction {
  type: typeof MoviesActionNames.ADD_MOVIE_START;
  payload: IMovie;
}

interface IAddMovieSuccessAction {
  type: typeof MoviesActionNames.ADD_MOVIE_SUCCESS;
  payload: string;
}

interface IAddMovieFailureAction {
  type: typeof MoviesActionNames.ADD_MOVIE_FAILURE;
  payload: string;
}

export interface IDeleteMovieStartAction {
  type: typeof MoviesActionNames.DELETE_MOVIE_START;
  payload: string;
}

interface IDeleteMovieSuccessAction {
  type: typeof MoviesActionNames.DELETE_MOVIE_SUCCESS;
  payload: string;
}

interface IDeleteMovieFailureAction {
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
}
