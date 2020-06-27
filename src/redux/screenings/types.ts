import { IScreening } from "api/types";

export const ScreeningsActionNames = {
  FETCH_SCREENINGS_START: "FETCH_SCREENINGS_START",
  FETCH_SCREENINGS_SUCCESS: "FETCH_SCREENINGS_SUCCESS",
  FETCH_SCREENINGS_FAILURE: "FETCH_SCREENINGS_FAILURE",
  ADD_SCREENING_START: "ADD_SCREENING_START",
  ADD_SCREENING_SUCCESS: "ADD_SCREENING_SUCCESS",
  ADD_SCREENING_FAILURE: "ADD_SCREENING_FAILURE",
};

export interface IFetchScreeningsStartAction {
  type: typeof ScreeningsActionNames.FETCH_SCREENINGS_START;
  payload?: any;
}

export interface IFetchScreeningsSuccessAction {
  type: typeof ScreeningsActionNames.FETCH_SCREENINGS_SUCCESS;
  payload: IScreening[];
}

export interface IFetchScreeningsFailureAction {
  type: typeof ScreeningsActionNames.FETCH_SCREENINGS_FAILURE;
  payload: string;
}

export interface IAddScreeningStartAction {
  type: typeof ScreeningsActionNames.ADD_SCREENING_START;
  payload: IScreening;
}

export interface IAddScreeningSuccessAction {
  type: typeof ScreeningsActionNames.ADD_SCREENING_SUCCESS;
  payload: string;
}

export interface IAddScreeningFailureAction {
  type: typeof ScreeningsActionNames.ADD_SCREENING_FAILURE;
  payload: string;
}

export type ScreeningsActionTypes =
  | IFetchScreeningsStartAction
  | IFetchScreeningsSuccessAction
  | IFetchScreeningsFailureAction
  | IAddScreeningStartAction
  | IAddScreeningSuccessAction
  | IAddScreeningFailureAction;

export interface IScreeningsState {
  screenings: IScreening[];
  isFetching: boolean;
  error: string;
  isDataLoaded: boolean;
}
