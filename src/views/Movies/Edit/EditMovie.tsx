import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { IEditMovieProps, IEditMovieMappedState } from "./types";
import { IRootState } from "redux/types";
import { selectMovie } from "redux/movies/movies.selectors";
import { connect } from "react-redux";
import EditMovieForm from "./components/EditMovieForm";
import { IMovie } from "api/types";

const initialMovieData: IMovie = {
  description: "",
  director: "",
  genres: [],
  id: "",
  isNew: false,
  isPopular: false,
  isUpcoming: false,
  lastupdate: {},
  photosUrl: [],
  rating: 0,
  screeningDates: [],
  stars: [],
  thumbnailUrl: "",
  ticketPrice: 0,
  title: "",
  updatedby: "",
  writer: "",
};

const EditMovie = ({
  match,
  movie,
}: RouteComponentProps<IEditMovieProps> & IEditMovieMappedState) => {
  let movieData: IMovie = initialMovieData;
  const id = match.params.id;
  if (movie && id) {
    movieData = movie;
  }

  return (
    <div className="">
      <EditMovieForm movie={movieData} />
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
