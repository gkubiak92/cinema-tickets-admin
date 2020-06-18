import { IMoviesState } from "./movies/types";
import { IHallsState } from "./halls/types";

export interface IRootState {
  movies: IMoviesState;
  halls: IHallsState;
}
