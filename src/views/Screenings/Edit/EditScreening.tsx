import React, { Dispatch, useEffect } from "react";
import { IScreening } from "api/types";
import { RouteComponentProps } from "react-router-dom";
import {
  IEditScreeningProps,
  IEditScreeningMappedState,
  IEditScreeningMappedDispatch,
} from "./types";
import EditScreeningForm from "./Form/EditScreeningForm";
import { selectScreening } from "redux/screenings/selectors";
import { IRootState } from "redux/types";
import { connect } from "react-redux";
import { MoviesActionTypes } from "redux/movies/types";
import { HallsActionTypes } from "redux/halls/types";
import { fetchMoviesStartAction } from "redux/movies/actions";
import { fetchHallsStartAction } from "redux/halls/actions";

const initialScreeningData: IScreening = {
  dateAndHour: "",
  hallId: "",
  id: "",
  movieId: "",
};

const EditScreening = ({
  match,
  screening,
  fetchHallsStart,
  fetchMoviesStart,
}: RouteComponentProps<IEditScreeningProps> &
  IEditScreeningMappedState &
  IEditScreeningMappedDispatch) => {
  useEffect(() => {
    fetchHallsStart();
    fetchMoviesStart();
  }, [fetchHallsStart, fetchMoviesStart]);

  let screeningData = initialScreeningData;
  const { id } = match.params;
  if (screening && id) {
    screeningData = screening;
  }

  return (
    <div>
      <EditScreeningForm screening={screeningData} />
    </div>
  );
};

const mapStateToProps = (
  state: IRootState,
  ownProps: RouteComponentProps<IEditScreeningProps>
) => ({
  screening: selectScreening(ownProps.match.params.id)(state),
});

const mapDispatchToProps = (
  dispatch: Dispatch<MoviesActionTypes | HallsActionTypes>
) => ({
  fetchMoviesStart: () => dispatch(fetchMoviesStartAction()),
  fetchHallsStart: () => dispatch(fetchHallsStartAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditScreening);
