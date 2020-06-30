import { IHall } from "api/types";
import { setHallToEdit } from "redux/hall/actions";
import { addHallStart } from "redux/halls/actions";

export interface IEditHallFormData {
  id: string;
  name: string;
  rows: number;
  seatsPerRow: number;
}

export interface IEditHallMappedState {
  hall: IHall;
  isHallDataSet: boolean;
}

export interface IEditHallMappedDispatch {
  addHallStart: typeof addHallStart;
  setHallToEdit: typeof setHallToEdit;
}

export type IEditHallProps = IEditHallMappedState & IEditHallMappedDispatch;
