import { takeLatest, put, all, call } from "redux-saga/effects";
import { MoviesActionNames } from "./types";
import {
  fetchMoviesFailureAction,
  fetchMoviesSuccessAction,
} from "./movies.actions";
import {
  firestore,
  convertFirestoreCollectionToArray,
} from "firebase/firebase.utils";

function* fetchMoviesStart() {
  yield takeLatest(MoviesActionNames.FETCH_MOVIES_START, fetchMoviesAsync);
}

function* fetchMoviesAsync() {
  try {
    const moviesCollectionRef = firestore.collection("movies");
    const moviesSnapshot = yield moviesCollectionRef.get();
    const moviesArray = convertFirestoreCollectionToArray(moviesSnapshot);
    console.log(moviesArray);
    yield put(fetchMoviesSuccessAction(moviesArray));
  } catch (error) {
    yield put(fetchMoviesFailureAction(error));
  }
}

export function* moviesSagas() {
  yield all([call(fetchMoviesStart)]);
}
