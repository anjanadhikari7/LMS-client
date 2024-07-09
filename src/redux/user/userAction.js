import { toast } from "react-toastify";
import { createUser } from "../../axios/userAxios";
import { useSelector } from "react-redux";
import { setIsLoading } from "./userSlice";

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
  // Once a user is created, display login form
  //   dispatch(setIsLoginForm(true));
};
