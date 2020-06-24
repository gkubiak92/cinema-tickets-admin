import { ScreeningsActionNames } from "./types";
import { IScreening } from "api/types";

export const fetchScreeningsStartAction = () => ({
  type: ScreeningsActionNames.FETCH_SCREENINGS_START,
});

export const fetchScreeningsSuccessAction = (screenings: IScreening[]) => ({
  type: ScreeningsActionNames.FETCH_SCREENINGS_SUCCESS,
  payload: screenings,
});

export const fetchScreeningsFailureAction = (error: string) => ({
  type: ScreeningsActionNames.FETCH_SCREENINGS_FAILURE,
  payload: error,
});

export const addScreeningStartAction = (screening: IScreening) => ({
  type: ScreeningsActionNames.ADD_SCREENING_START,
  payload: screening,
});

export const addScreeningSuccessAction = (message: string) => ({
  type: ScreeningsActionNames.ADD_SCREENING_SUCCESS,
  payload: message,
});

export const addScreeningFailureAction = (error: string) => ({
  type: ScreeningsActionNames.ADD_SCREENING_FAILURE,
  payload: error,
});
