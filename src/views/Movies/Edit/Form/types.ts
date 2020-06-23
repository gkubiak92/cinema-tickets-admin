import { IMovie } from "api/types";

export interface IEditMovieFormProps {
  movie: IMovie;
}

export interface IEditMovieFormMappedDispatch {
  addMovie: (movie: IMovie) => void;
}

export interface IEditMovieFormMappedState {
  message: string;
}
