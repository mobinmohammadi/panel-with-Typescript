import { axiosClient } from "../AxiosClient";

export const CategoryApi = {
  getCategory() {
    const url = "categories";
    return axiosClient.get(url);
  },
  createCategory(data: any) {
    const url = "categories";
    return axiosClient.post(url, data);
  },
  deleteCategory(id: any) {
    const url = `categories/${id}`;
    return axiosClient.delete(url);
  },
};
