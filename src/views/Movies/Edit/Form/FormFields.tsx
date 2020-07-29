import React from "react";
import { TextField, Autocomplete, SelectData, AutocompleteData } from "mui-rff";
import { FieldArray } from 'react-final-form-arrays'
import { IEditMovieFormFields } from "./types";
import { Field } from "react-final-form";
import { Checkbox, IconButton, Grid, Button } from "@material-ui/core";
import { Delete } from "@material-ui/icons";

const genres: SelectData[] = [
  { label: "Action", value: "action" },
  { label: "Thriller", value: "thriller" },
  { label: "Sci-Fi", value: "sci-Fi" },
  { label: "Horror", value: "horror" },
  { label: "Romance", value: "romance" },
];

export default [
  {
    size: 6,
    field: <TextField name="id" label="id" fullWidth disabled />,
  },
  {
    size: 6,
    field: <TextField name="title" label="title" fullWidth required={true} />,
  },
  {
    size: 6,
    field: (
      <TextField name="director" label="director" fullWidth required={true} />
    ),
  },
  {
    size: 6,
    field: <TextField name="writer" label="writer" fullWidth required={true} />,
  },
  {
    size: 12,
    field: (
      <TextField
        name="description"
        label="description"
        fullWidth
        multiline
        rows={4}
        required={true}
      />
    ),
  },
  {
    size: 12,
    field: (
      <label>
        <Field name="isNew" component="input" type="checkbox" />
        New
      </label>
    ),
  },
  {
    size: 12,
    field: (
      <label>
        <Field name="isPopular" component="input" type="checkbox" />
        Popular
      </label>
    ),
  },
  {
    size: 12,
    field: (
      <label>
        <Field name="isUpcoming" component="input" type="checkbox" />
        Upcoming
      </label>
    ),
  },
  {
    size: 12,
    field: (
      <Autocomplete
        label="Genres"
        name="genres"
        multiple={true}
        required={true}
        options={genres}
        getOptionValue={(option: AutocompleteData) => option.value}
        getOptionLabel={(option: AutocompleteData) => option.label}
        disableCloseOnSelect={true}
        renderOption={(option: AutocompleteData, { selected }: any) => (
          <>
            <Checkbox checked={selected} />
            {option.label}
          </>
        )}
      />
    ),
  },
  {
    size: 12,
    field: <TextField name="thumbnailUrl" label="thumbnailUrl" fullWidth />,
  },
  {
    size: 12,
    field:
      <FieldArray name="photosUrl">
        {({ fields }) => (
          <div>
            {fields.map((name, index) =>
              <Grid container spacing={2} key={name}>
                <Grid item xs={11}>
                  <TextField name={`photosUrl[${index}]`} label={`photoUrl no. ${index + 1}`} fullWidth />
                </Grid>
                <Grid item xs={1}>
                  <IconButton aria-label="delete" onClick={() => fields.remove(index)}>
                    <Delete />
                  </IconButton>
                </Grid>
              </Grid>
            )}
            <Button
              variant="contained"
              color="primary"
              type="button"
              onClick={() => fields.push('')}>Add photo url</Button>
          </div>
        )
        }
      </FieldArray>
  }
] as IEditMovieFormFields[];
