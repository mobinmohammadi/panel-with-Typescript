import { userLogin } from "@/redux/Auth/AuthAction";
import { setUser } from "@/redux/user.Slice";
import { AuthApi } from "@/Services/APi/Auth";
import { useMutation } from "@tanstack/react-query";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function useLoginMutation() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginMutation = useMutation({
    mutationFn: (data: ILoginData) => AuthApi.login(data),
    onSuccess: async (data) => {
      const userInfos = await AuthApi.getMe();
      dispatch(
        setUser({
          id: userInfos.id,
          firstname: userInfos.firstname,
          lastname: userInfos.lastname,
          role: userInfos.role,
          avatar: userInfos.avatar,
          email: userInfos.email,
        })
      );

      if (userInfos.role == "ADMIN") {
        navigate("/");
      }

      console.log("succusFully login", data);
    },
    onError: (error) => {
      console.log("error login", error);
    },
  });
  return loginMutation;
}
