import { ISeatArrangement } from "api/types";

export interface SeatArrangementProps {
  hallId: string;
  edit?: boolean;
}

export interface ISeatArrangementMappedState {
  seatArrangement: ISeatArrangement | undefined;
}
