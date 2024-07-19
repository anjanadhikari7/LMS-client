import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./redux/user/userSlice";
import bookReducer from "./redux/book/bookSlice";
import borrowReducer from "./redux/borrow/borrowSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    book: bookReducer,
    borrow: borrowReducer,
  },
});

export default store;
