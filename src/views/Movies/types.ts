import { IMovie } from "api/types";

export interface IMoviesListMappedDispatch {
  fetchMoviesStart: () => void;
}

export interface IMoviesListMappedState {
  movies: IMovie[];
}

export interface IEditMovieProps {
  id: string;
}

export interface IEditMovieMappedState {
  movie: IMovie | undefined;
}
