import { IMovie } from "api/types";

export interface IEditMovieProps {
  id: string;
}

export interface IEditMovieMappedState {
  movie: IMovie | undefined;
}
