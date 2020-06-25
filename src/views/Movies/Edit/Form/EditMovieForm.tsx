import React, { Dispatch } from "react";
import {
  IEditMovieFormProps,
  IEditMovieFormMappedDispatch,
  IEditMovieFormMappedState,
} from "./types";
import { Form } from "react-final-form";
import { Button, Snackbar, Grid } from "@material-ui/core";
import { useRootStyles } from "App.styles";
import { MoviesActionTypes } from "redux/movies/types";
import { addMovieStartAction } from "redux/movies/actions";
import { IMovie } from "api/types";
import { connect } from "react-redux";
import { selectMessage } from "redux/movies/selectors";
import { IRootState } from "redux/types";
import formFields from "./FormFields";

const EditMovieForm = ({
  movie,
  addMovie,
  message,
}: IEditMovieFormProps &
  IEditMovieFormMappedDispatch &
  IEditMovieFormMappedState) => {
  const rootClasses = useRootStyles();

  const onSubmit = (values: IMovie) => addMovie(values);

  return (
    <>
      <Form
        initialValues={{ ...movie }}
        onSubmit={onSubmit}
        render={({ handleSubmit, form, submitting, pristine, values }) => {
          return (
            <form onSubmit={handleSubmit} noValidate>
              <Grid container spacing={2}>
                {formFields.map((item, index) => (
                  <Grid item xs={item.size} key={index}>
                    {item.field}
                  </Grid>
                ))}
              </Grid>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                className={rootClasses.crudButton}
              >
                Save
              </Button>
            </form>
          );
        }}
      />
      <Snackbar open={!!message} autoHideDuration={3000}>
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
