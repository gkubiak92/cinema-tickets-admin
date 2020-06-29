import { IEditHallFormData } from "../types";
import { setHallData, addHallStart } from "redux/hall/actions";

export interface IEditHallFormMappedDispatch {
  setHallSeats: typeof setHallData;
}

export interface IEditHallFormMappedState {
  editHallData: IEditHallFormData;
}

export type IEditHallFormProps = IEditHallFormMappedDispatch &
  IEditHallFormMappedState;
