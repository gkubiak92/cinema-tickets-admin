export enum AuthActionNames {
  LOGIN_START = "LOGIN_START",
  LOGIN_SUCCESS = "LOGIN_SUCCESS",
  LOGIN_FAILURE = "LOGIN_FAILURE",
  LOGOUT_START = "LOGOUT_START",
  LOGOUT_SUCCESS = "LOGOUT_SUCCESS",
  LOGOUT_FAILURE = "LOGOUT_FAILURE",
}

export interface ILoginData {
  email: string;
  password: string;
}

export interface ILoginStartAction {
  type: AuthActionNames.LOGIN_START;
  payload: ILoginData;
}

export interface ILoginSuccessAction {
  type: AuthActionNames.LOGIN_SUCCESS;
  payload: Object;
}

export interface ILoginFailureAction {
  type: AuthActionNames.LOGIN_FAILURE;
  payload: string;
}

export interface ILogoutStartAction {
  type: AuthActionNames.LOGOUT_START;
}

export interface ILogoutSuccessAction {
  type: AuthActionNames.LOGOUT_SUCCESS;
}

export interface ILogoutFailureAction {
  type: AuthActionNames.LOGOUT_FAILURE;
  payload: string;
}

export type AuthActionTypes =
  | ILoginStartAction
  | ILoginSuccessAction
  | ILoginFailureAction
  | ILogoutStartAction
  | ILogoutSuccessAction
  | ILogoutFailureAction;

export interface IAuthState {
  user: Object | null;
  isFetching: boolean;
  error: string;
}
