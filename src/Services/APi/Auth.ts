import { axiosClient } from "../AxiosClient";

export const AuthApi = {
  login(data: ILoginData) {
    const url = "auth/login";
    return axiosClient.post(url, data);
  },
  getMe() {
    const url = "users/me";
    return axiosClient.get<undefined , IUserData>(url);
  },
};
