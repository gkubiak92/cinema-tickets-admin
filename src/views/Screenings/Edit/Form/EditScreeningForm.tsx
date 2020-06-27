import React from "react";
import {
  IEditScreeningFormProps,
  IEditScreeningFormMappedDispatch,
} from "./types";
import { IScreening } from "api/types";
import { addScreeningStart } from "redux/screenings/actions";
import { connect } from "react-redux";
import { Form } from "react-final-form";
import FormFields from "./FormFields";
import { Button } from "@material-ui/core";
import { useRootStyles } from "App.styles";

const EditScreeningForm = ({
  screening,
  addScreeningStart,
}: IEditScreeningFormProps & IEditScreeningFormMappedDispatch) => {
  const rootClasses = useRootStyles();
  const onSubmit = (values: IScreening) => addScreeningStart(values);
  return (
    <>
      <Form
        initialValues={{ ...screening }}
        onSubmit={onSubmit}
        render={({ handleSubmit }) => {
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

const mapDispatchToProps = { addScreeningStart };

export default connect(null, mapDispatchToProps)(EditScreeningForm);
