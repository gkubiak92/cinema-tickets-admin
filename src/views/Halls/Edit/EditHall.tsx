import React from "react";
import SeatArrangement from "components/SeatArrangement/SeatArrangement";
import { useParams } from "react-router-dom";
import EditHallForm from "./Form";

const EditHall = () => {
  const { id } = useParams();
  return (
    <div>
      <EditHallForm />
      <SeatArrangement hallId={id} edit />
    </div>
  );
};

export default EditHall;
