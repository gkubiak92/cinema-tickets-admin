import {
  HallsActionsNames,
  IFetchHallsStartAction,
  IFetchHallsSuccessAction,
  IFetchHallsFailureAction,
  IAddHallStartAction,
  IAddHallSuccessAction,
  IAddHallFailureAction,
  IDeleteHallSuccessAction,
  IDeleteHallFailureAction,
  IDeleteHallStartAction,
} from "./types";
import { IHall } from "api/types";

export const fetchHallsStart = (): IFetchHallsStartAction => ({
  type: HallsActionsNames.FETCH_HALLS_START,
});

export const fetchHallsSuccess = (
  halls: IHall[]
): IFetchHallsSuccessAction => ({
  type: HallsActionsNames.FETCH_HALLS_SUCCESS,
  payload: halls,
});

export const fetchHallsFailure = (error: string): IFetchHallsFailureAction => ({
  type: HallsActionsNames.FETCH_HALLS_FAILURE,
  payload: error,
});

export const addHallStart = (hall: IHall): IAddHallStartAction => ({
  type: HallsActionsNames.ADD_HALL_START,
  payload: hall,
});

export const addHallSuccess = (hall: IHall): IAddHallSuccessAction => ({
  type: HallsActionsNames.ADD_HALL_SUCCESS,
  payload: hall,
});

export const addHallFailure = (error: string): IAddHallFailureAction => ({
  type: HallsActionsNames.ADD_HALL_FAILURE,
  payload: error,
});

export const deleteHallStart = (id: string): IDeleteHallStartAction => ({
  type: HallsActionsNames.DELETE_HALL_START,
  payload: id,
});

export const deleteHallSuccess = (id: string): IDeleteHallSuccessAction => ({
  type: HallsActionsNames.DELETE_HALL_SUCCESS,
  payload: id,
});

export const deleteHallFailure = (error: string): IDeleteHallFailureAction => ({
  type: HallsActionsNames.DELETE_HALL_FAILURE,
  payload: error,
});
