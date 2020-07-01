import React, { useEffect } from "react";
import SeatArrangement from "components/SeatArrangement/SeatArrangement";
import { useParams, RouteComponentProps } from "react-router-dom";
import EditHallForm from "./Form";
import { setHallToEdit } from "redux/hall/actions";
import { connect } from "react-redux";
import { IRootState } from "redux/types";
import { IEditHallProps, IEdtiHallRouteProps } from "./types";
import { IHall } from "api/types";
import { Grid } from "@material-ui/core";
import Legend from "components/SeatArrangement/Legend";
import { selectHall } from "redux/halls/selectors";

const EditHall = ({ hall, setHallToEdit }: IEditHallProps) => {
  const { id } = useParams();

  useEffect(() => {
    const defaultHallData: IHall = { id: "", name: "", seatArrangement: {} };
    hall ? setHallToEdit(hall) : setHallToEdit(defaultHallData);
    return () => {
      setHallToEdit(defaultHallData);
    };
  }, []);

  return (
    <Grid container>
      <EditHallForm />
      <Legend />
      <SeatArrangement hallId={id} edit />
    </Grid>
  );
};

const mapStateToProps = (
  state: IRootState,
  ownProps: RouteComponentProps<IEdtiHallRouteProps>
) => ({
  hall: selectHall(ownProps.match.params.id)(state),
});

const mapDispatchToProps = {
  setHallToEdit,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditHall);
