import React, { useEffect } from "react";
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
import { Link, useHistory } from "react-router-dom";
import { useRootStyles } from "App.styles";
import { IRootState } from "redux/types";
import {
  IScreeningsListMappedDispatch,
  IScreeningsListMappedState,
} from "./types";
import { selectAllScreenings } from "redux/screenings/selectors";
import { fetchScreeningsStart } from "redux/screenings/actions";
import { connect } from "react-redux";

const ScreeningList = ({
  screenings,
  fetchScreeningsStart,
}: IScreeningsListMappedDispatch & IScreeningsListMappedState) => {
  useEffect(() => {
    fetchScreeningsStart();
  }, [fetchScreeningsStart]);

  const rootClasses = useRootStyles();
  const history = useHistory();
  const handleRowClick = (id: string) => history.push(`/edit-screening/${id}`);

  return (
    <>
      <Button
        className={rootClasses.crudButton}
        variant="contained"
        color="primary"
        startIcon={<Add />}
        component={Link}
        to="/edit-screening"
      >
        Add
      </Button>
      <TableContainer component={Paper}>
        <Table aria-label="Screenings list">
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
                <TableCell onClick={() => handleRowClick(screening.id)}>
                  {screening.id}
                </TableCell>
                <TableCell onClick={() => handleRowClick(screening.id)}>
                  {screening.movieId}
                </TableCell>
                <TableCell onClick={() => handleRowClick(screening.id)}>
                  {screening.hallId}
                </TableCell>
                <TableCell onClick={() => handleRowClick(screening.id)}>
                  {screening.dateAndHour.toString()}
                </TableCell>
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

const mapDispatchToProps = { fetchScreeningsStart };

export default connect(mapStateToProps, mapDispatchToProps)(ScreeningList);
