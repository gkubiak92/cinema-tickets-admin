import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { IEditMovieProps, IEditMovieMappedState } from "./types";
import { IRootState } from "redux/types";
import { selectMovie } from "redux/movies/movies.selectors";
import { connect } from "react-redux";

const EditMovie = ({
  match,
  movie,
}: RouteComponentProps<IEditMovieProps> & IEditMovieMappedState) => {
  const id = match.params.id;
  console.log(movie);
  return (
    <div className="">
      {id ? <div>Edit movie {id}</div> : <div>Add new movie</div>}
    </div>
  );
};

const mapStateToProps = (
  state: IRootState,
  ownProps: RouteComponentProps<IEditMovieProps>
) => ({
  movie: selectMovie(ownProps.match.params.id)(state),
});

export default connect(mapStateToProps)(EditMovie);
