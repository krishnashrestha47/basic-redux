import React from "react";
import { useDispatch } from "react-redux";
import { increaseCount, decreaseCount, reset } from "./counterSlice";

export const Button = () => {
  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => dispatch(increaseCount())}>Increment</button> {""}
      <button onClick={() => dispatch(reset())}>Reset</button> {""}
      <button onClick={() => dispatch(decreaseCount())}>Decrement</button>
    </>
  );
};
