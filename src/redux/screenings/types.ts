import { IScreening } from "api/types";

export enum ScreeningsActionNames {
  FETCH_SCREENINGS_START = "FETCH_SCREENINGS_START",
  FETCH_SCREENINGS_SUCCESS = "FETCH_SCREENINGS_SUCCESS",
  FETCH_SCREENINGS_FAILURE = "FETCH_SCREENINGS_FAILURE",
  ADD_SCREENING_START = "ADD_SCREENING_START",
  ADD_SCREENING_SUCCESS = "ADD_SCREENING_SUCCESS",
  ADD_SCREENING_FAILURE = "ADD_SCREENING_FAILURE",
  DELETE_SCREENING_START = "DELETE_SCREENING_START",
  DELETE_SCREENING_SUCCESS = "DELETE_SCREENING_SUCCESS",
  DELETE_SCREENING_FAILURE = "DELETE_SCREENING_FAILURE",
}

export interface IFetchScreeningsStartAction {
  type: ScreeningsActionNames.FETCH_SCREENINGS_START;
}

export interface IFetchScreeningsSuccessAction {
  type: ScreeningsActionNames.FETCH_SCREENINGS_SUCCESS;
  payload: IScreening[];
}

export interface IFetchScreeningsFailureAction {
  type: ScreeningsActionNames.FETCH_SCREENINGS_FAILURE;
  payload: string;
}

export interface IAddScreeningStartAction {
  type: ScreeningsActionNames.ADD_SCREENING_START;
  payload: IScreening;
}

export interface IAddScreeningSuccessAction {
  type: ScreeningsActionNames.ADD_SCREENING_SUCCESS;
  payload: IScreening;
}

export interface IAddScreeningFailureAction {
  type: ScreeningsActionNames.ADD_SCREENING_FAILURE;
  payload: string;
}

export interface IDeleteScreeningStartAction {
  type: ScreeningsActionNames.DELETE_SCREENING_START;
  payload: string;
}

export interface IDeleteScreeningSuccessAction {
  type: ScreeningsActionNames.DELETE_SCREENING_SUCCESS;
  payload: string;
}

export interface IDeleteScreeningFailureAction {
  type: ScreeningsActionNames.DELETE_SCREENING_FAILURE;
  payload: string;
}

export type ScreeningsActionTypes =
  | IFetchScreeningsStartAction
  | IFetchScreeningsSuccessAction
  | IFetchScreeningsFailureAction
  | IAddScreeningStartAction
  | IAddScreeningSuccessAction
  | IAddScreeningFailureAction
  | IDeleteScreeningStartAction
  | IDeleteScreeningSuccessAction
  | IDeleteScreeningFailureAction;

export interface IScreeningsState {
  screenings: IScreening[];
  isFetching: boolean;
  error: string;
  isDataLoaded: boolean;
}
