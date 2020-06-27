import { takeLatest, put, all, call } from "redux-saga/effects";
import { HallsActionNames } from "./types";
import {
  firestore,
  convertFirestoreCollectionToArray,
} from "firebase/firebase.utils";
import { fetchHallsFailure, fetchHallsSuccess } from "./actions";

function* fetchHallsStart() {
  yield takeLatest(HallsActionNames.FETCH_HALLS_START, fetchHallsAsync);
}

function* fetchHallsAsync() {
  try {
    const hallsCollectionRef = firestore.collection("hallsArrangement");
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
