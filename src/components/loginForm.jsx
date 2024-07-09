import { Button, Form } from "react-bootstrap";
import useForm from "../hooks/useForm";
import CustomInput from "./CustomInput";
import { loginUser } from "../axios/userAxios";
import { toast } from "react-toastify";

const initialFormData = {
  email: "",
  password: "",
};
const LoginForm = () => {
  const { formData, handleOnChange } = useForm(initialFormData);
  const { email, password } = formData;

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    // call axios to hit login endpoint
    const result = await loginUser(formData);

    if (result.error) {
      return toast.error(result.message);
    }

    // If Success

    // Store accessJWT in session  Storage
    // Store refreshJWT in local storage
    sessionStorage.setItem("accessJWT", result.data.accessJWT);
    localStorage.setItem("refreshJWT", result.data.refreshJWT);

    // Now get the user info
  };

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
        Login
      </Button>
    </Form>
  );
};

export default LoginForm;
