import React from "react";

export const Button = ({ increaseCount, decreaseCount, reset }) => {
  return (
    <>
      <button onClick={increaseCount}>Increment</button> {""}
      <button onClick={reset}>Reset</button> {""}
      <button onClick={decreaseCount}>Decrement</button>
    </>
  );
};
