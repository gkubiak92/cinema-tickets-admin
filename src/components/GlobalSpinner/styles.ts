import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  spinnerContainer: {
    position: "fixed",
    width: "100vw",
    height: "calc(100vh)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    zIndex: 1000,
  },
}));
