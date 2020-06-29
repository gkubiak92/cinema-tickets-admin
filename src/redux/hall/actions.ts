import { IHall } from "api/types";
import {
  HallActionsNames,
  ISetHallToEditAction,
  ISetHallDataAction,
  IAddHallStartAction,
  IAddHallSuccessAction,
  IAddHallFailureAction,
  IToggleSeat,
  IToggleSeatAction,
} from "./types";
import { IEditHallFormData } from "views/Halls/Edit/types";

export const setHallToEdit = (hall: IHall): ISetHallToEditAction => ({
  type: HallActionsNames.SET_HALL_TO_EDIT,
  payload: hall,
});

export const setHallData = (
  hallData: IEditHallFormData
): ISetHallDataAction => ({
  type: HallActionsNames.SET_HALL_DATA,
  payload: hallData,
});

export const addHallStart = (hall: IHall): IAddHallStartAction => ({
  type: HallActionsNames.ADD_HALL_START,
  payload: hall,
});

export const addHallSuccess = (message: string): IAddHallSuccessAction => ({
  type: HallActionsNames.ADD_HALL_SUCCESS,
  payload: message,
});

export const addHallFailure = (error: string): IAddHallFailureAction => ({
  type: HallActionsNames.ADD_HALL_FAILURE,
  payload: error,
});

export const toggleSeat = (seat: IToggleSeat): IToggleSeatAction => ({
  type: HallActionsNames.TOGGLE_SEAT,
  payload: seat,
});
