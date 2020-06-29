import { all, call } from "redux-saga/effects";
import { moviesSagas } from "./movies/sagas";
import { hallsSagas } from "./halls/sagas";
import { screeningsSagas } from "./screenings/sagas";
import { hallSagas } from "./hall/sagas";

export default function* rootSaga() {
  yield all([
    call(moviesSagas),
    call(hallsSagas),
    call(screeningsSagas),
    call(hallSagas),
  ]);
}
