import { ProductsApi } from "@/Services/Products/ProductsApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";


export function useDeleteProductMutation() {
    const queryClient = useQueryClient()
      return useMutation({
    mutationFn: (id: number) => ProductsApi.deleteProduct(id),
    onSuccess: (data) => {
        queryClient.invalidateQueries({queryKey : ["products"]})
        console.log(data);
        
    },
    onError: (error) => {
      console.log(error);
    },
  });
}
