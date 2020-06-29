import { IHall } from "api/types";
import { IEditHallFormData } from "views/Halls/Edit/types";

export enum HallActionsNames {
  SET_HALL_TO_EDIT = "SET_HALL_TO_EDIT",
  SET_HALL_DATA = "SET_HALL_DATA",
  ADD_HALL_START = "ADD_HALL_START",
  ADD_HALL_SUCCESS = "ADD_HALL_SUCCESS",
  ADD_HALL_FAILURE = "ADD_HALL_FAILURE",
}

export interface ISetHallToEditAction {
  type: HallActionsNames.SET_HALL_TO_EDIT;
  payload: IHall;
}

export interface ISetHallDataAction {
  type: HallActionsNames.SET_HALL_DATA;
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
  | ISetHallDataAction
  | IAddHallStartAction
  | IAddHallSuccessAction
  | IAddHallFailureAction;

export interface IHallState extends IHall {
  error: string;
  message: string;
}
