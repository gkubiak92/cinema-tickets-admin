import { IMovie } from "api/types";

export const MoviesActionNames = {
  FETCH_MOVIES_START: "FETCH_MOVIES_START",
  FETCH_MOVIES_SUCCESS: "FETCH_MOVIES_SUCCESS",
  FETCH_MOVIES_FAILURE: "FETCH_MOVIES_FAILURE",
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

export type MoviesActionTypes =
  | IFetchMoviesStartAction
  | IFetchMoviesSuccessAction
  | IFetchMoviesFailureAction;

export interface IMoviesState {
  movies: IMovie[];
  isFetching: boolean;
  error: string;
}
