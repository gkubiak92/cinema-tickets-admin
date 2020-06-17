import React, { useEffect, Dispatch } from "react";
import { MoviesActionTypes } from "redux/movies/types";
import { fetchMoviesStartAction } from "redux/movies/movies.actions";
import { connect } from "react-redux";
import { IMoviesListMappedDispatch } from "./types";

const MoviesList = ({ fetchMoviesStart }: IMoviesListMappedDispatch) => {
  useEffect(() => {
    fetchMoviesStart();
  }, [fetchMoviesStart]);
  return <div>Movies list</div>;
};

const mapDispatchToProps = (dispatch: Dispatch<MoviesActionTypes>) => ({
  fetchMoviesStart: () => dispatch(fetchMoviesStartAction()),
});

export default connect(null, mapDispatchToProps)(MoviesList);
