import { HallsActionNames } from "./types";
import { IHall } from "api/types";

export const fetchHallsStartAction = () => ({
  type: HallsActionNames.FETCH_HALLS_START,
});

export const fetchHallsSuccessAction = (halls: IHall[]) => ({
  type: HallsActionNames.FETCH_HALLS_SUCCESS,
  payload: halls,
});

export const fetchHallsFailureAction = (error: string) => ({
  type: HallsActionNames.FETCH_HALLS_FAILURE,
  payload: error,
});
