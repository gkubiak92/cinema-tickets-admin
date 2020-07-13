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

export const loginStartAction = (loginData: ILoginData): ILoginStartAction => ({
  type: AuthActionNames.LOGIN_START,
  payload: loginData,
});

export const loginSuccessAction = (token: Object): ILoginSuccessAction => ({
  type: AuthActionNames.LOGIN_SUCCESS,
  payload: token,
});

export const loginFailureAction = (error: string): ILoginFailureAction => ({
  type: AuthActionNames.LOGIN_FAILURE,
  payload: error,
});

export const logoutStartAction = (): ILogoutStartAction => ({
  type: AuthActionNames.LOGOUT_START,
});

export const logoutSuccessAction = (): ILogoutSuccessAction => ({
  type: AuthActionNames.LOGOUT_SUCCESS,
});

export const logoutFailureAction = (error: string): ILogoutFailureAction => ({
  type: AuthActionNames.LOGOUT_FAILURE,
  payload: error,
});
