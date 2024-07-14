import { Button, Col, Form, Row, Spinner } from "react-bootstrap";
import CustomInput from "./CustomInput";
import useForm from "../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { signupUserAction } from "../redux/user/userAction";
import { useEffect, useState } from "react";

const initialFormData = {
  first_name: "",
  last_name: "",
  phone: "",
  email: "",
  password: "",
  confirm_password: "",
};

const SignupForm = (props) => {
  const { formData, handleOnChange } = useForm(initialFormData);
  const dispatch = useDispatch();
  const [isDisabled, setIsDisabled] = useState(true);
  const [isPasswordMatch, setIsPasswordMatch] = useState(null);
  const { isLoading } = useSelector((state) => state.user);
  const { first_name, last_name, phone, email, password, confirm_password } =
    formData;

  // handle form submission
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    dispatch(signupUserAction(formData));
  };

  // Use effect to dynamically check for form validity
  useEffect(() => {
    if (password && confirm_password) {
      const isMatch = password === confirm_password;
      setIsPasswordMatch(isMatch);
    } else {
      setIsPasswordMatch(null);
    }

    if (
      first_name.trim() &&
      last_name.trim() &&
      phone.trim() &&
      email.trim() &&
      password.trim() &&
      confirm_password.trim() &&
      password === confirm_password
    ) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [formData]);

  return (
    <Form onSubmit={handleOnSubmit}>
      <h2 className="text-center mb-4">Create an Account</h2>

      <Row>
        <Col>
          <CustomInput
            label="First Name"
            handleOnChange={handleOnChange}
            inputAttributes={{
              type: "text",
              name: "first_name",
              value: formData.first_name,
              placeholder: "Enter your first name",
              required: true,
            }}
          />
        </Col>

        <Col>
          <CustomInput
            label="Last Name"
            handleOnChange={handleOnChange}
            inputAttributes={{
              type: "text",
              name: "last_name",
              value: formData.last_name,
              placeholder: "Enter your last name",
              required: true,
            }}
          />
        </Col>
      </Row>

      <CustomInput
        label="Phone"
        handleOnChange={handleOnChange}
        inputAttributes={{
          type: "tel",
          name: "phone",
          value: formData.phone,
          placeholder: "Enter your Phone number",
          required: true,
        }}
      />

      <CustomInput
        label="Email"
        handleOnChange={handleOnChange}
        inputAttributes={{
          type: "email",
          name: "email",
          value: formData.email,
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
          value: formData.password,
          placeholder: "Enter a Password",
          required: true,
        }}
      />

      <CustomInput
        label="Confirm Password"
        handleOnChange={handleOnChange}
        inputAttributes={{
          type: "password",
          name: "confirm_password",
          value: formData.confirm_password,
          placeholder: "Enter Password",
          required: true,
          isInvalid: isPasswordMatch === false,
          isValid: isPasswordMatch === true,
        }}
      />
      {isPasswordMatch === false && formData.confirm_password && (
        <Form.Control.Feedback type="invalid" className="d-block">
          Passwords do not match.
        </Form.Control.Feedback>
      )}
      {isPasswordMatch === true && formData.confirm_password && (
        <Form.Control.Feedback type="valid" className="d-block">
          Passwords match.
        </Form.Control.Feedback>
      )}

      <Button
        variant="primary"
        type="submit"
        disabled={isDisabled || isLoading}
      >
        {isLoading ? (
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          />
        ) : (
          "Sign Up"
        )}
      </Button>
    </Form>
  );
};

export default SignupForm;
