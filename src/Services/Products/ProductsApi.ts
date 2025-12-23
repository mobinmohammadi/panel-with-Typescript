import { axiosClient } from "../AxiosClient"

export const  ProductsApi = {
    createProduct(data : IProductsFormInputs){
        const url = "products"
        return axiosClient.post(url , data)
    }
}