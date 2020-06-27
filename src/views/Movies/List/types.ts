import { IMovie } from "api/types";
import { fetchMoviesStart, deleteMovieStart } from "redux/movies/actions";

export interface IMoviesListMappedDispatch {
  fetchMoviesStart: typeof fetchMoviesStart;
  deleteMovieStart: typeof deleteMovieStart;
}

export interface IMoviesListMappedState {
  movies: IMovie[];
}
