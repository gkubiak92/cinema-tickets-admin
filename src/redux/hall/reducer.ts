import { IHallState, HallActionsTypes, HallActionsNames } from "./types";

const INITIAL_STATE: IHallState = {
  id: "",
  name: "",
  seatArrangement: {},
  error: "",
  message: "",
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
    case HallActionsNames.SET_HALL_SEATS:
      return {
        ...state,
        seatArrangement: action.payload,
      };
    case HallActionsNames.ADD_HALL_SUCCESS:
      return {
        ...state,
        error: "",
        message: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default hallReducer;
