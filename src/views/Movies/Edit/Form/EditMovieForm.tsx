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
import { addMovieStartAction } from "redux/movies/movies.actions";
import { IMovie } from "api/types";
import { connect } from "react-redux";
import { selectMessage } from "redux/movies/movies.selectors";
import { IRootState } from "redux/types";
import { editMovieFormFields } from "./FormFields";

const EditMovieForm = ({
  movie,
  addMovie,
  message,
}: IEditMovieFormProps &
  IEditMovieFormMappedDispatch &
  IEditMovieFormMappedState) => {
  const rootClasses = useRootStyles();
  console.log("rerender of editmovie form");

  const onSubmit = (values: IMovie) => addMovie(values);

  return (
    <>
      <Form
        initialValues={{ ...movie }}
        onSubmit={onSubmit}
        render={({ handleSubmit, form, submitting, pristine, values }) => {
          console.log("Rerender of editmovie form");
          return (
            <form onSubmit={handleSubmit} noValidate>
              <Grid container spacing={2}>
                {editMovieFormFields.map((item, index) => (
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
