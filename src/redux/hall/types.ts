import { IHall } from "api/types";
import { IEditHallFormData } from "views/Halls/Edit/types";

export enum HallActionsNames {
  SET_HALL_TO_EDIT = "SET_HALL_TO_EDIT",
  SET_HALL_DATA = "SET_HALL_DATA",

  TOGGLE_SEAT = "TOGGLE_SEAT",
}

export interface ISetHallToEditAction {
  type: HallActionsNames.SET_HALL_TO_EDIT;
  payload: IHall;
}

export interface ISetHallDataAction {
  type: HallActionsNames.SET_HALL_DATA;
  payload: IEditHallFormData;
}

export interface IToggleSeat {
  row: string;
  index: number;
}

export interface IToggleSeatAction {
  type: HallActionsNames.TOGGLE_SEAT;
  payload: IToggleSeat;
}

export type HallActionsTypes =
  | ISetHallToEditAction
  | ISetHallDataAction
  | IToggleSeatAction;

export interface IHallState extends IHall {}
