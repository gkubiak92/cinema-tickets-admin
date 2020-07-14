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

const drawerWidth = 240;

export const useRootStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // drawerContainer: {
  //   overflow: "auto",
  // },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  crudButton: {
    marginTop: 10,
    marginBottom: 10,
  },
  tableRow: {
    cursor: "pointer",
  },
}));
