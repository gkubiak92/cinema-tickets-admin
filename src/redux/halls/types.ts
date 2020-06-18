import { IHall } from "api/types";

export const HallsActionNames = {
  FETCH_HALLS_START: "FETCH_HALLS_START",
  FETCH_HALLS_SUCCESS: "FETCH_HALLS_SUCCESS",
  FETCH_HALLS_FAILURE: "FETCH_HALLS_FAILURE",
};

export interface IFetchHallsStart {
  type: typeof HallsActionNames.FETCH_HALLS_START;
  payload?: any;
}

export interface IFetchHallsSuccess {
  type: typeof HallsActionNames.FETCH_HALLS_SUCCESS;
  payload: IHall[];
}

export interface IFetchHallsFailure {
  type: typeof HallsActionNames.FETCH_HALLS_FAILURE;
  payload: string;
}

export type HallsActionTypes =
  | IFetchHallsStart
  | IFetchHallsSuccess
  | IFetchHallsFailure;

export interface IHallsState {
  halls: IHall[];
  isFetching: boolean;
  error: string;
}
