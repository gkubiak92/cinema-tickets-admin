import React, { Dispatch } from "react";
import {
  IEditScreeningFormProps,
  IEditScreeningFormMappedDispatch,
} from "./types";
import { IScreening } from "api/types";
import { addScreeningStartAction } from "redux/screenings/actions";
import { ScreeningsActionTypes } from "redux/screenings/types";
import { connect } from "react-redux";
import { Form } from "react-final-form";
import FormFields from "./FormFields";
import { Button } from "@material-ui/core";
import { useRootStyles } from "App.styles";

const EditScreeningForm = ({
  screening,
  addScreening,
}: IEditScreeningFormProps & IEditScreeningFormMappedDispatch) => {
  const rootClasses = useRootStyles();
  const onSubmit = (values: IScreening) => addScreening(values);
  return (
    <>
      <Form
        initialValues={{ ...screening }}
        onSubmit={onSubmit}
        render={({ handleSubmit, form, submitting, pristine, values }) => {
          return (
            <form onSubmit={handleSubmit} noValidate>
              <FormFields />
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
    </>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<ScreeningsActionTypes>) => ({
  addScreening: (screening: IScreening) =>
    dispatch(addScreeningStartAction(screening)),
});

export default connect(null, mapDispatchToProps)(EditScreeningForm);
