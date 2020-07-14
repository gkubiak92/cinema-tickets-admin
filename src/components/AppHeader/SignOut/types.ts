import { logoutStart } from "redux/auth/actions";

type MappedActions = {
  logoutStart: typeof logoutStart;
};

export type Props = MappedActions;
