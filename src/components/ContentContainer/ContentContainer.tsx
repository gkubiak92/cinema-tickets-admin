import React from "react";
import { useStyles } from "./styles";

const ContentContainer: React.FC = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.content}>{children}</div>;
};

export default ContentContainer;
