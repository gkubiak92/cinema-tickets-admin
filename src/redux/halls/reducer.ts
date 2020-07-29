import { IHallsState, HallsActionTypes, HallsActionsNames } from "./types";
import { deleteItemFromList } from "redux/utils";

const INITIAL_STATE: IHallsState = {
  halls: [],
  isFetching: false,
  error: "",
  isDataLoaded: false,
};

const hallsReducer = (state = INITIAL_STATE, action: HallsActionTypes) => {
  switch (action.type) {
    case HallsActionsNames.FETCH_HALLS_START:
      return {
        ...state,
        isFetching: true,
      };
    case HallsActionsNames.FETCH_HALLS_SUCCESS:
      return {
        ...state,
        halls: action.payload,
        isDataLoaded: true,
      };
    case HallsActionsNames.FETCH_HALLS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
        isDataLoaded: false,
      };
    case HallsActionsNames.ADD_HALL_SUCCESS:
      return {
        ...state,
        error: "",
        //halls: addItemToList(state.halls, action.payload),
      };
    case HallsActionsNames.DELETE_HALL_SUCCESS:
      return {
        ...state,
        halls: deleteItemFromList(state.halls, action.payload),
      };
    default:
      return state
  }
};

export default hallsReducer;
