import React from "react";
import { useSelector } from "react-redux";

//useSelector lets you access entire state and provide you as parameter

export const Display = () => {
  const { count } = useSelector((state) => state.counter);

  return <h1 className="count">{count}</h1>;
};
