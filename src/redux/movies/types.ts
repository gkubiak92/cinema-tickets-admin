export const MoviesActionNames = {
  FETCH_MOVIES_START: "FETCH_MOVIES_START",
  FETCH_MOVIES_SUCCESS: "FETCH_MOVIES_SUCCESS",
  FETCH_MOVIES_FAILURE: "FETCH_MOVIES_FAILURE",
};

interface IFetchMoviesStartAction {
  type: typeof MoviesActionNames.FETCH_MOVIES_START;
  payload: any;
}

interface IFetchMoviesSuccessAction {
  type: typeof MoviesActionNames.FETCH_MOVIES_SUCCESS;
  payload: any;
}

interface IFetchMoviesFailureAction {
  type: typeof MoviesActionNames.FETCH_MOVIES_FAILURE;
  payload: any;
}

export type MoviesActionTypes =
  | IFetchMoviesStartAction
  | IFetchMoviesSuccessAction
  | IFetchMoviesSuccessAction;

export interface IMoviesState {
  movies: {};
  isFetching: boolean;
  error: string;
}
