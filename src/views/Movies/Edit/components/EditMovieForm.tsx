import React from "react";
import { useFormik } from "formik";
import { IEditMovieFormProps } from "./types";
import {
  Button,
  TextField,
  FormGroup,
  Checkbox,
  FormControlLabel,
} from "@material-ui/core";
import { useRootStyles } from "App.styles";

const EditMovieForm = ({ movie }: IEditMovieFormProps) => {
  const rootClasses = useRootStyles();
  const movieForm = useFormik({
    initialValues: {
      ...movie,
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={movieForm.handleSubmit}>
      <TextField
        label="Title"
        fullWidth
        type="text"
        id="title"
        name="title"
        onChange={movieForm.handleChange}
        value={movieForm.values.title}
      />
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
};

export default EditMovieForm;
