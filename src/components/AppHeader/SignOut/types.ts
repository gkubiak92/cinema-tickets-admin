import { logoutStartAction } from "redux/auth/actions";

type MappedActions = {
  logoutStartAction: typeof logoutStartAction;
};

export type Props = MappedActions;
