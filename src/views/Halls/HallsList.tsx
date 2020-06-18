import React, { useEffect, Dispatch } from "react";
import { HallsActionTypes } from "redux/halls/types";
import { fetchHallsStart } from "redux/halls/halls.actions";
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
import { Link } from "react-router-dom";
import { IRootState } from "redux/types";
import { selectAllHalls } from "redux/halls/halls.selectors";
import { useStyles } from "App.styles";

const HallsList = ({
  fetchHallsStart,
  halls,
}: IHallsListMappedDispatch & IHallsListMappedState) => {
  useEffect(() => {
    fetchHallsStart();
  }, [fetchHallsStart]);

  const classes = useStyles();

  return (
    <>
      <Button
        className={classes.crudButton}
        variant="contained"
        color="primary"
        startIcon={<Add />}
        component={Link}
        to="/add-movie"
      >
        Add
      </Button>
      <TableContainer component={Paper}>
        <Table aria-label="Movies list">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {halls.map((hall) => (
              <TableRow key={hall.id}>
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

const mapDispatchToProps = (dispatch: Dispatch<HallsActionTypes>) => ({
  fetchHallsStart: () => dispatch(fetchHallsStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HallsList);
