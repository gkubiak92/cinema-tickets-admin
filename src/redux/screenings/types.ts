import { IScreening } from "api/types";

export const ScreeningsActionNames = {
  FETCH_SCREENINGS_START: "FETCH_SCREENINGS_START",
  FETCH_SCREENINGS_SUCCESS: "FETCH_SCREENINGS_SUCCESS",
  FETCH_SCREENINGS_FAILURE: "FETCH_SCREENINGS_FAILURE",
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

export type ScreeningsActionTypes =
  | IFetchScreeningsStart
  | IFetchScreeningsSuccess
  | IFetchScreeningsFailure;

export interface IScreeningsState {
  screenings: IScreening[];
  isFetching: boolean;
  error: string;
}
