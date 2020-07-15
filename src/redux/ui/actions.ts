import {
  IStartSpinningAction,
  UIActionNames,
  IStopSpinningAction,
  IShowAlertAction,
  IHideAlertAction,
} from "./types";

export const startSpinning = (): IStartSpinningAction => ({
  type: UIActionNames.START_SPINNING,
});

export const stopSpinning = (): IStopSpinningAction => ({
  type: UIActionNames.STOP_SPINNING,
});

export const showAlert = (message: string): IShowAlertAction => ({
  type: UIActionNames.SHOW_ALERT,
  payload: message,
});

export const hideAlert = (): IHideAlertAction => ({
  type: UIActionNames.HIDE_ALERT,
});
