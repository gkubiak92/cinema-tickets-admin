import { hideAlert } from "redux/ui/actions";

type MappedState = {
  alert: {
    open: boolean;
    message: string;
  };
};

type MappedActions = {
  hideAlert: typeof hideAlert;
};

export type Props = MappedState & MappedActions;
