import { IEditHallFormData } from "../types";
import { setHallData } from "redux/hall/actions";
import { addHallStart } from "redux/halls/actions";

export interface IEditHallFormMappedDispatch {
  setHallData: typeof setHallData;
  addHallStart: typeof addHallStart;
  isHallDataSet: boolean;
}

export interface IEditHallFormMappedState {
  editHallData: IEditHallFormData;
}

export type IEditHallFormProps = IEditHallFormMappedDispatch &
  IEditHallFormMappedState;
