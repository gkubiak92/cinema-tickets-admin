import { takeLatest, put, all, call, select } from "redux-saga/effects";
import { HallsActionsNames, IDeleteHallStartAction } from "./types";
import {
  firestore,
  convertFirestoreCollectionToArray,
} from "firebase/firebase.utils";
import {
  fetchHallsFailure,
  fetchHallsSuccess,
  addHallSuccess,
  addHallFailure,
  deleteHallFailure,
  deleteHallSuccess,
} from "./actions";
import { FirestoreCollections, IHall } from "api/types";
import { selectHall } from "redux/hall/selectors";

function* fetchHallsStart() {
  yield takeLatest(HallsActionsNames.FETCH_HALLS_START, fetchHallsAsync);
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

function* addHallStart() {
  yield takeLatest(HallsActionsNames.ADD_HALL_START, addHallAsync);
}

function* addHallAsync() {
  try {
    const hallData: IHall = yield select(selectHall);
    const hallRef = hallData.id
      ? firestore.collection(FirestoreCollections.halls).doc(hallData.id)
      : firestore.collection(FirestoreCollections.halls).doc();
    yield hallRef.set({ ...hallData });
    yield put(addHallSuccess({ ...hallData, id: hallRef.id }));
  } catch (error) {
    yield put(addHallFailure(error));
  }
}

function* deleteHallStart() {
  yield takeLatest(HallsActionsNames.DELETE_HALL_START, deleteHallAsync);
}

function* deleteHallAsync({ payload }: IDeleteHallStartAction) {
  try {
    yield firestore
      .collection(FirestoreCollections.halls)
      .doc(payload)
      .delete();
    yield put(deleteHallSuccess(payload));
  } catch (error) {
    yield put(deleteHallFailure(error));
  }
}

export function* hallsSagas() {
  yield all([call(fetchHallsStart), call(addHallStart), call(deleteHallStart)]);
}
