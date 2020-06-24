import { HallsActionNames } from "./types";
import { IHall } from "api/types";

export const fetchHallsStart = () => ({
  type: HallsActionNames.FETCH_HALLS_START,
});

export const fetchHallsSuccess = (halls: IHall[]) => ({
  type: HallsActionNames.FETCH_HALLS_SUCCESS,
  payload: halls,
});

export const fetchHallsFailure = (error: string) => ({
  type: HallsActionNames.FETCH_HALLS_FAILURE,
  payload: error,
});
