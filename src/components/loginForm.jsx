import { Button, Form, Spinner } from "react-bootstrap";
import useForm from "../hooks/useForm";
import CustomInput from "./CustomInput";
import { loginUser } from "../axios/userAxios";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { autoLoginAction, getUserAction } from "../redux/user/userAction";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { setIsLoading } from "../redux/user/userSlice";

const initialFormData = {
  email: "",
  password: "",
};
const LoginForm = () => {
  const { formData, handleOnChange } = useForm(initialFormData);
  const { email, password } = formData;
  const { isLoading } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    dispatch(setIsLoading(true));
    // call axios to hit login endpoint
    const result = await loginUser(formData);

    if (result.status === "error") {
      return toast.error(result.message);
    }

    // If Success
    toast.success(result.message);
    // Store accessJWT in session  Storage
    // Store refreshJWT in local storage
    sessionStorage.setItem("accessJWT", result.data.accessJWT);
    localStorage.setItem("refreshJWT", result.data.refreshJWT);

    // Now get the user info
    dispatch(getUserAction());
    dispatch(setIsLoading(false));
  };

  // Logic to redirect user once logged in
  const { user } = useSelector((state) => state.user);
  useEffect(() => {
    // if logged in navigate to required route
    if (user?._id) {
      navigate("/admin");
    }

    // if not logged in, auyo login logic
    if (!user?._id) {
      dispatch(autoLoginAction());
    }
  }, [user?._id, navigate, dispatch]);

  return (
    <Form onSubmit={(e) => handleOnSubmit(e)}>
      <CustomInput
        label="Email"
        handleOnChange={handleOnChange}
        inputAttributes={{
          type: "email",
          name: "email",
          value: email,
          placeholder: "Enter your Email",
          required: true,
        }}
      />

      <CustomInput
        label="Password"
        handleOnChange={handleOnChange}
        inputAttributes={{
          type: "password",
          name: "password",
          value: password,
          placeholder: "Enter a Password",
          required: true,
        }}
      />

      <Button variant="primary" type="submit">
        {isLoading ? (
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          />
        ) : (
          "Login"
        )}
      </Button>
    </Form>
  );
};

export default LoginForm;
