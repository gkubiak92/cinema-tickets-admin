import { IAuthState, AuthActionTypes, AuthActionNames } from "./types";

const INITIAL_STATE: IAuthState = {
  user: null,
  isFetching: false,
  error: "",
};

const authReducer = (state = INITIAL_STATE, action: AuthActionTypes) => {
  switch (action.type) {
    case AuthActionNames.LOGIN_START:
      return {
        ...state,
        isFetching: true,
        error: "",
      };
    case AuthActionNames.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isFetching: false,
        error: "",
      };
    case AuthActionNames.LOGIN_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case AuthActionNames.LOGOUT_START:
      return {
        ...state,
        user: null,
        error: "",
      };
    default:
      return state;
  }
};

export default authReducer;
