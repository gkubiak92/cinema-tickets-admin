import React, { Dispatch } from "react";
import { useFormik } from "formik";
import {
  IEditMovieFormProps,
  IEditMovieFormMappedDispatch,
  IEditMovieFormMappedState,
} from "./types";
import {
  Button,
  TextField,
  FormGroup,
  Checkbox,
  FormControlLabel,
  Snackbar,
} from "@material-ui/core";
import { useRootStyles } from "App.styles";
import { MoviesActionTypes } from "redux/movies/types";
import { addMovieStartAction } from "redux/movies/movies.actions";
import { IMovie } from "api/types";
import { connect } from "react-redux";
import { selectMessage } from "redux/movies/movies.selectors";
import { IRootState } from "redux/types";
import Rating from "components/Rating";
import ArrayInput from "components/Form/ArrayInput";

const EditMovieForm = ({
  movie,
  addMovie,
  message,
}: IEditMovieFormProps &
  IEditMovieFormMappedDispatch &
  IEditMovieFormMappedState) => {
  const rootClasses = useRootStyles();
  const movieForm = useFormik({
    initialValues: {
      ...movie,
    },
    onSubmit: (values) => {
      addMovie(values);
    },
  });

  return (
    <>
      <form onSubmit={movieForm.handleSubmit}>
        <TextField
          label="Id"
          fullWidth
          type="text"
          id="id"
          name="id"
          disabled
          onChange={movieForm.handleChange}
          value={movieForm.values.id}
        />
        <TextField
          label="Title"
          fullWidth
          type="text"
          id="title"
          name="title"
          onChange={movieForm.handleChange}
          value={movieForm.values.title}
        />
        <Rating rating={movie.rating} showTitle />
        <TextField
          label="Director"
          fullWidth
          type="text"
          id="director"
          name="director"
          onChange={movieForm.handleChange}
          value={movieForm.values.director}
        />
        <TextField
          label="Description"
          fullWidth
          type="text"
          id="description"
          name="description"
          multiline
          rows={4}
          onChange={movieForm.handleChange}
          value={movieForm.values.description}
        />
        <FormGroup row>
          <FormControlLabel
            label="New"
            control={
              <Checkbox
                name="isNew"
                checked={movieForm.values.isNew}
                onChange={movieForm.handleChange}
              />
            }
          />
          <FormControlLabel
            label="Popular"
            control={
              <Checkbox
                name="isPopular"
                checked={movieForm.values.isPopular}
                onChange={movieForm.handleChange}
              />
            }
          />
          <FormControlLabel
            label="Upcoming"
            control={
              <Checkbox
                name="isUpcoming"
                checked={movieForm.values.isUpcoming}
                onChange={movieForm.handleChange}
              />
            }
          />
        </FormGroup>
        <ArrayInput
          label="Photos url"
          passedElements={movieForm.values.photosUrl}
          onChange={movieForm.handleChange}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          className={rootClasses.crudButton}
        >
          Save
        </Button>
      </form>
      <Snackbar open={!!message} autoHideDuration={6000}>
        <p>{message}</p>
      </Snackbar>
    </>
  );
};

const mapStateToProps = (state: IRootState) => ({
  message: selectMessage(state),
});

const mapDispatchToProps = (dispatch: Dispatch<MoviesActionTypes>) => ({
  addMovie: (movie: IMovie) => dispatch(addMovieStartAction(movie)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditMovieForm);
