import React from "react";
import {
  IEditMovieFormProps
} from "./types";
import { Form } from "react-final-form";
import { Button, Snackbar, Grid } from "@material-ui/core";
import { useRootStyles } from "App.styles";
import { addMovieStart } from "redux/movies/actions";
import { IMovie } from "api/types";
import { connect } from "react-redux";
import { selectMessage } from "redux/movies/selectors";
import { IRootState } from "redux/types";
import formFields from "./FormFields";

const EditMovieForm = ({
  movie,
  addMovieStart,
  message,
}: IEditMovieFormProps) => {
  const rootClasses = useRootStyles();

  const onSubmit = (values: IMovie) => addMovieStart(values);

  return (
    <>
      <Form
        initialValues={{ ...movie }}
        onSubmit={onSubmit}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
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
        )}
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

const mapDispatchToProps = {
  addMovieStart,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditMovieForm);
