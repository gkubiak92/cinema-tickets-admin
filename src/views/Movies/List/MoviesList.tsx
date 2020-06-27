import React, { useEffect, useState } from "react";
import { fetchMoviesStart, deleteMovieStart } from "redux/movies/actions";
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
  IconButton,
} from "@material-ui/core";
import { Add, Delete } from "@material-ui/icons";
import { selectAllMovies } from "redux/movies/selectors";
import { IRootState } from "redux/types";
import { useRootStyles } from "App.styles";
import { Link, useHistory } from "react-router-dom";
import { useStyles } from "./styles";
import DeleteDialog from "components/DeleteDialog";

const MoviesList = ({
  fetchMoviesStart,
  deleteMovieStart,
  movies,
}: IMoviesListMappedDispatch & IMoviesListMappedState) => {
  useEffect(() => {
    fetchMoviesStart();
  }, [fetchMoviesStart]);

  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [movieToDelete, setMovieToDelete] = useState("");

  const rootClasses = useRootStyles();
  const classes = useStyles();
  const history = useHistory();
  const handleRowClick = (id: string) => history.push(`/edit-movie/${id}`);

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
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {movies.map((movie) => (
              <TableRow key={movie.id}>
                <TableCell onClick={() => handleRowClick(movie.id)}>
                  <Avatar
                    src={movie.thumbnailUrl}
                    className={classes.avatar}
                    variant="square"
                  />
                </TableCell>
                <TableCell onClick={() => handleRowClick(movie.id)}>
                  {movie.id}
                </TableCell>
                <TableCell onClick={() => handleRowClick(movie.id)}>
                  {movie.title}
                </TableCell>
                <TableCell onClick={() => handleRowClick(movie.id)}>
                  {movie.director}
                </TableCell>
                <TableCell onClick={() => handleRowClick(movie.id)}>
                  {movie.rating}
                </TableCell>
                <TableCell>
                  <IconButton
                    aria-label="delete"
                    onClick={() => {
                      setMovieToDelete(movie.id);
                      setOpenDeleteDialog(true);
                    }}
                  >
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
            <DeleteDialog
              open={openDeleteDialog}
              onConfirm={() => {
                deleteMovieStart(movieToDelete);
                setMovieToDelete("");
                setOpenDeleteDialog(false);
              }}
              onCancel={() => setOpenDeleteDialog(false)}
            />
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

const mapStateToProps = (state: IRootState) => ({
  movies: selectAllMovies(state),
});

const mapDispatchToProps = {
  fetchMoviesStart,
  deleteMovieStart,
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
