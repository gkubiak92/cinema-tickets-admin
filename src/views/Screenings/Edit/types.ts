import { IScreening } from "api/types";
import { fetchMoviesStart } from "redux/movies/actions";
import { fetchHallsStart } from "redux/halls/actions";
import { RouteComponentProps } from "react-router-dom";

export interface IEditScreeningMappedState {
  screening: IScreening | undefined;
}

export interface IEditScreeningMappedDispatch {
  fetchMoviesStart: typeof fetchMoviesStart;
  fetchHallsStart: typeof fetchHallsStart;
}

export type EditScreeningProps = IEditScreeningMappedState
  & IEditScreeningMappedDispatch
  & RouteComponentProps<{ id: string }>
