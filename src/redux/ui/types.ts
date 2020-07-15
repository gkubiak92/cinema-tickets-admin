export enum UIActionNames {
  START_SPINNING = "START_SPINNING",
  STOP_SPINNING = "STOP_SPINNING",
  SHOW_ALERT = "SHOW_ALERT",
  HIDE_ALERT = "HIDE_ALERT",
}

export interface IStartSpinningAction {
  type: UIActionNames.START_SPINNING;
}

export interface IStopSpinningAction {
  type: UIActionNames.STOP_SPINNING;
}

export interface IShowAlertAction {
  type: UIActionNames.SHOW_ALERT;
  payload: string;
}

export interface IHideAlertAction {
  type: UIActionNames.HIDE_ALERT;
}

export type UIActionTypes =
  | IStartSpinningAction
  | IStopSpinningAction
  | IShowAlertAction
  | IHideAlertAction;

export interface IUIState {
  spinning: boolean;
  alert: {
    open: boolean;
    message: string;
  };
}
