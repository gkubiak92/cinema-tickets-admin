import { makeStyles } from "@material-ui/core";
import { drawerWidth } from "components/Menu/styles";

export const useStyles = makeStyles((theme) => ({
  content: {
    marginLeft: drawerWidth,
    padding: 20,
    flexGrow: 1,
  },
}));
