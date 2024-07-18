// get all books

import { toast } from "react-toastify";
import {
  createBook,
  deleteBook,
  getBook,
  getbooks,
  updateBook,
} from "../../axios/bookAxios";
import { setBooks } from "./bookSlice";

export const getBooksAction = () => async (dispatch) => {
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

  dispatch(getBooksAction());
};

// Update a book
export const updateBookAction = (bookObj) => async (dispatch) => {
  const result = await updateBook(bookObj);
  if (result?.status === "error") {
    return toast.error(result.message);
  }

  toast.success(result.message);

  dispatch(getBooksAction());
};

// Delete a book

export const deleteBookAction = (bookId) => async (dispatch) => {
  console.log(`Deleting item with id: ${bookId}`);
  const result = await deleteBook(bookId);

  if (result?.status === "error") {
    return toast.error(result.message);
  }

  toast.success(result.message);
  console.log("Item deleted, fetching new list");
  dispatch(getBooksAction());
};

// Get a book
// get a books
export const getBookAction = (_id) => async (dispatch) => {
  const result = await getBook(_id);

  if (result?.status === "error") {
    return toast.error(result.message);
  }

  dispatch(setBook(result.data));
};
