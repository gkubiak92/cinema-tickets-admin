import { takeLatest, put, all, call } from "redux-saga/effects";
import { AuthActionNames, ILoginStartAction } from "./types";
import {
  loginFailureAction,
  loginSuccessAction,
  logoutFailureAction,
  logoutSuccessAction,
} from "./actions";
import { auth } from "firebase/firebase.utils";

function* loginStart() {
  yield takeLatest(AuthActionNames.LOGIN_START, loginStartAsync);
}

function* loginStartAsync({ payload }: ILoginStartAction) {
  try {
    const { email, password } = payload;
    const response = yield auth.signInWithEmailAndPassword(email, password);
    yield put(loginSuccessAction(response.user));
  } catch (error) {
    yield put(loginFailureAction(error));
  }
}

function* logoutStart() {
  yield takeLatest(AuthActionNames.LOGOUT_START, logoutAsync);
}

function* logoutAsync() {
  try {
    // maybe do some stuff in future
    yield put(logoutSuccessAction());
  } catch (error) {
    yield put(logoutFailureAction(error));
  }
}

export function* authSagas() {
  yield all([call(loginStart), call(logoutStart)]);
}
