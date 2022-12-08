import { configureStore } from "@reduxjs/toolkit";
import sortReducer from "./slices/sortSlice";
import filterReducer from "./slices/filterSlice";
import cartReducer from "./slices/cartSlice"

export const store = configureStore({
  reducer: {
    sortReducer,
    filterReducer,
    cartReducer
  }
})
