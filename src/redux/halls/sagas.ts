import { takeLatest, put, all, call } from "redux-saga/effects";
import { HallsActionNames } from "./types";
import {
  firestore,
  convertFirestoreCollectionToArray,
} from "firebase/firebase.utils";
import { fetchHallsFailure, fetchHallsSuccess } from "./actions";
import { FirestoreCollections } from "api/types";

function* fetchHallsStart() {
  yield takeLatest(HallsActionNames.FETCH_HALLS_START, fetchHallsAsync);
}

function* fetchHallsAsync() {
  try {
    const hallsCollectionRef = firestore.collection(FirestoreCollections.halls);
    const hallsCollectionSnapshot = yield hallsCollectionRef.get();
    const halls = yield convertFirestoreCollectionToArray(
      hallsCollectionSnapshot
    );
    yield put(fetchHallsSuccess(halls));
  } catch (error) {
    yield put(fetchHallsFailure(error));
  }
}

export function* hallsSagas() {
  yield all([call(fetchHallsStart)]);
}
