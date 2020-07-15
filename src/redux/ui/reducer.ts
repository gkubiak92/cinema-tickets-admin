import { UIActionTypes, UIActionNames, IUIState } from "./types";

const INITIAL_STATE: IUIState = {
  spinning: false,
  alert: {
    open: false,
    message: "",
  },
};

const uiReducer = (state = INITIAL_STATE, action: UIActionTypes) => {
  switch (action.type) {
    case UIActionNames.START_SPINNING:
      return {
        ...state,
        spinning: true,
      };
    case UIActionNames.STOP_SPINNING:
      return {
        ...state,
        spinning: false,
      };
    case UIActionNames.SHOW_ALERT:
      return {
        ...state,
        spinning: false,
        alert: {
          open: true,
          message: action.payload,
        },
      };
    case UIActionNames.HIDE_ALERT:
      return {
        ...state,
        alert: {
          open: false,
          message: "",
        },
      };
    default:
      return state;
  }
};

export default uiReducer;
