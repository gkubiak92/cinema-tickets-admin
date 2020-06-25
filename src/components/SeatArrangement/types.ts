import { ISeatArrangement } from "api/types";

export interface ISeatArrangementProps {
  hallId: string;
}

export interface ISeatArrangementMappedState {
  seatArrangement: ISeatArrangement | undefined;
}
