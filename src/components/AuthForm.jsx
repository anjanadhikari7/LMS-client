import { useState } from "react";
import LoginForm from "./loginForm";
import SignupForm from "./signupForm";
import { Button, Container, Stack } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setisLoginForm } from "../redux/user/userSlice";

const AuthForm = () => {
  const dispatch = useDispatch();
  const { isLoginForm } = useSelector((state) => state.user);
  return (
    <Container className="p-4 border shadow-lg">
      <Stack gap={0}>
        {isLoginForm ? <LoginForm /> : <SignupForm />}

        {isLoginForm ? (
          <p>
            Don&apos;t have account?{" "}
            <Button
              variant="link"
              className="p-0"
              onClick={() => dispatch(setisLoginForm(false))}
            >
              Sign Up
            </Button>
          </p>
        ) : (
          <p>
            Already have account?{" "}
            <Button
              variant="link"
              className="p-0"
              onClick={() => dispatch(setisLoginForm(true))}
            >
              Login
            </Button>
          </p>
        )}
      </Stack>
    </Container>
  );
};

export default AuthForm;
