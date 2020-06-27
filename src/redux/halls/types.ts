import { IHall } from "api/types";

export enum HallsActionNames {
  FETCH_HALLS_START = "FETCH_HALLS_START",
  FETCH_HALLS_SUCCESS = "FETCH_HALLS_SUCCESS",
  FETCH_HALLS_FAILURE = "FETCH_HALLS_FAILURE",
}

export interface IFetchHallsStartAction {
  type: typeof HallsActionNames.FETCH_HALLS_START;
}

export interface IFetchHallsSuccessAction {
  type: typeof HallsActionNames.FETCH_HALLS_SUCCESS;
  payload: IHall[];
}

export interface IFetchHallsFailureAction {
  type: typeof HallsActionNames.FETCH_HALLS_FAILURE;
  payload: string;
}

export type HallsActionTypes =
  | IFetchHallsStartAction
  | IFetchHallsSuccessAction
  | IFetchHallsFailureAction;

export interface IHallsState {
  halls: IHall[];
  isFetching: boolean;
  error: string;
}
