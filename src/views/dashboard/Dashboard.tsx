import React, { useEffect } from "react";
import { connect } from "react-redux";
import MoviesList from "views/Movies/List";
import { fetchMoviesStart } from "redux/movies/actions";
import { fetchHallsStart } from "redux/halls/actions";
import { Props } from "./types";

const Dashboard = ({ fetchHallsStart, fetchMoviesStart }: Props) => {
  useEffect(() => {
    fetchMoviesStart();
    fetchHallsStart();
  }, [fetchMoviesStart, fetchHallsStart]);

  return (
    <div>
      <MoviesList />
    </div>
  );
};

const mapDispatchToProps = {
  fetchMoviesStart,
  fetchHallsStart,
};

export default connect(null, mapDispatchToProps)(Dashboard);
