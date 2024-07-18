import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./redux/user/userSlice";
import bookReducer from "./redux/book/bookSlice";
import borrowReducer from "./redux/borrow/borrowAction";

const store = configureStore({
  reducer: {
    user: userReducer,
    book: bookReducer,
    borrow: borrowReducer,
  },
});

export default store;
