import { IScreening } from "api/types";

export interface IScreeningsListMappedDispatch {
  fetchScreeningsStart: () => void;
}

export interface IScreeningsListMappedState {
  screenings: IScreening[];
}
