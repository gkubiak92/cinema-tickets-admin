import { takeLatest, put, all, call } from "redux-saga/effects";
import {
  fetchScreeningsFailureAction,
  fetchScreeningsSuccessAction,
  addScreeningFailureAction,
  addScreeningSuccessAction,
} from "./actions";
import {
  firestore,
  convertFirestoreCollectionToArray,
} from "firebase/firebase.utils";
import { ScreeningsActionNames, IAddScreeningStart } from "./types";

function* fetchScreeningsStart() {
  yield takeLatest(
    ScreeningsActionNames.FETCH_SCREENINGS_START,
    fetchScreeningsAsync
  );
}

function* fetchScreeningsAsync() {
  try {
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

function* addScreeningStart() {
  yield takeLatest(
    ScreeningsActionNames.ADD_SCREENING_START,
    addScreeningAsync
  );
}

function* addScreeningAsync({ payload }: IAddScreeningStart) {
  try {
    const newScreeningDocRef = payload.id
      ? firestore.collection("screenings").doc(payload.id)
      : firestore.collection("screenings").doc();
    yield newScreeningDocRef.set({ ...payload });
    yield put(addScreeningSuccessAction("Saved screening successfully"));
  } catch (error) {
    yield put(addScreeningFailureAction(error));
  }
}

export function* screeningsSagas() {
  yield all([call(fetchScreeningsStart), call(addScreeningStart)]);
}
