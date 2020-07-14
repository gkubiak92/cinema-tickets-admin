import { UIActionTypes, UIActionNames, IUIState } from "./types";

const INITIAL_STATE: IUIState = {
  spinning: false,
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
    default:
      return state;
  }
};

export default uiReducer;
