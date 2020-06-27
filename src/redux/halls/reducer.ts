import { IHallsState, HallsActionTypes, HallsActionNames } from "./types";

const INITIAL_STATE: IHallsState = {
  halls: [],
  isFetching: false,
  error: "",
  isDataLoaded: false,
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
        isDataLoaded: true,
      };
    case HallsActionNames.FETCH_HALLS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
        isDataLoaded: false,
      };
    default:
      return {
        ...state,
      };
  }
};

export default hallsReducer;
