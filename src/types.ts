import { fetchMoviesStart } from "redux/movies/actions";
import { fetchHallsStart } from "redux/halls/actions";

export interface IAppMappedState {
  isAuthenticated: boolean;
}

export interface IAppMappedDispatch {
  fetchMoviesStart: typeof fetchMoviesStart;
  fetchHallsStart: typeof fetchHallsStart;
}

export type IAppProps = IAppMappedState & IAppMappedDispatch;
