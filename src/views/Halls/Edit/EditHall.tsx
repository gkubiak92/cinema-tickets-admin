import React from "react";
import SeatArrangement from "components/SeatArrangement/SeatArrangement";
import { useParams } from "react-router-dom";
import EditHallForm from "./Form";
import { addHallStart } from "redux/hall/actions";
import { connect } from "react-redux";
import { IRootState } from "redux/types";
import { IEditHallProps } from "./types";
import { IHall } from "api/types";
import { Button, Grid } from "@material-ui/core";
import { selectIsHallDataSet } from "redux/hall/selectors";
import Legend from "components/SeatArrangement/Legend";

const EditHall = ({ hall, isHallDataSet, addHallStart }: IEditHallProps) => {
  const { id } = useParams();

  const handleSubmit = (hall: IHall) => {
    const hallToAdd: IHall = {
      id: hall.id,
      name: hall.name,
      seatArrangement: hall.seatArrangement,
    };
    addHallStart(hallToAdd);
  };

  const saveButton = isHallDataSet && (
    <Button
      variant="contained"
      color="primary"
      onClick={() => handleSubmit(hall)}
    >
      Save
    </Button>
  );

  return (
    <Grid container>
      <EditHallForm />
      <Legend />
      <SeatArrangement hallId={id} edit />
      {saveButton}
    </Grid>
  );
};

const mapStateToProps = (state: IRootState) => ({
  hall: state.hall,
  isHallDataSet: selectIsHallDataSet(state),
});

const mapDispatchToProps = {
  addHallStart,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditHall);
