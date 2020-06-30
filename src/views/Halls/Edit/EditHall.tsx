import React, { useEffect } from "react";
import SeatArrangement from "components/SeatArrangement/SeatArrangement";
import { useParams } from "react-router-dom";
import EditHallForm from "./Form";
import { setHallToEdit } from "redux/hall/actions";
import { addHallStart } from "redux/halls/actions";
import { connect } from "react-redux";
import { IRootState } from "redux/types";
import { IEditHallProps } from "./types";
import { IHall } from "api/types";
import { Button, Grid } from "@material-ui/core";
import { selectIsHallDataSet } from "redux/hall/selectors";
import Legend from "components/SeatArrangement/Legend";

const EditHall = ({
  hall,
  isHallDataSet,
  addHallStart,
  setHallToEdit,
}: IEditHallProps) => {
  const { id } = useParams();

  useEffect(() => {
    setHallToEdit(hall);
  }, []);

  const handleSubmit = (hall: IHall) => {
    addHallStart(hall);
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
  setHallToEdit,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditHall);
