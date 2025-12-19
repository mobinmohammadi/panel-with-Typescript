import { AuthApi } from "@/Services/APi/Auth";
import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";

export const userLogin = createAsyncThunk(
  "auth/login",
  async ({ datas }: { datas: ILoginData }, { rejectWithValue }) => {
    console.log(datas);
    
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await AuthApi.login(datas);
      console.log(datas);

      return data;
    } catch (error: any) {
      if (error.reponse && error.response.data.message) {
        return rejectWithValue(error.message);
      } else {
        return rejectWithValue(error.message || "خطای فضایی");
      }
    }
  }
);
