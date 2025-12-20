import React, { useEffect } from "react";
import { GetMeQuery } from "./GetMeQuery";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "@/redux/user.Slice";
import { replace, useNavigate } from "react-router-dom";

export default function useAthenticate() {
  const { data, isLoading, error } = GetMeQuery();
  const navigate = useNavigate();
  const user = useSelector((state: any) => state.user);
  const userInfo = useSelector((state: any) => state.user.user);
  const dispatch = useDispatch();
  if (data && !user.isAuthentication) {
    dispatch(
      setUser({
        id: data.id,
        firstname: data.firstname,
        lastname: data.lastname,
        avatar: data.avatar,
        role: data.role,
        email: data.email,
      })
    );
  }

  useEffect(() => {
    if (userInfo.role == "USER") {
      console.log(data);
      navigate("/");
    }
  }, [dispatch, data, user, user.isAuthentication]);
  useEffect(() => {
    if (!data && !user.isAuthentication && !user) {
      navigate("sign-in", { replace: true });
    }
  }, [data, isLoading, user, navigate]);
  console.log("data ==> ", data);
}
