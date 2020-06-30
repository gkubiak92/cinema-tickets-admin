import {
  ScreeningsActionNames,
  IFetchScreeningsStartAction,
  IFetchScreeningsSuccessAction,
  IFetchScreeningsFailureAction,
  IAddScreeningStartAction,
  IAddScreeningSuccessAction,
  IAddScreeningFailureAction,
  IDeleteScreeningStartAction,
  IDeleteScreeningSuccessAction,
  IDeleteScreeningFailureAction,
} from "./types";
import { IScreening } from "api/types";

export const fetchScreeningsStart = (): IFetchScreeningsStartAction => ({
  type: ScreeningsActionNames.FETCH_SCREENINGS_START,
});

export const fetchScreeningsSuccess = (
  screenings: IScreening[]
): IFetchScreeningsSuccessAction => ({
  type: ScreeningsActionNames.FETCH_SCREENINGS_SUCCESS,
  payload: screenings,
});

export const fetchScreeningsFailure = (
  error: string
): IFetchScreeningsFailureAction => ({
  type: ScreeningsActionNames.FETCH_SCREENINGS_FAILURE,
  payload: error,
});

export const addScreeningStart = (
  screening: IScreening
): IAddScreeningStartAction => ({
  type: ScreeningsActionNames.ADD_SCREENING_START,
  payload: screening,
});

export const addScreeningSuccess = (
  screening: IScreening
): IAddScreeningSuccessAction => ({
  type: ScreeningsActionNames.ADD_SCREENING_SUCCESS,
  payload: screening,
});

export const addScreeningFailure = (
  error: string
): IAddScreeningFailureAction => ({
  type: ScreeningsActionNames.ADD_SCREENING_FAILURE,
  payload: error,
});

export const deleteScreeningStart = (
  id: string
): IDeleteScreeningStartAction => ({
  type: ScreeningsActionNames.DELETE_SCREENING_START,
  payload: id,
});

export const deleteScreeningSuccess = (
  id: string
): IDeleteScreeningSuccessAction => ({
  type: ScreeningsActionNames.DELETE_SCREENING_SUCCESS,
  payload: id,
});

export const deleteScreeningFailure = (
  error: string
): IDeleteScreeningFailureAction => ({
  type: ScreeningsActionNames.DELETE_SCREENING_FAILURE,
  payload: error,
});
