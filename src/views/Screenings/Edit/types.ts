import { IScreening } from "api/types";

export interface IEditScreeningProps {
  id: string;
}

export interface IEditScreeningMappedState {
  screening: IScreening | undefined;
}
