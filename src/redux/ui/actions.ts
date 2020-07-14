import {
  IStartSpinningAction,
  UIActionNames,
  IStopSpinningAction,
} from "./types";

export const startSpinningAction = (): IStartSpinningAction => ({
  type: UIActionNames.START_SPINNING,
});

export const stopSpinningAction = (): IStopSpinningAction => ({
  type: UIActionNames.STOP_SPINNING,
});
