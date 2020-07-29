import {
  IScreeningsState,
  ScreeningsActionTypes,
  ScreeningsActionNames,
} from "./types";
import { addItemToList, deleteItemFromList } from "redux/utils";

const INITIAL_STATE: IScreeningsState = {
  screenings: [],
  isFetching: false,
  error: "",
  isDataLoaded: false,
};

const screeningsReducer = (
  state = INITIAL_STATE,
  action: ScreeningsActionTypes
) => {
  switch (action.type) {
    case ScreeningsActionNames.FETCH_SCREENINGS_START:
      return {
        ...state,
        isFetching: true,
        error: "",
      };
    case ScreeningsActionNames.FETCH_SCREENINGS_SUCCESS:
      return {
        screenings: action.payload,
        isFetching: false,
        error: false,
        isDataLoaded: true,
      };
    case ScreeningsActionNames.FETCH_SCREENINGS_FAILURE:
    case ScreeningsActionNames.DELETE_SCREENING_FAILURE:
      return {
        ...state,
        isFetching: false,
        isDataLoaded: false,
        error: action.payload,
      };
    case ScreeningsActionNames.ADD_SCREENING_SUCCESS:
      return {
        ...state,
        screenings: addItemToList(state.screenings, action.payload),
        isFetching: false,
      };
    case ScreeningsActionNames.DELETE_SCREENING_SUCCESS:
      return {
        ...state,
        screenings: deleteItemFromList(state.screenings, action.payload),
      };

    default:
      return state
  }
};

export default screeningsReducer;
