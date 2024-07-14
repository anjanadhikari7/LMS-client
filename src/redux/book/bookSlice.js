import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [],
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    setBooks: (state, action) => {
      state.books = action.payload;
    },
  },
});

const { reducer: bookReducer, actions } = bookSlice;

export const { setBooks } = actions;
export default bookReducer;
