import { axiosClient } from "../AxiosClient";

export const ProductsApi = {
  createProduct(data: IProductsFormInputs) {
    const url = "products";
    return axiosClient.post(url, data);
  },
  async getProducts() {
    await new Promise((res) => setTimeout(res ,1000))
    const url = "products";
    return axiosClient.get(url);
  },
  async deleteProduct(id: number) {
    console.log(id);
    await new Promise((res) => setTimeout(res, 1500));
    const url = `products/${id}`;
    return axiosClient.delete(url);
  },

  async getOnProduct(id: number) {
    await new Promise((res) => setTimeout(res, 1500));
    const url = `products/${id}`;
    return axiosClient.get<undefined, IApiResponse<IProduct>>(url);
  },
  async updateOnProduct(id: number , data : FormData) {
    await new Promise((res) => setTimeout(res, 1500));
    const url = `products/${id}`;
    return axiosClient.put<undefined, IApiResponse<IProduct>>(url , data);
  },
};
