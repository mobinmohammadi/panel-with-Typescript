import { axiosClient } from "../AxiosClient";

export const CategoryApi = {
  async getCategory() {
    await new Promise((res) => setTimeout(res, 1500));
    const url = "categories";
    return axiosClient.get(url);
  },
  async createCategory(data: any) {
    await new Promise((res) => setTimeout(res, 1500));
    const url = "categories";
    return axiosClient.post(url, data);
  },
  async deleteCategory(id: any) {
    await new Promise((res) => setTimeout(res, 1500));
    const url = `categories/${id}`;
    return axiosClient.delete(url);
  },
};
