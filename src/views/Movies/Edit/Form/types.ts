import { IMovie } from "api/types";
import { addMovieStart } from "redux/movies/actions";

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

export type IEditMovieFormProps = { movie: IMovie } & IEditMovieFormMappedDispatch & IEditMovieFormMappedState