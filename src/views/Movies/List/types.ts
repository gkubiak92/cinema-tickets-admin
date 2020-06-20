import { IMovie } from "api/types";

export interface IMoviesListMappedDispatch {
  fetchMoviesStart: () => void;
  deleteMovieStart: (id: string) => void;
}

export interface IMoviesListMappedState {
  movies: IMovie[];
}
