import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const savedUser = Cookies.get("user");

const initialState = savedUser
  ? { user: JSON.parse(savedUser), isAuthentication: true }
  : {
      user: {
        id: "",
        firstname: "",
        lastname: "",
        email: "",
        role: "",
        avatar: "",
      },
      isAuthentication: false,
    };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.user.id = payload.id;
      state.user.firstname = payload.firstname;
      state.user.lastname = payload.lastname;
      state.user.email = payload.email;
      state.user.avatar = payload.avatar;
      state.user.role = payload.role;
      state.isAuthentication = payload.isAuthentication;
      if (state.isAuthentication) {
        Cookies.set("user", JSON.stringify(payload), { expires: 7 });
      } else {
        Cookies.remove("user");
      }
    },
  },
});

export default authSlice.reducer;
export const { setUser } = authSlice.actions;
