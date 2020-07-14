import {
  ILoginData,
  AuthActionNames,
  ILoginStartAction,
  ILoginSuccessAction,
  ILoginFailureAction,
  ILogoutStartAction,
  ILogoutSuccessAction,
  ILogoutFailureAction,
} from "./types";

export const loginStart = (loginData: ILoginData): ILoginStartAction => ({
  type: AuthActionNames.LOGIN_START,
  payload: loginData,
});

export const loginSuccess = (token: Object): ILoginSuccessAction => ({
  type: AuthActionNames.LOGIN_SUCCESS,
  payload: token,
});

export const loginFailure = (error: string): ILoginFailureAction => ({
  type: AuthActionNames.LOGIN_FAILURE,
  payload: error,
});

export const logoutStart = (): ILogoutStartAction => ({
  type: AuthActionNames.LOGOUT_START,
});

export const logoutSuccess = (): ILogoutSuccessAction => ({
  type: AuthActionNames.LOGOUT_SUCCESS,
});

export const logoutFailure = (error: string): ILogoutFailureAction => ({
  type: AuthActionNames.LOGOUT_FAILURE,
  payload: error,
});
