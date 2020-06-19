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
  Button,
  Avatar,
} from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { selectAllMovies } from "redux/movies/movies.selectors";
import { IRootState } from "redux/types";
import { useRootStyles } from "App.styles";
import { Link, useHistory } from "react-router-dom";
import { useStyles } from "./styles";

const MoviesList = ({
  fetchMoviesStart,
  movies,
}: IMoviesListMappedDispatch & IMoviesListMappedState) => {
  useEffect(() => {
    fetchMoviesStart();
  }, [fetchMoviesStart]);

  const rootClasses = useRootStyles();
  const classes = useStyles();
  const history = useHistory();

  return (
    <>
      <Button
        className={rootClasses.crudButton}
        variant="contained"
        color="primary"
        startIcon={<Add />}
        component={Link}
        to="/edit-movie"
      >
        Add
      </Button>
      <TableContainer component={Paper}>
        <Table aria-label="Movies list">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>Id</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Director</TableCell>
              <TableCell>Rating</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {movies.map((movie) => (
              <TableRow
                key={movie.id}
                onClick={() => {
                  history.push(`/edit-movie/${movie.id}`);
                }}
              >
                <TableCell>
                  <Avatar
                    src={movie.thumbnailUrl}
                    className={classes.avatar}
                    variant="square"
                  />
                </TableCell>
                <TableCell>{movie.id}</TableCell>
                <TableCell>{movie.title}</TableCell>
                <TableCell>{movie.director}</TableCell>
                <TableCell>{movie.rating}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

const mapStateToProps = (state: IRootState) => ({
  movies: selectAllMovies(state),
});

const mapDispatchToProps = (dispatch: Dispatch<MoviesActionTypes>) => ({
  fetchMoviesStart: () => dispatch(fetchMoviesStartAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
