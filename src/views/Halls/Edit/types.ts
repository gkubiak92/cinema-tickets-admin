import { ISeatArrangement } from "api/types";

export interface IEditHallFormData {
  id: string;
  name: string;
  rows: number;
  seatsPerRow: number;
}