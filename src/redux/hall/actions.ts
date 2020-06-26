import { ISeatArrangement, IHall } from "api/types";
import { HallActionsNames } from "./types";

export const setHallToEdit = (hall: IHall) => ({
  type: HallActionsNames.SET_HALL_TO_EDIT,
  payload: hall,
});

export const setHallSeatsAction = (seatArrangement: ISeatArrangement) => ({
  type: HallActionsNames.SET_HALL_SEATS,
  payload: seatArrangement,
});

export const addHallStartAction = (hall: IHall) => ({
  type: HallActionsNames.ADD_HALL_START,
  payload: hall,
});

export const addHallSuccessAction = (message: string) => ({
  type: HallActionsNames.ADD_HALL_SUCCESS,
  payload: message,
});

export const addHallFailureAction = (error: string) => ({
  type: HallActionsNames.ADD_HALL_FAILURE,
  payload: error,
});
