import { IHall } from "api/types";
import { fetchHallsStart, deleteHallStart } from "redux/halls/actions";
import { setHallToEdit } from "redux/hall/actions";

export interface IHallsListMappedDispatch {
  fetchHallsStart: typeof fetchHallsStart;
  setHallToEdit: typeof setHallToEdit;
  deleteHallStart: typeof deleteHallStart;
}

export interface IHallsListMappedState {
  halls: IHall[];
  isDataLoaded: boolean;
}

export type IHallsListProps = IHallsListMappedState & IHallsListMappedDispatch;
