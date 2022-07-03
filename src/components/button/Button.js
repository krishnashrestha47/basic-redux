import React from "react";

export const Button = ({ increaseCount }) => {
  return (
    <>
      <button increaseCount={increaseCount}>Increment</button> {""}
      <button>Decrement</button>
    </>
  );
};
