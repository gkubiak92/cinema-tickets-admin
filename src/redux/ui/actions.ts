import {
  IStartSpinningAction,
  UIActionNames,
  IStopSpinningAction,
} from "./types";

export const startSpinning = (): IStartSpinningAction => ({
  type: UIActionNames.START_SPINNING,
});

export const stopSpinning = (): IStopSpinningAction => ({
  type: UIActionNames.STOP_SPINNING,
});
