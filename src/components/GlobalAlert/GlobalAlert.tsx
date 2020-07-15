import React from "react";
import { Snackbar, IconButton } from "@material-ui/core";
import { IRootState } from "redux/types";
import { selectGlobalAlert } from "redux/ui/selectors";
import { hideAlert } from "redux/ui/actions";
import { connect } from "react-redux";
import { Props } from "./types";
import { Close } from "@material-ui/icons";

const GlobalAlert = ({ alert, hideAlert }: Props) => {
  const { open, message } = alert;
  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      message={message}
      onClose={hideAlert}
      action={
        <IconButton
          size="small"
          aria-label="close"
          color="inherit"
          onClick={hideAlert}
        >
          <Close fontSize="small" />
        </IconButton>
      }
    />
  );
};

const mapStateToProps = (state: IRootState) => ({
  alert: selectGlobalAlert(state),
});

const mapDispatchToProps = {
  hideAlert,
};

export default connect(mapStateToProps, mapDispatchToProps)(GlobalAlert);
