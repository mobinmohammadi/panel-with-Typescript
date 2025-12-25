import { ProductsApi } from "@/Services/Products/ProductsApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useCreateProductMutation(reset : () => void) {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (data: FormData | any) => {
      
      return ProductsApi.createProduct(data);
    },
    onSuccess: (data) => {
      console.log("succussFully ===> ", data);
      reset()
      queryClient.invalidateQueries({queryKey : ["products"]})
    },
     onError: (error) => {
      console.log("error ===> ", error);
    },
  });
}
