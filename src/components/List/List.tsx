import React, { useState } from "react";
import { useRootStyles } from "App.styles";
import { useHistory, Link } from "react-router-dom";
import { ListProps } from "./types";
import {
  Button,
  TableContainer,
  Table,
  TableHead,
  Paper,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  Grid,
} from "@material-ui/core";
import { Add, Delete, Refresh } from "@material-ui/icons";
import DeleteDialog from "components/DeleteDialog";

const List = ({
  collectionName,
  itemName,
  items,
  collectionTitle,
  fieldsToDisplay,
  onDeleteItem,
  onRefresh,
  onRowClick,
}: ListProps) => {
  const rootClasses = useRootStyles();
  const history = useHistory();
  const handleRowClick = (id: string) => {
    if (onRowClick) {
      onRowClick();
    }
    history.push(`/edit-${itemName}/${id}`);
  };

  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [itemToDelete, setItemToDelete] = useState("");

  const deleteDialog = onDeleteItem ? (
    <DeleteDialog
      open={openDeleteDialog}
      onConfirm={() => {
        onDeleteItem(itemToDelete);
        setItemToDelete("");
        setOpenDeleteDialog(false);
      }}
      onCancel={() => setOpenDeleteDialog(false)}
    />
  ) : null;

  return (
    <>
      <Grid container>
        <Button
          className={rootClasses.crudButton}
          variant="contained"
          color="primary"
          startIcon={<Add />}
          component={Link}
          to={`/edit-${itemName}/`}
        >
          Add
        </Button>
        <IconButton onClick={() => onRefresh()}>
          <Refresh />
        </IconButton>
      </Grid>

      <TableContainer component={Paper}>
        <Table aria-label={collectionTitle}>
          <TableHead>
            <TableRow>
              {fieldsToDisplay.map((field) => (
                <TableCell key={field}>{field}</TableCell>
              ))}
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item) => (
              <TableRow key={item.id}>
                {fieldsToDisplay.map((field) => (
                  <TableCell
                    key={`${item.id}${field}`}
                    onClick={() => handleRowClick(item.id)}
                  >
                    {item[field]}
                  </TableCell>
                ))}
                <TableCell>
                  <IconButton
                    aria-label="delete"
                    onClick={() => {
                      setItemToDelete(item.id);
                      setOpenDeleteDialog(true);
                    }}
                  >
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
            {deleteDialog}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default List;
