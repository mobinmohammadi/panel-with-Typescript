import { ProductsApi } from "@/Services/Products/ProductsApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface IUpdateProductPayload {
  id: number;
  data: FormData;
}


interface IUseUpdateProductMutationProps {
    reset : () => void
}

export function useUpdateProductMutation({reset} : IUseUpdateProductMutationProps) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: IUpdateProductPayload) => {
      return ProductsApi.updateOnProduct(id, data);
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      reset()
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });
}
