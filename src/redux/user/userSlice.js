import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isLoginForm: true,
  user: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setisLoginForm: (state, action) => {
      state.isLoginForm = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

const { reducer: userReducer, actions } = userSlice;

export const { setIsLoading, setisLoginForm, setUser } = actions;

export default userReducer;
