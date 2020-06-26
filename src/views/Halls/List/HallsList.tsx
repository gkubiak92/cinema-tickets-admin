import React, { useEffect, Dispatch } from "react";
import { HallsActionTypes } from "redux/halls/types";
import { fetchHallsStartAction } from "redux/halls/actions";
import { connect } from "react-redux";
import { IHallsListMappedDispatch, IHallsListMappedState } from "./types";
import { Add } from "@material-ui/icons";
import {
  Button,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  Paper,
  TableCell,
  TableBody,
} from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import { IRootState } from "redux/types";
import { selectAllHalls } from "redux/halls/selectors";
import { useRootStyles } from "App.styles";
import { IHall } from "api/types";
import { setHallToEdit } from "redux/hall/actions";
import { HallActionsTypes } from "redux/hall/types";

const HallsList = ({
  fetchHallsStart,
  setHallToEdit,
  halls,
}: IHallsListMappedDispatch & IHallsListMappedState) => {
  useEffect(() => {
    fetchHallsStart();
  }, [fetchHallsStart]);

  const history = useHistory();
  const handleRowClick = (hall: IHall, id: string) => {
    setHallToEdit(hall);
    history.push(`/edit-hall/${id}`);
  };

  const rootClasses = useRootStyles();

  return (
    <>
      <Button
        className={rootClasses.crudButton}
        variant="contained"
        color="primary"
        startIcon={<Add />}
        component={Link}
        to="/edit-hall"
      >
        Add
      </Button>
      <TableContainer component={Paper}>
        <Table aria-label="Halls list">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {halls.map((hall) => (
              <TableRow
                key={hall.id}
                onClick={() => handleRowClick(hall, hall.id)}
              >
                <TableCell>{hall.id}</TableCell>
                <TableCell>{hall.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

const mapStateToProps = (state: IRootState) => ({
  halls: selectAllHalls(state),
});

const mapDispatchToProps = (
  dispatch: Dispatch<HallsActionTypes | HallActionsTypes>
) => ({
  fetchHallsStart: () => dispatch(fetchHallsStartAction()),
  setHallToEdit: (hall: IHall) => dispatch(setHallToEdit(hall)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HallsList);
