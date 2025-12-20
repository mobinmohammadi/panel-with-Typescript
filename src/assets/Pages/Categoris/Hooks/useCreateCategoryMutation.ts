import { CategoryApi } from "@/Services/Category/Category";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useCreateCategoryMutation() {
    const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: (data) => CategoryApi.createCategory(data),
    onSuccess: (data) => {
      console.log("succsussFully Create Category", data);
      queryClient.invalidateQueries({queryKey : ['categoris']})
    },
    onError: (error) => {
      console.log("error Create Category", error);
    },
  });

  return mutation
}
