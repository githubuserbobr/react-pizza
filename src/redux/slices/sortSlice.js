import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0,
  sortMethod: "asc",
  sortProperty: "",
  sortList: [
    { name: "цене(по возрастанию)", sortProperty: "price" },
    { name: "цене(по убыванию)", sortProperty: "price", method: "desc" },
    { name: "популярности(по возрастанию)", sortProperty: "rating" },
    {
      name: "популярности(по убыванию)",
      sortProperty: "rating",
      method: "desc",
    },
    { name: "алфавиту(по возрастанию)", sortProperty: "title" },
    { name: "алфавиту(по убыванию)", sortProperty: "title", method: "desc" },
  ],
  currentPage: 1
};

export const sortSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategoryId: (state, action) => {
      state.categoryId = action.payload;
    },
    setSortMethod: (state, action) => {
      if (action.payload.hasOwnProperty("method")) {
        state.sortMethod = "desc";
      } else {
        state.sortMethod = "asc";
      }
    },
    setSortProperty: (state, action) => {
      state.sortProperty = action.payload.sortProperty;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload
    },
    setSort: (state, action) => {
      state.sortProperty = action.payload.sortProperty;
      state.categoryId = action.payload.categoryId;
      state.currentPage = Number(action.payload.currentPage);
      if (action.payload.hasOwnProperty("method")) {
        state.sortMethod = "desc";
      } else {
        state.sortMethod = "asc";
      }
    },
  },
});

export const { setCurrentPage,setCategoryId, setSortMethod, setSortProperty, setSort } =
  sortSlice.actions;
export default sortSlice.reducer;
