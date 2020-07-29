import { IHallState, HallActionsTypes, HallActionsNames } from "./types";
import { getSeatArrangementFromSeatsMap, toggleSeat } from "./utils";

const INITIAL_STATE: IHallState = {
  id: "",
  name: "",
  seatArrangement: {},
};

const hallReducer = (state = INITIAL_STATE, action: HallActionsTypes) => {
  switch (action.type) {
    case HallActionsNames.SET_HALL_TO_EDIT:
      return {
        ...state,
        id: action.payload.id,
        name: action.payload.name,
        seatArrangement: action.payload.seatArrangement,
      };
    case HallActionsNames.SET_HALL_DATA:
      const { id, name } = action.payload;
      return {
        ...state,
        id,
        name,
        seatArrangement: getSeatArrangementFromSeatsMap(action.payload),
      };
    case HallActionsNames.TOGGLE_SEAT:
      return {
        ...state,
        seatArrangement: toggleSeat(action.payload, state.seatArrangement),
      };

    default:
      return state
  }
};

export default hallReducer;
