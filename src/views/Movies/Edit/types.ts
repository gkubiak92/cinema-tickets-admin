import { IMovie } from "api/types";
import { RouteComponentProps } from "react-router-dom";

export interface IEditMovieMappedState {
  movie: IMovie | undefined;
}


export type IEditMovieProps = IEditMovieMappedState & RouteComponentProps<{ id: string }>
