export enum UIActionNames {
  START_SPINNING = "START_SPINNING",
  STOP_SPINNING = "STOP_SPINNING",
}

export interface IStartSpinningAction {
  type: UIActionNames.START_SPINNING;
}

export interface IStopSpinningAction {
  type: UIActionNames.STOP_SPINNING;
}

export type UIActionTypes = IStartSpinningAction | IStopSpinningAction;

export interface IUIState {
  spinning: boolean;
}
