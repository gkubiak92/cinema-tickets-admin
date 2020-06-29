import { takeLatest, put, all, call } from "redux-saga/effects";
import { HallActionsNames, IAddHallStartAction } from "./types";
import { addHallFailure, addHallSuccess } from "./actions";
import { firestore } from "firebase/firebase.utils";
import { FirestoreCollections } from "api/types";

function* addHallStart() {
  yield takeLatest(HallActionsNames.ADD_HALL_START, addHallAsync);
}

function* addHallAsync({ payload }: IAddHallStartAction) {
  try {
    const hallRef = payload.id
      ? firestore.collection(FirestoreCollections.halls).doc(payload.id)
      : firestore.collection(FirestoreCollections.halls).doc();
    yield hallRef.set({ ...payload });
    yield put(addHallSuccess("Saved hall successfully"));
  } catch (error) {
    yield put(addHallFailure(error));
  }
}

export function* hallSagas() {
  yield all([call(addHallStart)]);
}
