// get all books

import { toast } from "react-toastify";
import {
  createBook,
  deleteBook,
  getbooks,
  updateBook,
} from "../../axios/bookAxios";
import { setBooks } from "./bookSlice";

export const getBookAction = () => async (dispatch) => {
  const result = await getbooks();
  if (result?.status === "error") {
    return toast.error(result.message);
  }

  dispatch(setBooks(result.data));
};

// Create a book

export const createBookAction = (bookObj) => async (dispatch) => {
  const result = await createBook(bookObj);
  if (result?.status === "error") {
    return toast.error(result.message);
  }

  toast.success(result.message);

  dispatch(getBookAction());
};

// Update a book
export const updateBookAction = (bookObj) => async (dispatch) => {
  const result = await updateBook(bookObj);
  if (result?.status === "error") {
    return toast.error(result.message);
  }

  toast.success(result.message);

  dispatch(getBookAction());
};

// Delete a book

export const deleteBookAction = (bookId) => async (dispatch) => {
  const result = await deleteBook(bookId);
  if (result?.status === "error") {
    return toast.error(result.message);
  }

  toast.success(result.message);

  dispatch(getBookAction());
};
