import { IScreening } from "api/types";
import { addScreeningStart } from "redux/screenings/actions";

export interface IEditScreeningFormProps {
  screening: IScreening;
}

export interface IEditScreeningFormMappedDispatch {
  addScreeningStart: typeof addScreeningStart;
}

export interface IEditScreeningFormFields {
  size: any;
  field: React.ReactNode;
}
