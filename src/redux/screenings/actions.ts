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
