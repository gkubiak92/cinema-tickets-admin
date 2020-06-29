import React from "react";
import SeatArrangement from "components/SeatArrangement/SeatArrangement";
import { useParams } from "react-router-dom";
import EditHallForm from "./Form";
import { addHallStart } from "redux/hall/actions";
import { connect } from "react-redux";
import { IRootState } from "redux/types";
import { IEditHallProps } from "./types";
import { IHall } from "api/types";
import { Button } from "@material-ui/core";

const EditHall = ({ hall, addHallStart }: IEditHallProps) => {
  const { id } = useParams();

  const handleSubmit = (hall: IHall) => {
    const hallToAdd: IHall = {
      id: hall.id,
      name: hall.name,
      seatArrangement: hall.seatArrangement,
    };
    addHallStart(hallToAdd);
  };
  return (
    <div>
      <EditHallForm />
      <SeatArrangement hallId={id} edit />
      <Button onClick={() => handleSubmit(hall)}>Save</Button>
    </div>
  );
};

const mapStateToProps = (state: IRootState) => ({
  hall: state.hall,
});

const mapDispatchToProps = {
  addHallStart,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditHall);
