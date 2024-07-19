import axios from "axios";
import { setUser } from "../redux/user/userSlice";

const USER_API_URL = "http://localhost:8000/api/user";
//PUBLIC ROute| Endpoint
// Create a user | Signup

export const createUser = (userObj) => {
  const response = axios
    .post(USER_API_URL, userObj)
    .then((res) => res.data)
    .catch((error) => console.log(error));
  return response;
};

// Login USer
export const loginUser = (userObj) => {
  const response = axios
    .post(`${USER_API_URL}/login`, userObj)
    .then((res) => res.data)
    .catch((error) => console.log(error));
  return response;
};

// Private route | Private Endpoints
// get user

export const getUser = () => {
  const response = axios
    .get(USER_API_URL, {
      headers: {
        Authorization: sessionStorage.getItem("accessJWT"),
      },
    })
    .then((res) => res.data)
    .catch((error) => console.log(error));

  return response;
};
// get all users
export const getAllUser = () => {
  const response = axios
    .get(`${USER_API_URL}/all`, {
      headers: {
        Authorization: sessionStorage.getItem("accessJWT"),
      },
    })
    .then((res) => res.data)
    .catch((error) => console.log(error));

  return response;
};

// Get access token
export const getAccessToken = () => {
  const response = axios
    .get(`${USER_API_URL}/accessjwt`, {
      headers: {
        Authorization: localStorage.getItem("refreshJWT"),
      },
    })
    .then((res) => res.data)
    .catch((error) => console.log(error));
  return response;
};

// Logout user

export const logoutUser = () => {
  const response = axios
    .post(
      USER_API_URL + "/logout",
      {},
      {
        headers: {
          Authorization: sessionStorage.getItem("accessJWT"),
        },
      }
    )
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
  return response;
};
