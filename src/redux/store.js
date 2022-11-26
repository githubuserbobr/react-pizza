import { configureStore } from "@reduxjs/toolkit";
import sortReducer from "./slices/sortSlice";
import filterReducer from "./slices/filterSlice";
export const store = configureStore({
  reducer: {
    sortReducer,
    filterReducer
  }
})