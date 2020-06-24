import React from "react";
import { TextField, Select } from "mui-rff";
import { useSelector } from "react-redux";
import { selectMoviesSelectList } from "redux/movies/selectors";
import { IRootState } from "redux/types";
import { IEditScreeningFormFields } from "./types";
import { Grid } from "@material-ui/core";
import { selectHallsSelectList } from "redux/halls/selectors";

const EditScreeningFormFields = () => {
  const moviesSelectList = useSelector((state: IRootState) =>
    selectMoviesSelectList(state)
  );

  const hallsSelectList = useSelector((state: IRootState) =>
    selectHallsSelectList(state)
  );

  const formFields: IEditScreeningFormFields[] = [
    {
      size: 12,
      field: <TextField name="id" label="id" fullWidth disabled />,
    },
    {
      size: 12,
      field: (
        <Select
          label="Movie"
          name="movieId"
          data={moviesSelectList}
          multiple={false}
          required
        />
      ),
    },
    {
      size: 12,
      field: (
        <Select
          label="Hall"
          name="hallId"
          data={hallsSelectList}
          multiple={false}
          required
        />
      ),
    },
    {
      size: 12,
      field: (
        <TextField
          name="dateAndHour"
          label="Date and Hour"
          type="datetime-local"
          required
        />
      ),
    },
  ];

  return (
    <Grid container spacing={2}>
      {formFields.map((item, index) => (
        <Grid item xs={item.size} key={index}>
          {item.field}
        </Grid>
      ))}
    </Grid>
  );
};

export default EditScreeningFormFields;
