import { IHall } from "api/types";

export interface IHallsListMappedDispatch {
  fetchHallsStart: () => void;
  setHallToEdit: (hall: IHall) => void;
}

export interface IHallsListMappedState {
  halls: IHall[];
}
