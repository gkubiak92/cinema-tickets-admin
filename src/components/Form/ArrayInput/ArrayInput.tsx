import React, { useState, ChangeEvent } from "react";
import {
  TextField,
  FormGroup,
  IconButton,
  Button,
  Grid,
} from "@material-ui/core";
import { IArrayInputProps } from "./types";
import { Delete, Add } from "@material-ui/icons";

const ArrayInput = ({ passedElements, label }: IArrayInputProps) => {
  const [elements, setElements] = useState<string[]>(passedElements);

  const handleChange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    const elIndex = parseInt(name.replace("field", ""));
    const newArr = [...elements];
    newArr[elIndex] = value;
    setElements(newArr);
  };

  const handleDelete = (index: number) => {
    const newArr = [...elements];
    newArr.splice(index, 1);
    setElements(newArr);
  };

  const handleAdd = () => {
    const newArr = [...elements];
    newArr.push("");
    setElements(newArr);
  };

  return (
    <div className="array-input">
      <p>{label}:</p>
      <Button variant="contained" startIcon={<Add />} onClick={handleAdd}>
        Add
      </Button>
      <FormGroup>
        {elements.map((el, index) => {
          const fieldName = `field${index}`;
          return (
            <Grid container key={`row${index}`}>
              <Grid item xs={10}>
                <TextField
                  key={fieldName}
                  type="text"
                  fullWidth
                  name={fieldName}
                  id={fieldName}
                  value={el}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={2}>
                <IconButton
                  aria-label="delete"
                  key={`delete${fieldName}`}
                  onClick={() => {
                    handleDelete(index);
                  }}
                >
                  <Delete />
                </IconButton>
              </Grid>
            </Grid>
          );
        })}
      </FormGroup>
    </div>
  );
};

export default ArrayInput;
