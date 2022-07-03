import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    counter: 0,
  },
});

export default store;
