import { IHall } from "api/types";
import { IEditHallFormData } from "views/Halls/Edit/types";

export enum HallActionsNames {
  SET_HALL_TO_EDIT = "SET_HALL_TO_EDIT",
  SET_HALL_SEATS = "SET_HALL_SEATS",
  ADD_HALL_START = "ADD_HALL_START",
  ADD_HALL_SUCCESS = "ADD_HALL_SUCCESS",
  ADD_HALL_FAILURE = "ADD_HALL_FAILURE",
}

export interface ISetHallToEditAction {
  type: HallActionsNames.SET_HALL_TO_EDIT;
  payload: IHall;
}

export interface ISetHallSeatsAction {
  type: HallActionsNames.SET_HALL_SEATS;
  payload: IEditHallFormData;
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
  | ISetHallToEditAction
  | ISetHallSeatsAction
  | IAddHallStartAction
  | IAddHallSuccessAction
  | IAddHallFailureAction;

export interface IHallState extends IHall {
  error: string;
  message: string;
}
