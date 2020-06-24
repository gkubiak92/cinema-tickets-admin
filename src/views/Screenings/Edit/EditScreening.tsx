import React from "react";
import { IScreening } from "api/types";
import { RouteComponentProps } from "react-router-dom";
import { IEditScreeningProps, IEditScreeningMappedState } from "./types";
import EditScreeningForm from "./Form/EditScreeningForm";
import { selectScreening } from "redux/screenings/selectors";
import { IRootState } from "redux/types";
import { connect } from "react-redux";

const initialScreeningData: IScreening = {
  dateAndHour: "",
  hallId: "",
  id: "",
  movieId: "",
};

const EditScreening = ({
  match,
  screening,
}: RouteComponentProps<IEditScreeningProps> & IEditScreeningMappedState) => {
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

export default connect(mapStateToProps)(EditScreening);
