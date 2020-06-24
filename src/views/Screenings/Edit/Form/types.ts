import { IScreening } from "api/types";

export interface IEditScreeningFormProps {
  screening: IScreening;
}

export interface IEditScreeningFormMappedDispatch {
  addScreening: (screening: IScreening) => void;
}

export interface IEditScreeningFormFields {
  size: any;
  field: React.ReactNode;
}
