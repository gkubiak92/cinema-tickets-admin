import { IHall, ISeatArrangement } from "api/types";

export enum HallActionsNames {
  SET_HALL_TO_EDIT = "SET_HALL_TO_EDIT",
  SET_HALL_SEATS = "SET_HALL_SEATS",
  ADD_HALL_START = "ADD_HALL_START",
  ADD_HALL_SUCCESS = "ADD_HALL_SUCCESS",
  ADD_HALL_FAILURE = "ADD_HALL_FAILURE",
}

export interface ISetHallToEdit {
  type: HallActionsNames.SET_HALL_TO_EDIT;
  payload: IHall;
}

export interface ISetHallSeats {
  type: HallActionsNames.SET_HALL_SEATS;
  payload: ISeatArrangement;
}

export interface IAddHallStartAction {
  type: HallActionsNames.ADD_HALL_START;
  payload: IHall;
}

export interface IAddHallSuccessAction {
  type: HallActionsNames.ADD_HALL_SUCCESS;
  payload: string;
}

export interface IAddHallFailureAction {
  type: HallActionsNames.ADD_HALL_FAILURE;
  payload: string;
}

export type HallActionsTypes =
  | ISetHallToEdit
  | ISetHallSeats
  | IAddHallStartAction
  | IAddHallSuccessAction
  | IAddHallFailureAction;

export interface IHallState extends IHall {
  error: string;
  message: string;
}
