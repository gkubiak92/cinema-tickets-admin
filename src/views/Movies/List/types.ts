import { IMovie } from "api/types";

export interface IMoviesListMappedDispatch {
  fetchMoviesStart: () => void;
}

export interface IMoviesListMappedState {
  movies: IMovie[];
}
