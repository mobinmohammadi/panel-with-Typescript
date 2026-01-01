import { useAppDispatch } from "@/redux/hooks";
import { setUser } from "@/redux/user.Slice";
import { AuthApi } from "@/Services/APi/Auth";
import { DetailsMe } from "@/Services/Me/DetailsMe";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

interface IUseUpdateProfail {
  id: number;
  data: IUpdateProfail;
}

export const useUpdateProfail = () => {
  const dispatch = useAppDispatch();
  const queyClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: IUseUpdateProfail) =>
      DetailsMe.updateMe(id, data),
    onSuccess: async (data) => {
      console.log("data ==> ", data);
      toast.success("موفق");
      dispatch(
        setUser({
          id: data.data.id,
          firstname: data.data.firstName,
          lastName: data.data.lastName,
          email: data.data.email,
          avatar: data.data.avatar,
          role: data.data.role,
        })
      );

      queyClient.invalidateQueries({ queryKey: ["getme"] });
    },
    onError(erorr) {
      console.log(erorr);
    },
  });
};
