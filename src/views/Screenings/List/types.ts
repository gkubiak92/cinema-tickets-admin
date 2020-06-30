import { IScreening } from "api/types";
import {
  fetchScreeningsStart,
  deleteScreeningStart,
} from "redux/screenings/actions";

export interface IScreeningsListMappedDispatch {
  fetchScreeningsStart: typeof fetchScreeningsStart;
  deleteScreeningStart: typeof deleteScreeningStart;
}

export interface IScreeningsListMappedState {
  screenings: IScreening[];
  isDataLoaded: boolean;
}

export type ScreeningsListProps = IScreeningsListMappedDispatch &
  IScreeningsListMappedState;
