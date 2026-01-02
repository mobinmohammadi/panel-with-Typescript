import { CopansApi } from "@/Services/CopansApi/CopansApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useAddOffersMutation = (reset: () => void) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: ICoupans) => CopansApi.createCoupans(data),
    onSuccess: () => {
      reset();
      toast.success("کد تخفیف با موفقیت ساخته شد ");
      queryClient.invalidateQueries({ queryKey: ["copans"] });
    },
    onError: (error) => {
      toast.error("ارور ساخت کد تخفیف");
      console.log(error);
    },
  });
};
