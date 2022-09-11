import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./ThemeSlice";

const store = configureStore({
  reducer: {
    theme: useReducer,
  },
});

export default store;
