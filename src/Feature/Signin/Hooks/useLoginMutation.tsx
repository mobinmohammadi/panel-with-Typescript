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
      console.log(userInfos);
      
      dispatch(
        setUser({
          id: userInfos.id,
          firstname: userInfos.firstName,
          lastname: userInfos.lastName,
          role: userInfos.role,
          avatar: userInfos.avatar,
          email: userInfos.email,
          isAuthentication : true
        })
      );

      if (userInfos.role == "USER") {
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
