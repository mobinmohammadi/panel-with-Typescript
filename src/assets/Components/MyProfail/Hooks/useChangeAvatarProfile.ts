import { useAppDispatch } from "@/redux/hooks";
import { setUser } from "@/redux/user.Slice";
import { AuthApi } from "@/Services/APi/Auth";
import { DetailsMe } from "@/Services/Me/DetailsMe";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useChangeAvatarProfile = () => {
  const queryClient = useQueryClient();
  const dispatch = useAppDispatch();
  return useMutation({
    mutationFn: (data: FormData) => DetailsMe.changeAvatar(data),

    onSuccess: async (data) => {
      const userInfos = await AuthApi.getMe();
      console.log(userInfos);
      console.log(data);

      toast.success("عکس پروفایل شما با موفقیت تغییر کرد");
      dispatch(
        setUser({
          id: userInfos.id,
          firstname: userInfos.firstName,
          lastname: userInfos.lastName,
          role: userInfos.role,
          avatar : userInfos.avatar,
          email: userInfos.email,
          isAuthentication: true,
        })
      );
      queryClient.invalidateQueries({ queryKey: ["getme"] });
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
