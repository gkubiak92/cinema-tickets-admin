import React, { Dispatch, useEffect } from "react";
import {
  Button,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useRootStyles } from "App.styles";
import { ScreeningsActionTypes } from "redux/screenings/types";
import { fetchScreeningsStartAction } from "redux/screenings/actions";
import { IRootState } from "redux/types";
import {
  IScreeningsListMappedDispatch,
  IScreeningsListMappedState,
} from "./types";
import { selectAllScreenings } from "redux/screenings/selectors";
import { connect } from "react-redux";

const ScreeningList = ({
  screenings,
  fetchScreeningsStart,
}: IScreeningsListMappedDispatch & IScreeningsListMappedState) => {
  useEffect(() => {
    fetchScreeningsStart();
  }, [fetchScreeningsStart]);

  const rootClasses = useRootStyles();

  return (
    <>
      <Button
        className={rootClasses.crudButton}
        variant="contained"
        color="primary"
        startIcon={<Add />}
        component={Link}
        to="/add-screening"
      >
        Add
      </Button>
      <TableContainer component={Paper}>
        <Table aria-label="Movies list">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Movie</TableCell>
              <TableCell>Hall</TableCell>
              <TableCell>Date and Hour</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {screenings.map((screening) => (
              <TableRow key={screening.id}>
                <TableCell>{screening.id}</TableCell>
                <TableCell>{screening.movieId}</TableCell>
                <TableCell>{screening.hallId}</TableCell>
                <TableCell>{screening.dateAndHour.toString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

const mapStateToProps = (state: IRootState) => ({
  screenings: selectAllScreenings(state),
});

const mapDispatchToProps = (dispatch: Dispatch<ScreeningsActionTypes>) => ({
  fetchScreeningsStart: () => dispatch(fetchScreeningsStartAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ScreeningList);
