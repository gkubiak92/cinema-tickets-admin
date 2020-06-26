import { ISeatArrangement } from "api/types";

export interface IEditHallMappedState {
  seatArrangement: ISeatArrangement;
}

export interface IEditHallRouteProps {
  id: string;
}

export interface IEditHallFormData {
  id: string;
  name: string;
  rows: number;
  seatsPerRow: number;
}
