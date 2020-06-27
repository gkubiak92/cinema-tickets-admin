import { IScreening } from "api/types";
import { fetchScreeningsStart } from "redux/screenings/actions";

export interface IScreeningsListMappedDispatch {
  fetchScreeningsStart: typeof fetchScreeningsStart;
}

export interface IScreeningsListMappedState {
  screenings: IScreening[];
  isDataLoaded: boolean;
}

export type ScreeningsListProps = IScreeningsListMappedDispatch & IScreeningsListMappedState
