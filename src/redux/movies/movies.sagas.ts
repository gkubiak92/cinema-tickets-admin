import { takeLatest, put, all, call } from "redux-saga/effects";
import { MoviesActionNames, IAddMovieStartAction } from "./types";
import {
  fetchMoviesFailureAction,
  fetchMoviesSuccessAction,
  addMovieFailureAction,
  addMovieSuccessAction,
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

function* addMovieStart() {
  yield takeLatest(MoviesActionNames.ADD_MOVIE_START, addMovieAsync);
}

function* addMovieAsync({ payload }: IAddMovieStartAction) {
  try {
    const newMovieRef = payload.id
      ? firestore.collection("movies").doc(payload.id)
      : firestore.collection("movies").doc();
    yield newMovieRef.set({ ...payload });
    yield put(addMovieSuccessAction("Successfully added movie to database"));
  } catch (error) {
    yield put(addMovieFailureAction(error));
  }
}

export function* moviesSagas() {
  yield all([call(fetchMoviesStart), call(addMovieStart)]);
}
