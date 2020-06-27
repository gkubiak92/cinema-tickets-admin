import { ScreeningsActionNames } from "./types";
import { IScreening } from "api/types";

export const fetchScreeningsStart = () => ({
  type: ScreeningsActionNames.FETCH_SCREENINGS_START,
});

export const fetchScreeningsSuccess = (screenings: IScreening[]) => ({
  type: ScreeningsActionNames.FETCH_SCREENINGS_SUCCESS,
  payload: screenings,
});

export const fetchScreeningsFailure = (error: string) => ({
  type: ScreeningsActionNames.FETCH_SCREENINGS_FAILURE,
  payload: error,
});

export const addScreeningStart = (screening: IScreening) => ({
  type: ScreeningsActionNames.ADD_SCREENING_START,
  payload: screening,
});

export const addScreeningSuccess = (message: string) => ({
  type: ScreeningsActionNames.ADD_SCREENING_SUCCESS,
  payload: message,
});

export const addScreeningFailure = (error: string) => ({
  type: ScreeningsActionNames.ADD_SCREENING_FAILURE,
  payload: error,
});
