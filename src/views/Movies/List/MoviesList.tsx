import React, { useEffect } from "react";
import { fetchMoviesStart, deleteMovieStart } from "redux/movies/actions";
import { connect } from "react-redux";
import { IMoviesListProps } from "./types";
import { selectAllMovies } from "redux/movies/selectors";
import { IRootState } from "redux/types";
import List from "components/List/List";

const MoviesList = ({
  fetchMoviesStart,
  deleteMovieStart,
  movies,
  isDataLoaded,
}: IMoviesListProps) => {
  useEffect(() => {
    if (!isDataLoaded) {
      fetchMoviesStart();
    }
  }, [fetchMoviesStart, isDataLoaded]);

  return (
    <List
      collectionName="movies"
      collectionTitle="Movies"
      fieldsToDisplay={["id", "title", "writer", "rating"]}
      items={movies}
      itemName="movie"
      onDeleteItem={deleteMovieStart}
      onRefresh={fetchMoviesStart}
    />
  );
};

const mapStateToProps = (state: IRootState) => ({
  movies: selectAllMovies(state),
  isDataLoaded: state.movies.isDataLoaded,
});

const mapDispatchToProps = {
  fetchMoviesStart,
  deleteMovieStart,
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
