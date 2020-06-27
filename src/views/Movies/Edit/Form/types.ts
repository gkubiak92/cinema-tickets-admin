import { IMovie } from "api/types";
import { addMovieStart } from "redux/movies/actions";

export interface IEditMovieFormProps {
  movie: IMovie;
}

export interface IEditMovieFormMappedDispatch {
  addMovieStart: typeof addMovieStart;
}

export interface IEditMovieFormMappedState {
  message: string;
}

export interface IEditMovieFormFields {
  size: any;
  field: React.ReactNode;
}
