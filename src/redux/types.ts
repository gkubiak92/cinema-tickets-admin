import { IMoviesState } from "./movies/types";
import { IHallsState } from "./halls/types";
import { IScreeningsState } from "./screenings/types";
import { IHallState } from "./hall/types";

export interface IRootState {
  movies: IMoviesState;
  halls: IHallsState;
  screenings: IScreeningsState;
  hall: IHallState;
}
