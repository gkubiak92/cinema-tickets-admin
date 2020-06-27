import { IHall } from "api/types";
import { fetchHallsStart } from "redux/halls/actions";
import { setHallToEdit } from "redux/hall/actions";

export interface IHallsListMappedDispatch {
  fetchHallsStart: typeof fetchHallsStart;
  setHallToEdit: typeof setHallToEdit;
}

export interface IHallsListMappedState {
  halls: IHall[];
  isDataLoaded: boolean;
}
