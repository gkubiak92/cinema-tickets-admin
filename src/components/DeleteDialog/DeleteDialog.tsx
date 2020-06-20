import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@material-ui/core";
import { IDeleteDialogProps } from "./types";

const DeleteDialog = ({
  title,
  message,
  onConfirm,
  onCancel,
  open,
}: IDeleteDialogProps) => (
  <Dialog open={open}>
    <DialogTitle>{title ? title : "Deleting confirmation"}</DialogTitle>
    <DialogContent>
      <DialogContentText>
        {message ? message : "Are you sure you want to delete this item?"}
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button
        onClick={() => {
          onCancel();
        }}
      >
        Cancel
      </Button>
      <Button
        onClick={() => {
          onConfirm();
        }}
      >
        Delete
      </Button>
    </DialogActions>
  </Dialog>
);

export default DeleteDialog;
