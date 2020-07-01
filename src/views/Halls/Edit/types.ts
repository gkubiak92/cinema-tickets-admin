import { IHall } from "api/types";
import { setHallToEdit } from "redux/hall/actions";

export interface IEditHallFormData {
  id: string;
  name: string;
  rows: number;
  seatsPerRow: number;
}

export interface IEditHallMappedState {
  hall: IHall | undefined;
}

export interface IEditHallMappedDispatch {
  setHallToEdit: typeof setHallToEdit;
}

export interface IEdtiHallRouteProps {
  id: string;
}

export type IEditHallProps = IEditHallMappedState & IEditHallMappedDispatch;
