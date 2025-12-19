import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./../redux/user.Slice"

export const store = configureStore({
    reducer : {
        user : authSlice
    }
})