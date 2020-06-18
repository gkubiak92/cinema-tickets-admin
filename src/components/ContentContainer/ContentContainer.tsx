import React from "react";
import { useStyles } from "./styles";

const ContentContainer: React.FC = ({ children }) => {
  const classes = useStyles();
  return <main className={classes.content}>{children}</main>;
};

export default ContentContainer;
