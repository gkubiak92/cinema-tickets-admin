import { takeLatest, put, all, call } from "redux-saga/effects";
import {
  fetchScreeningsFailure,
  fetchScreeningsSuccess,
  addScreeningFailure,
  addScreeningSuccess,
} from "./actions";
import {
  firestore,
  convertFirestoreCollectionToArray,
} from "firebase/firebase.utils";
import { ScreeningsActionNames, IAddScreeningStartAction } from "./types";
import { FirestoreCollections } from "api/types";

function* fetchScreeningsStart() {
  yield takeLatest(
    ScreeningsActionNames.FETCH_SCREENINGS_START,
    fetchScreeningsAsync
  );
}

function* fetchScreeningsAsync() {
  try {
    const screeningsCollectionRef = firestore.collection(
      FirestoreCollections.screenings
    );
    const screeningsCollectionSnapshot = yield screeningsCollectionRef.get();
    const screeningsArray = yield convertFirestoreCollectionToArray(
      screeningsCollectionSnapshot
    );
    yield put(fetchScreeningsSuccess(screeningsArray));
  } catch (error) {
    yield put(fetchScreeningsFailure(error));
  }
}

function* addScreeningStart() {
  yield takeLatest(
    ScreeningsActionNames.ADD_SCREENING_START,
    addScreeningAsync
  );
}

function* addScreeningAsync({ payload }: IAddScreeningStartAction) {
  try {
    const newScreeningDocRef = payload.id
      ? firestore.collection(FirestoreCollections.screenings).doc(payload.id)
      : firestore.collection(FirestoreCollections.screenings).doc();
    yield newScreeningDocRef.set({ ...payload });
    yield put(addScreeningSuccess("Saved screening successfully"));
  } catch (error) {
    yield put(addScreeningFailure(error));
  }
}

export function* screeningsSagas() {
  yield all([call(fetchScreeningsStart), call(addScreeningStart)]);
}
