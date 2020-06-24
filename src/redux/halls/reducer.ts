import { IHallsState, HallsActionTypes, HallsActionNames } from "./types";

const INITIAL_STATE: IHallsState = {
  halls: [],
  isFetching: false,
  error: "",
};

const hallsReducer = (state = INITIAL_STATE, action: HallsActionTypes) => {
  switch (action.type) {
    case HallsActionNames.FETCH_HALLS_START:
      return {
        ...state,
        isFetching: true,
      };
    case HallsActionNames.FETCH_HALLS_SUCCESS:
      return {
        ...state,
        halls: action.payload,
      };
    case HallsActionNames.FETCH_HALLS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default hallsReducer;
