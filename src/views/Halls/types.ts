import { IHall } from "api/types";

export interface IHallsListMappedDispatch {
  fetchHallsStart: () => void;
}

export interface IHallsListMappedState {
  halls: IHall[];
}
