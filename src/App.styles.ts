import { makeStyles, createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
  overrides: {
    MuiTableRow: {
      root: {
        backgroundColor: "",
        "&:hover": { backgroundColor: "#eee" },
        cursor: "pointer",
      },
    },
  },
});

export const useRootStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  crudButton: {
    marginTop: 10,
    marginBottom: 10,
  },
  tableRow: {
    cursor: "pointer",
  },
}));
