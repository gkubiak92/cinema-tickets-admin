import { ISeatArrangement } from "api/types";
import { toggleSeat } from "redux/hall/actions";

export interface ISeatArrangementMappedState {
  seatArrangement?: ISeatArrangement | undefined;
}

export interface ISeatArrangementMappedDispatch {
  toggleSeat: typeof toggleSeat;
}

export type SeatArrangementProps = {
  hallId: string;
  edit?: boolean;
};
