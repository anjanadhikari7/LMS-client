import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  review: {},
  reviews: [],
};

const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    setReview: (state, action) => {
      state.review = action.payload;
    },
  },
});
