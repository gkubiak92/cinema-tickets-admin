import React from "react";
import { Form } from "react-final-form";
import { Grid, Button } from "@material-ui/core";
import { TextField } from "mui-rff";
import { IEditHallFormData } from "../types";
import { connect } from "react-redux";
import { IEditHallFormProps } from "./types";
import { useRootStyles } from "App.styles";
import { IRootState } from "redux/types";
import {
  selectHallToEditData,
  selectIsHallDataSet,
} from "redux/hall/selectors";
import { setHallData } from "redux/hall/actions";
import { addHallStart } from "redux/halls/actions";

const EditHallForm = ({
  setHallData,
  addHallStart,
  editHallData,
  isHallDataSet,
}: IEditHallFormProps) => {
  const rootClasses = useRootStyles();
  const onSubmit = (values: IEditHallFormData) => {
    setHallData(values);
  };

  const saveButton = isHallDataSet && (
    <Button
      type="button"
      variant="contained"
      color="primary"
      onClick={() => addHallStart()}
    >
      Save
    </Button>
  );

  return (
    <Form
      initialValues={{
        id: editHallData.id,
        name: editHallData.name,
        rows: editHallData.rows,
        seatsPerRow: editHallData.seatsPerRow,
      }}
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <TextField name="id" label="Id" fullWidth disabled />
            <TextField name="name" label="Name" fullWidth required={true} />
            <TextField name="rows" label="Rows" fullWidth required={true} />
            <TextField
              name="seatsPerRow"
              label="Seats per row"
              fullWidth
              required={true}
            />
          </Grid>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            className={rootClasses.crudButton}
          >
            Set seats
          </Button>
          {saveButton}
        </form>
      )}
    />
  );
};

const mapStateToProps = (state: IRootState) => ({
  editHallData: selectHallToEditData(state),
  isHallDataSet: selectIsHallDataSet(state),
});

const mapDispatchToProps = {
  setHallData,
  addHallStart,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditHallForm);
