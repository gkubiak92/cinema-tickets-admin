import { makeStyles } from "@material-ui/core";

export const useRootStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  crudButton: {
    marginBottom: 10,
  },
}));
