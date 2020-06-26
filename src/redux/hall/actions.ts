import { ISeatArrangement, IHall } from "api/types";
import {
  HallActionsNames,
  ISetHallToEdit,
  ISetHallSeats,
  IAddHallStartAction,
  IAddHallSuccessAction,
  IAddHallFailureAction,
} from "./types";

export const setHallToEdit = (hall: IHall): ISetHallToEdit => ({
  type: HallActionsNames.SET_HALL_TO_EDIT,
  payload: hall,
});

export const setHallSeatsAction = (
  seatArrangement: ISeatArrangement
): ISetHallSeats => ({
  type: HallActionsNames.SET_HALL_SEATS,
  payload: seatArrangement,
});

export const addHallStartAction = (hall: IHall): IAddHallStartAction => ({
  type: HallActionsNames.ADD_HALL_START,
  payload: hall,
});

export const addHallSuccessAction = (
  message: string
): IAddHallSuccessAction => ({
  type: HallActionsNames.ADD_HALL_SUCCESS,
  payload: message,
});

export const addHallFailureAction = (error: string): IAddHallFailureAction => ({
  type: HallActionsNames.ADD_HALL_FAILURE,
  payload: error,
});
