import { createSlice } from "@reduxjs/toolkit";

// in the function: state will give access to initialState, action will receive parameters when you call the function and provide arguments.

const initialState = {
  count: 0,
};
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increaseCount: (state, action) => {
      state.count += 1;
    },
    decreaseCount: (state, action) => {
      state.count -= 1;
    },
    reset: (state, action) => {
      state.count = 0;
    },
  },
});

const { reducer, actions } = counterSlice;

export const { increaseCount, decreaseCount, reset } = actions;

export default reducer;
