import { ISeatArrangement } from "api/types";

export interface ISeatArrangementProps {
  hallId: string;
  edit?: boolean;
}

export interface ISeatArrangementMappedState {
  seatArrangement: ISeatArrangement | undefined;
}
