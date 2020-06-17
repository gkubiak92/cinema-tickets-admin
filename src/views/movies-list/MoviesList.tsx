import React, { useEffect, Dispatch } from "react";
import { MoviesActionTypes } from "redux/movies/types";
import { fetchMoviesStartAction } from "redux/movies/movies.actions";
import { connect } from "react-redux";
import { IMoviesListMappedDispatch, IMoviesListMappedState } from "./types";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";
import { selectAllMovies } from "redux/movies/movies.selectors";
import { IRootState } from "redux/types";

const MoviesList = ({
  fetchMoviesStart,
  movies,
}: IMoviesListMappedDispatch & IMoviesListMappedState) => {
  useEffect(() => {
    fetchMoviesStart();
  }, [fetchMoviesStart]);
  return (
    <TableContainer component={Paper}>
      <Table aria-label="Movies list">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Director</TableCell>
            <TableCell>Rating</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {movies.map((movie) => (
            <TableRow key={movie.id}>
              <TableCell>{movie.id}</TableCell>
              <TableCell>{movie.title}</TableCell>
              <TableCell>{movie.director}</TableCell>
              <TableCell>{movie.rating}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const mapStateToProps = (state: IRootState) => ({
  movies: selectAllMovies(state),
});

const mapDispatchToProps = (dispatch: Dispatch<MoviesActionTypes>) => ({
  fetchMoviesStart: () => dispatch(fetchMoviesStartAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
