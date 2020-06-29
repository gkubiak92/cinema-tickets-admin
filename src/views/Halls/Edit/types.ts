import { ISeatArrangement, IHall } from "api/types";
import { addHallStart } from "redux/hall/actions";

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
}

export type IEditHallProps = IEditHallMappedState & IEditHallMappedDispatch;
