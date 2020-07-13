import React, { useEffect } from "react";
import { IScreening } from "api/types";
import { EditScreeningProps } from "./types";
import EditScreeningForm from "./Form/EditScreeningForm";
import { selectScreening } from "redux/screenings/selectors";
import { IRootState } from "redux/types";
import { connect } from "react-redux";
import { fetchMoviesStart } from "redux/movies/actions";
import { fetchHallsStart } from "redux/halls/actions";

const initialScreeningData: IScreening = {
  dateAndHour: "",
  hallId: "",
  id: "",
  movieId: "",
  bookedSeats: [],
};

const EditScreening = ({
  match,
  screening,
  fetchHallsStart,
  fetchMoviesStart,
}: EditScreeningProps) => {
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
      {/* <SeatArrangement hallId={screeningData.hallId} /> */}
    </div>
  );
};

const mapStateToProps = (state: IRootState, ownProps: EditScreeningProps) => ({
  screening: selectScreening(ownProps.match.params.id)(state),
});

const mapDispatchToProps = {
  fetchMoviesStart,
  fetchHallsStart,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditScreening);
