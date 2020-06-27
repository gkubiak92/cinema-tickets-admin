import {
  HallsActionNames,
  IFetchHallsStartAction,
  IFetchHallsSuccessAction,
  IFetchHallsFailureAction,
} from "./types";
import { IHall } from "api/types";

export const fetchHallsStart = (): IFetchHallsStartAction => ({
  type: HallsActionNames.FETCH_HALLS_START,
});

export const fetchHallsSuccess = (
  halls: IHall[]
): IFetchHallsSuccessAction => ({
  type: HallsActionNames.FETCH_HALLS_SUCCESS,
  payload: halls,
});

export const fetchHallsFailure = (error: string): IFetchHallsFailureAction => ({
  type: HallsActionNames.FETCH_HALLS_FAILURE,
  payload: error,
});
