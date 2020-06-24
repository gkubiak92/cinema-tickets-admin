import { all, call } from "redux-saga/effects";
import { moviesSagas } from "./movies/movies.sagas";
import { hallsSagas } from "./halls/halls.sagas";
import { screeningsSagas } from "./screenings/sagas";

export default function* rootSaga() {
  yield all([call(moviesSagas), call(hallsSagas), call(screeningsSagas)]);
}
