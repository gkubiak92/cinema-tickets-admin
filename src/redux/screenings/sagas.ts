import { takeLatest, put, all, call } from "redux-saga/effects";
import {
  fetchScreeningsFailureAction,
  fetchScreeningsSuccessAction,
} from "./actions";
import {
  firestore,
  convertFirestoreCollectionToArray,
} from "firebase/firebase.utils";
import { ScreeningsActionNames } from "./types";

function* fetchScreeningsStart() {
  yield takeLatest(
    ScreeningsActionNames.FETCH_SCREENINGS_START,
    fetchScreeningsAsync
  );
}

function* fetchScreeningsAsync() {
  try {
    console.log("dupa");
    const screeningsCollectionRef = firestore.collection("screenings");
    const screeningsCollectionSnapshot = yield screeningsCollectionRef.get();
    const screeningsArray = yield convertFirestoreCollectionToArray(
      screeningsCollectionSnapshot
    );
    yield put(fetchScreeningsSuccessAction(screeningsArray));
  } catch (error) {
    yield put(fetchScreeningsFailureAction(error));
  }
}

export function* screeningsSagas() {
  yield all([call(fetchScreeningsStart)]);
}
