import { fetchMoviesStart } from "redux/movies/actions";
import { fetchHallsStart } from "redux/halls/actions";

export interface IAppMappedDispatch {
    fetchMoviesStart: typeof fetchMoviesStart;
    fetchHallsStart: typeof fetchHallsStart;
}