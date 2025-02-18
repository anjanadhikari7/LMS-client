import { toast } from "react-toastify";
import {
  createUser,
  deleteUser,
  getAccessToken,
  getAllUser,
  getUser,
  logoutUser,
  updateUser,
} from "../../axios/userAxios";

import { setIsLoading, setisLoginForm, setUser, setUsers } from "./userSlice";

export const signupUserAction = (formData) => async (dispatch) => {
  dispatch(setIsLoading(true));
  // call axios
  const { first_name, last_name, password, email, phone } = formData;
  const result = await createUser({
    first_name,
    last_name,
    password,
    email,
    phone,
  });

  if (result.status === "error") {
    toast.error(result.message);
    dispatch(setIsLoading(false));
    return;
  }

  toast.success(result.message);
  dispatch(setIsLoading(false));
  dispatch(setisLoginForm(true));
};

export const getUserAction = () => async (dispatch) => {
  // call axios to get user

  const result = await getUser();

  if (result?.error) {
    return toast.error(result.message);
  }

  dispatch(setUser(result.data));
};

export const getAllUserAction = () => async (dispatch) => {
  // call axios to get user

  const result = await getAllUser();

  if (result?.error) {
    return toast.error(result.message);
  }

  dispatch(setUsers(result.data));
};

//Auto Login

export const autoLoginAction = () => async (dispatch) => {
  // check if accesstoken wexists
  const accessJWT = sessionStorage.getItem("accessJWT");
  const refreshJWT = localStorage.getItem("refreshJWT");

  // if no access token, get new access token basen on refresh token

  if (!accessJWT && refreshJWT) {
    // call axios to get new access token

    const result = await getAccessToken();

    if (result.status === "success") {
      sessionStorage.setItem("accessJWT", result.data);
      dispatch(getUserAction());
      return;
    }
  }
  //if access token is present, get user

  dispatch(getUserAction());
};

// Logout user

export const logoutUserAction = () => async (dispatch) => {
  // call api to logout from api as well
  const result = await logoutUser();

  if (result.status === "error") {
    return toast.error(result.message);
  }
  //remove tokens from browser
  sessionStorage.removeItem("accessJWT");
  localStorage.removeItem("refreshJWT");
  // clear user state
  dispatch(setUser({}));
  toast.success(result.message);
};

// upodate user

export const updateUserAction = (User) => async (dispatch) => {
  const result = await updateUser(User);
  if (result?.status === "error") {
    return toast.error(result.message);
  }

  toast.success(result.message);

  dispatch(getAllUser());
};

// Delete User

export const deleteUserAction = (UserId) => async (dispatch) => {
  const result = await deleteUser(UserId);

  if (result?.status === "error") {
    return toast.error(result.message);
  }

  toast.success(result.message);
  console.log("Item deleted, fetching new list");
  dispatch(getBooksAction());
};
