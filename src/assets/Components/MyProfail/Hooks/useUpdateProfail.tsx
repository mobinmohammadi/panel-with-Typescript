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

export const useUpdateProfail = (setIsEditeModale: (props : boolean) => void) => {
  const dispatch = useAppDispatch();
  const queyClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: IUseUpdateProfail) =>
      DetailsMe.updateMe(id, data),
    onSuccess: async (data) => {
      console.log("data ==> ", data);
      const userInfos = await AuthApi.getMe();
      console.log(userInfos);
      setIsEditeModale(false)
      toast.success("موفق");
      dispatch(
        setUser({
          id: userInfos.id,
          firstname: data.data.firstName,
          lastname: data.data.lastName,
          email: userInfos.email,
          avatar: userInfos.avatar,
          role: userInfos.role,
          isAuthentication: true,
        })
      );

      queyClient.invalidateQueries({ queryKey: ["getme"] });
    },
    onError(erorr) {
      toast.error("خطا در تغییر اطلاعات کابری....")
    },
  });
};
