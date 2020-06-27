import React, { useEffect } from "react";
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
import { fetchMoviesStart } from "redux/movies/actions";
import { fetchHallsStart } from "redux/halls/actions";
import SeatArrangement from "components/SeatArrangement/SeatArrangement";

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
      <SeatArrangement hallId={screeningData.hallId} />
    </div>
  );
};

const mapStateToProps = (
  state: IRootState,
  ownProps: RouteComponentProps<IEditScreeningProps>
) => ({
  screening: selectScreening(ownProps.match.params.id)(state),
});

const mapDispatchToProps = {
  fetchMoviesStart,
  fetchHallsStart,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditScreening);
