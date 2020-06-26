import {
  HallsActionNames,
  IFetchHallsStart,
  IFetchHallsSuccess,
  IFetchHallsFailure,
} from "./types";
import { IHall } from "api/types";

export const fetchHallsStartAction = (): IFetchHallsStart => ({
  type: HallsActionNames.FETCH_HALLS_START,
});

export const fetchHallsSuccessAction = (
  halls: IHall[]
): IFetchHallsSuccess => ({
  type: HallsActionNames.FETCH_HALLS_SUCCESS,
  payload: halls,
});

export const fetchHallsFailureAction = (error: string): IFetchHallsFailure => ({
  type: HallsActionNames.FETCH_HALLS_FAILURE,
  payload: error,
});
