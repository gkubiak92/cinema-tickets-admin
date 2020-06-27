import React from "react";
import { IEditMovieProps } from "./types";
import { IRootState } from "redux/types";
import { selectMovie } from "redux/movies/selectors";
import { connect } from "react-redux";
import EditMovieForm from "./Form/EditMovieForm";
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
}: IEditMovieProps) => {
  let movieData: IMovie = initialMovieData;
  const { id } = match.params;
  if (movie && id) {
    movieData = movie;
  }

  return (
    <div>
      <EditMovieForm movie={movieData} />
    </div>
  );
};

const mapStateToProps = (
  state: IRootState,
  ownProps: IEditMovieProps
) => ({
  movie: selectMovie(ownProps.match.params.id)(state),
});

export default connect(mapStateToProps)(EditMovie);
