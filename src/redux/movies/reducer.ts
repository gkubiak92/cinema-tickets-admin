import { IMoviesState, MoviesActionTypes, MoviesActionNames } from "./types";
import { deleteItemFromList, addItemToList } from "redux/utils";

const INITIAL_STATE: IMoviesState = {
  movies: [],
  isFetching: false,
  error: "",
  message: "",
  isDataLoaded: false,
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
        isDataLoaded: true,
      };
    case MoviesActionNames.ADD_MOVIE_SUCCESS:
      return {
        ...state,
        movies: addItemToList(state.movies, action.payload),
      };
    case MoviesActionNames.ADD_MOVIE_FAILURE:
    case MoviesActionNames.FETCH_MOVIES_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case MoviesActionNames.DELETE_MOVIE_SUCCESS:
      return {
        ...state,
        movies: deleteItemFromList(state.movies, action.payload),
        message: `Successfully removed movie with id: ${action.payload} from database`,
      };
    case MoviesActionNames.DELETE_MOVIE_FAILURE:
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
