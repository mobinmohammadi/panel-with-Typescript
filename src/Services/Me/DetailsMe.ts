import { axiosClient } from "../AxiosClient";

export const DetailsMe = {
  updateMe(id: number, data: IUpdateProfail) {
    console.log(data);

    const url = `users/${id}`;
    console.log(id);

    return axiosClient.put<undefined, IApiResponse<IUserData>>(url, {
      firstName: data.firstName,
      lastName: data.lastName,
    });
  },
};
