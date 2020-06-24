import { IMoviesState } from "./movies/types";
import { IHallsState } from "./halls/types";
import { IScreeningsState } from "./screenings/types";

export interface IRootState {
  movies: IMoviesState;
  halls: IHallsState;
  screenings: IScreeningsState;
}
