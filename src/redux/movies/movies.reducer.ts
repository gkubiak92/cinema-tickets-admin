import { IMoviesState, MoviesActionTypes, MoviesActionNames } from "./types";

const INITIAL_STATE: IMoviesState = {
  movies: [],
  isFetching: false,
  error: "",
  message: "",
};

const moviesReducer = (state = INITIAL_STATE, action: MoviesActionTypes) => {
  switch (action.type) {
    case MoviesActionNames.FETCH_MOVIES_START:
      return {
        ...state,
        isFetching: true,
      };
    case MoviesActionNames.FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.payload,
      };
    case MoviesActionNames.ADD_MOVIE_SUCCESS:
      return {
        ...state,
        message: action.payload,
      };
    case MoviesActionNames.ADD_MOVIE_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default moviesReducer;
