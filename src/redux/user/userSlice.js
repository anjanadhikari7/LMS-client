import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isLoginForm: true,
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
  },
});

const { reducer: userReducer, actions } = userSlice;

export const { setIsLoading, setisLoginForm } = actions;

export default userReducer;
