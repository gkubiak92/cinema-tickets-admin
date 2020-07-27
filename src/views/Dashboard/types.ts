import { fetchMoviesStart } from "redux/movies/actions";
import { fetchHallsStart } from "redux/halls/actions";

type MappedDispatch = {
  fetchMoviesStart: typeof fetchMoviesStart;
  fetchHallsStart: typeof fetchHallsStart;
};

export type Props = MappedDispatch;
