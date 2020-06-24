import { IScreening } from "api/types";

export const ScreeningsActionNames = {
  FETCH_SCREENINGS_START: "FETCH_SCREENINGS_START",
  FETCH_SCREENINGS_SUCCESS: "FETCH_SCREENINGS_SUCCESS",
  FETCH_SCREENINGS_FAILURE: "FETCH_SCREENINGS_FAILURE",
  ADD_SCREENING_START: "ADD_SCREENING_START",
  ADD_SCREENING_SUCCESS: "ADD_SCREENING_SUCCESS",
  ADD_SCREENING_FAILURE: "ADD_SCREENING_FAILURE",
};

export interface IFetchScreeningsStart {
  type: typeof ScreeningsActionNames.FETCH_SCREENINGS_START;
  payload?: any;
}

export interface IFetchScreeningsSuccess {
  type: typeof ScreeningsActionNames.FETCH_SCREENINGS_SUCCESS;
  payload: IScreening[];
}

export interface IFetchScreeningsFailure {
  type: typeof ScreeningsActionNames.FETCH_SCREENINGS_FAILURE;
  payload: string;
}

export interface IAddScreeningStart {
  type: typeof ScreeningsActionNames.ADD_SCREENING_START;
  payload: IScreening;
}

export interface IAddScreeningSuccess {
  type: typeof ScreeningsActionNames.ADD_SCREENING_SUCCESS;
  payload: string;
}

export interface IAddScreeningFailure {
  type: typeof ScreeningsActionNames.ADD_SCREENING_FAILURE;
  payload: string;
}

export type ScreeningsActionTypes =
  | IFetchScreeningsStart
  | IFetchScreeningsSuccess
  | IFetchScreeningsFailure
  | IAddScreeningStart
  | IAddScreeningSuccess
  | IAddScreeningFailure;

export interface IScreeningsState {
  screenings: IScreening[];
  isFetching: boolean;
  error: string;
}
