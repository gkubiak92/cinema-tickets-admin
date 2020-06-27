import React, { useEffect } from "react";
import { fetchHallsStart } from "redux/halls/actions";
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
import { useHistory } from "react-router-dom";
import { IRootState } from "redux/types";
import { selectAllHalls } from "redux/halls/selectors";
import { useRootStyles } from "App.styles";
import { IHall } from "api/types";
import { setHallToEdit } from "redux/hall/actions";

const HallsList = ({
  fetchHallsStart,
  setHallToEdit,
  halls,
}: IHallsListMappedDispatch & IHallsListMappedState) => {
  useEffect(() => {
    fetchHallsStart();
  }, [fetchHallsStart]);

  const history = useHistory();
  const handleEditClick = (hall?: IHall, id?: string) => {
    const defaultHallValues: IHall = { id: "", name: "", seatArrangement: {} };
    hall ? setHallToEdit(hall) : setHallToEdit(defaultHallValues);
    id ? history.push(`/edit-hall/${id}`) : history.push(`/edit-hall/`);
  };

  const rootClasses = useRootStyles();

  return (
    <>
      <Button
        className={rootClasses.crudButton}
        variant="contained"
        color="primary"
        startIcon={<Add />}
        onClick={() => handleEditClick()}
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
                onClick={() => handleEditClick(hall, hall.id)}
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

const mapDispatchToProps = {
  fetchHallsStart,
  setHallToEdit,
};

export default connect(mapStateToProps, mapDispatchToProps)(HallsList);
