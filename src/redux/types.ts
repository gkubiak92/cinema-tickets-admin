import { IMoviesState } from "./movies/types";
import { IHallsState } from "./halls/types";
import { IScreeningsState } from "./screenings/types";
import { IHallState } from "./hall/types";
import { IAuthState } from "./auth/types";
import { IUIState } from "./ui/types";

export interface IRootState {
  movies: IMoviesState;
  halls: IHallsState;
  screenings: IScreeningsState;
  hall: IHallState;
  auth: IAuthState;
  ui: IUIState;
}
