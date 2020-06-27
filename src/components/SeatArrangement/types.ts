import { ISeatArrangement } from "api/types";

export interface ISeatArrangementMappedState {
  seatArrangement: ISeatArrangement | undefined;
}

export type Props = {
  hallId: string;
  edit?: boolean;
} & ISeatArrangementMappedState;