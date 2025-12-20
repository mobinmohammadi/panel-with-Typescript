import { createSlice } from "@reduxjs/toolkit";
import { userLogin } from "./Auth/AuthAction";

const initialState = {
  user: {
    id: "",
    firstname: "",
    lastname: "",
    email: "",
    role: "",
    avatar : ""
  },
  isAuthentication : false
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser : (state , { payload }) => {
      state.user.id = payload.id
      state.user.firstname = payload.firstname
      state.user.lastname = payload.lastname
      state.user.email = payload.email
      state.user.avatar = payload.avatar
      state.user.role = payload.role
      state.isAuthentication = payload.isAuthentication
    }
  },
});

export default authSlice.reducer;
export const { setUser } = authSlice.actions

