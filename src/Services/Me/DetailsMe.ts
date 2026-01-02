import { axiosClient } from "../AxiosClient";

export const DetailsMe = {
  updateMe(id: number, data: IUpdateProfail) {
    const url = `users/${id}`;

    return axiosClient.put<undefined, IApiResponse<IUserData>>(url, data);
  },
  changeAvatar(data: FormData) {
    const url = `users/change-avatar`;
    return axiosClient.post<undefined, IApiResponse<IUserData>>(url, data);
  },
};
