import { takeLatest, put, all, call } from "redux-saga/effects";
import {
  MoviesActionNames,
  IAddMovieStartAction,
  IDeleteMovieStartAction,
} from "./types";
import {
  fetchMoviesFailure,
  fetchMoviesSuccess,
  addMovieFailure,
  addMovieSuccess,
  deleteMovieFailure,
  deleteMovieSuccess,
} from "./actions";
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
    yield put(fetchMoviesSuccess(moviesArray));
  } catch (error) {
    yield put(fetchMoviesFailure(error));
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
    yield put(addMovieSuccess("Saved successfully"));
  } catch (error) {
    yield put(addMovieFailure(error));
  }
}

function* deleteMovieStart() {
  yield takeLatest(MoviesActionNames.DELETE_MOVIE_START, deleteMovieAsync);
}

function* deleteMovieAsync({ payload }: IDeleteMovieStartAction) {
  try {
    yield firestore.collection("movies").doc(payload).delete();
    yield put(deleteMovieSuccess(payload));
  } catch (error) {
    yield put(deleteMovieFailure(error));
  }
}

export function* moviesSagas() {
  yield all([
    call(fetchMoviesStart),
    call(addMovieStart),
    call(deleteMovieStart),
  ]);
}
