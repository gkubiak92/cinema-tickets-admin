import { loginStartAction } from "redux/auth/actions";

export interface IMappedDispatch {
  loginStartAction: typeof loginStartAction;
}
