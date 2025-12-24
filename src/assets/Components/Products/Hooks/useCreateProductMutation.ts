import { ProductsApi } from "@/Services/Products/ProductsApi";
import { useMutation } from "@tanstack/react-query";

export function useCreateProductMutation() {
  return useMutation({
    mutationFn: (data: IProductsFormInputs) => {
      console.log(data);
      
      return ProductsApi.createProduct(data);
    },
    onSuccess: (data) => {
      console.log("succussFully ===> ", data);
    },
     onError: (error) => {
      console.log("error ===> ", error);
    },
  });
}
