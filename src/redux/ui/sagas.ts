import { put, all, call, takeEvery } from "redux-saga/effects";
import { startSpinningAction, stopSpinningAction } from "./actions";
import { AuthActionNames } from "redux/auth/types";
import { HallsActionsNames } from "redux/halls/types";
import { MoviesActionNames } from "redux/movies/types";
import { ScreeningsActionNames } from "redux/screenings/types";

function* onSpinningStart() {
  yield takeEvery(
    [
      AuthActionNames.LOGIN_START,
      HallsActionsNames.ADD_HALL_START,
      HallsActionsNames.DELETE_HALL_START,
      HallsActionsNames.FETCH_HALLS_START,
      MoviesActionNames.ADD_MOVIE_START,
      MoviesActionNames.DELETE_MOVIE_START,
      MoviesActionNames.FETCH_MOVIES_START,
      ScreeningsActionNames.ADD_SCREENING_START,
      ScreeningsActionNames.DELETE_SCREENING_START,
      ScreeningsActionNames.FETCH_SCREENINGS_START,
    ],
    startSpinning
  );
}

function* startSpinning() {
  yield put(startSpinningAction());
}

function* onSpinningStop() {
  yield takeEvery(
    [
      AuthActionNames.LOGIN_SUCCESS,
      AuthActionNames.LOGIN_FAILURE,
      HallsActionsNames.ADD_HALL_SUCCESS,
      HallsActionsNames.ADD_HALL_FAILURE,
      HallsActionsNames.DELETE_HALL_SUCCESS,
      HallsActionsNames.DELETE_HALL_FAILURE,
      HallsActionsNames.FETCH_HALLS_SUCCESS,
      HallsActionsNames.FETCH_HALLS_FAILURE,
      MoviesActionNames.ADD_MOVIE_SUCCESS,
      MoviesActionNames.ADD_MOVIE_FAILURE,
      MoviesActionNames.DELETE_MOVIE_SUCCESS,
      MoviesActionNames.DELETE_MOVIE_FAILURE,
      MoviesActionNames.FETCH_MOVIES_SUCCESS,
      MoviesActionNames.FETCH_MOVIES_FAILURE,
      ScreeningsActionNames.ADD_SCREENING_SUCCESS,
      ScreeningsActionNames.ADD_SCREENING_FAILURE,
      ScreeningsActionNames.DELETE_SCREENING_SUCCESS,
      ScreeningsActionNames.DELETE_SCREENING_FAILURE,
      ScreeningsActionNames.FETCH_SCREENINGS_SUCCESS,
      ScreeningsActionNames.FETCH_SCREENINGS_FAILURE,
    ],
    stopSpinning
  );
}

function* stopSpinning() {
  yield put(stopSpinningAction());
}

export function* uiSagas() {
  yield all([call(onSpinningStart), call(onSpinningStop)]);
}
