import { IHall } from "api/types";

export enum HallsActionsNames {
  FETCH_HALLS_START = "FETCH_HALLS_START",
  FETCH_HALLS_SUCCESS = "FETCH_HALLS_SUCCESS",
  FETCH_HALLS_FAILURE = "FETCH_HALLS_FAILURE",
  ADD_HALL_START = "ADD_HALL_START",
  ADD_HALL_SUCCESS = "ADD_HALL_SUCCESS",
  ADD_HALL_FAILURE = "ADD_HALL_FAILURE",
  DELETE_HALL_START = "DELETE_HALL_START",
  DELETE_HALL_SUCCESS = "DELETE_HALL_SUCCESS",
  DELETE_HALL_FAILURE = "DELETE_HALL_FAILURE",
}

export interface IFetchHallsStartAction {
  type: typeof HallsActionsNames.FETCH_HALLS_START;
}

export interface IFetchHallsSuccessAction {
  type: typeof HallsActionsNames.FETCH_HALLS_SUCCESS;
  payload: IHall[];
}

export interface IFetchHallsFailureAction {
  type: typeof HallsActionsNames.FETCH_HALLS_FAILURE;
  payload: string;
}

export interface IAddHallStartAction {
  type: HallsActionsNames.ADD_HALL_START;
  payload: IHall;
}

export interface IAddHallSuccessAction {
  type: HallsActionsNames.ADD_HALL_SUCCESS;
  payload: IHall;
}

export interface IAddHallFailureAction {
  type: HallsActionsNames.ADD_HALL_FAILURE;
  payload: string;
}

export interface IDeleteHallStartAction {
  type: HallsActionsNames.DELETE_HALL_START;
  payload: string;
}

export interface IDeleteHallSuccessAction {
  type: HallsActionsNames.DELETE_HALL_SUCCESS;
  payload: string;
}

export interface IDeleteHallFailureAction {
  type: HallsActionsNames.DELETE_HALL_FAILURE;
  payload: string;
}

export type HallsActionTypes =
  | IFetchHallsStartAction
  | IFetchHallsSuccessAction
  | IFetchHallsFailureAction
  | IAddHallStartAction
  | IAddHallSuccessAction
  | IAddHallFailureAction
  | IDeleteHallStartAction
  | IDeleteHallSuccessAction
  | IDeleteHallFailureAction;

export interface IHallsState {
  halls: IHall[];
  isFetching: boolean;
  error: string;
  isDataLoaded: boolean;
}
