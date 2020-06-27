import React from "react";
import { Form } from "react-final-form";
import { Grid, Button } from "@material-ui/core";
import { TextField } from "mui-rff";
import { IEditHallFormData } from "../types";
import { connect } from "react-redux";
import { IEditHallFormMappedDispatch, IEditHallFormMappedState } from "./types";
import { useRootStyles } from "App.styles";
import { IRootState } from "redux/types";
import { selectHallToEditData } from "redux/hall/selectors";
import { setHallSeats } from "redux/hall/actions";

const EditHallForm = ({
  setHallSeats,
  editHallData,
}: IEditHallFormMappedDispatch & IEditHallFormMappedState) => {
  const rootClasses = useRootStyles();
  const onSubmit = (values: IEditHallFormData) => {
    setHallSeats(values);
  };

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
        </form>
      )}
    />
  );
};

const mapStateToProps = (state: IRootState) => ({
  editHallData: selectHallToEditData(state),
});

const mapDispatchToProps = {
  setHallSeats,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditHallForm);
