import React from "react";
import { useStyles } from "./styles";
import { CircularProgress } from "@material-ui/core";

const GlobalSpinner = () => {
  const styles = useStyles();
  return (
    <div className={styles.spinnerContainer}>
      <CircularProgress color="secondary" size={80} />
    </div>
  );
};

export default GlobalSpinner;
