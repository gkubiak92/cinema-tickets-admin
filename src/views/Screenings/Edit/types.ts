import { IScreening } from "api/types";

export interface IEditScreeningProps {
  id: string;
}

export interface IEditScreeningMappedState {
  screening: IScreening | undefined;
}

export interface IEditScreeningMappedDispatch {
  fetchMoviesStart: () => void;
  fetchHallsStart: () => void;
}
