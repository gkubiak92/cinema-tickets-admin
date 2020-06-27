import { IEditHallFormData } from "../types";
import { setHallSeats } from "redux/hall/actions";

export interface IEditHallFormMappedDispatch {
  setHallSeats: typeof setHallSeats;
}

export interface IEditHallFormMappedState {
  editHallData: IEditHallFormData;
}
