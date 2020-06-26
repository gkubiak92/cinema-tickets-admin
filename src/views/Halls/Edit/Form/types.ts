import { IEditHallFormData } from "../types";

export interface IEditHallFormMappedDispatch {
  setHallSeats: (hallData: IEditHallFormData) => void;
}

export interface IEditHallFormMappedState {
  editHallData: IEditHallFormData;
}
