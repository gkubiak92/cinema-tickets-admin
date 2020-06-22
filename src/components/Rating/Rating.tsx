import React from "react";
import { IRatingProps } from "./types";
import { Star, StarBorder } from "@material-ui/icons";

const Rating = ({ rating, showTitle }: IRatingProps) => {
  let stars = [];
  for (let index = 0; index <= 5; index++) {
    rating <= index
      ? stars.push(<StarBorder key={index} />)
      : stars.push(<Star key={index} />);
  }

  return (
    <div className="rating">
      {showTitle ? <p>Rating:</p> : null}
      {stars}
    </div>
  );
};

export default Rating;
