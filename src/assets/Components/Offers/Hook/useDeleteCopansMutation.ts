import { CopansApi } from "@/Services/CopansApi/CopansApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteCopansMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (name: string) => CopansApi.deleteCoupans(name),

    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["copans"] });
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
