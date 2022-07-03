import React from "react";
import { Button } from "../button/Button";

export const Form = ({ increaseCount }) => {
  return (
    <div>
      <Button increaseCount={increaseCount} />
    </div>
  );
};
