import { IMoviesState, MoviesActionTypes, MoviesActionNames } from "./types";

const INITIAL_STATE: IMoviesState = {
  movies: {},
  isFetching: false,
  error: "",
};

const moviesReducer = (state = INITIAL_STATE, action: MoviesActionTypes) => {
  switch (action.type) {
    case MoviesActionNames.FETCH_MOVIES_START:
      return {
        ...state,
        isFetchin: true,
      };
    default:
      return {
        ...state,
      };
  }
};

export default moviesReducer;
