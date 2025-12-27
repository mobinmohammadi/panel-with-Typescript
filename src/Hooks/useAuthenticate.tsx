import React, { useEffect } from "react";
import { GetMeQuery } from "./GetMeQuery";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "@/redux/user.Slice";
import { useNavigate } from "react-router-dom";

export default function useAuthenticate() {
  const { data, isLoading, error } = GetMeQuery();
  const navigate = useNavigate();
  const role = useSelector((state: any) => state.user?.role);
  const isAuthenticated = useSelector(
    (state: any) => state.user.isAuthentication
  );

  const userInfo = useSelector((state: any) => state.user.user);
  const dispatch = useDispatch();
  useEffect(() => {
    if (data && !isAuthenticated) {
      dispatch(
        setUser({
          id: data.id,
          firstname: data.firstName,
          lastname: data.lastName,
          avatar: data.avatar,
          role: data.role,
          email: data.email,
          isAuthentication: true,
        })
      );
    }
  }, [data, isAuthenticated, dispatch]);

  useEffect(() => {
    if (role == "USER") {
      navigate("/");
    }
  }, [role, navigate]);

  useEffect(() => {
    if (!isLoading && !data && !isAuthenticated) {
      navigate("sign-in", { replace: true });
    }
  }, [data, isLoading, isAuthenticated, navigate]);
}
