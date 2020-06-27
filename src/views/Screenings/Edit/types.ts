import { IScreening } from "api/types";
import { fetchMoviesStart } from "redux/movies/actions";
import { fetchHallsStart } from "redux/halls/actions";

export interface IEditScreeningProps {
  id: string;
}

export interface IEditScreeningMappedState {
  screening: IScreening | undefined;
}

export interface IEditScreeningMappedDispatch {
  fetchMoviesStart: typeof fetchMoviesStart;
  fetchHallsStart: typeof fetchHallsStart;
}
