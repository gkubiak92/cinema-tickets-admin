import { IHall } from "api/types";
import {
  HallActionsNames,
  ISetHallToEditAction,
  ISetHallDataAction,
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

export const toggleSeat = (seat: IToggleSeat): IToggleSeatAction => ({
  type: HallActionsNames.TOGGLE_SEAT,
  payload: seat,
});
