import { IconButton } from "@mui/material";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import EditIcon from "@mui/icons-material/Edit";
import { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { useForm, SubmitHandler } from "react-hook-form";
import { useUpdateProfail } from "../Hooks/useUpdateProfail";

export default function RightContent() {
  const [isEditeModale, setIsEditeModale] = useState(true);
  const { user } = useSelector((state: any) => state.user);


  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<IUpdateProfail>({
    defaultValues: {
      firstName: user.firstname,
      lastName: user.lastname,
    },
  });
  const { mutate } = useUpdateProfail();
  const onSubmit: SubmitHandler<IUpdateProfail> = (data) => {
    
    mutate({ id: user.id, data });
  };

  return (
    <div className="">
      <div className="flex gap-5 flex-col bg-boxDark pt-3 pb-3 pr-3 pl-3 rounded-xs text-gray-700">
        <div className="flex border-b-2 border-b-gray-700 pb-2 justify-between items-center">
          <span className="text-xs">پروفایل شما</span>
          <span className="text-xs">1404/05/21</span>
        </div>
        <div className="w-22 group  relative  cursor-pointer transition-all overflow-hidden rounded-full">
          <img
            className="w-22  h-22 rounded-full"
            src={
              user.avatar
                ? `${import.meta.env.VITE_BACKEND_URL}/images/users/${
                    user.avatar
                  }`
                : "https://secure.gravatar.com/avatar/7cc3744776786e69ba44033e063546ca?s=96&d=mm&r=g"
            }
            alt=""
          />
          <div className="bg-white/30 z-10 w-full transition-all group-hover:bottom-0 bottom-full  flex items-center justify-center absolute">
            <div className="w-full flex items-center justify-center ">
              <IconButton>
                <AddAPhotoIcon />
              </IconButton>
            </div>
          </div>
          <div className="group-hover:backdrop-blur-xs  w-full h-full absolute top-0"></div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-4 ">
            <span className="text-gray-900 text-sm">
              {user.lastname} {user.firstname}
            </span>
            <span className="text-gray-700 text-xs">{user.email}</span>
          </div>
          <div
            onClick={() => setIsEditeModale(true)}
            className="flex items-center cursor-pointer gap-1 pr-2 bg-secondary-dark rounded-md justify-center dark:text-white"
          >
            <span className="text-x">ویرایش مشخصات</span>
            <IconButton>
              <EditIcon color="primary" fontSize="small" />
            </IconButton>
          </div>
        </div>
        <div>
          <div
            className={`fixed z-50  flex top-1/4  items-center justify-center transition-all duration-250
    ${
      isEditeModale
        ? "opacity-100 scale-100 -translate-x-1/8"
        : "opacity-0 scale-90 pointer-events-none translate-x-1/5  top-[60%]"
    }
  `}
          >
            <div className="bg-gray-700 h-92 rounded-md w-110  p-4 flex flex-col gap-3">
              <div className="bg-emerald-500 pt-2 pb-2 flex items-center justify-center rounded-xs">
                <span className="text-sm  text-white  ">تغییر اطلاعات</span>
              </div>
              <form
                onSubmit={handleSubmit(onSubmit)}
                action="#"
                className="*:text-white  flex justify-between h-full flex-col gap-4 "
              >
                <div className="flex flex-col gap-6 h-full *:flex *:flex-col *:gap-2">
                  <div className="">
                    <label className="text-xs" htmlFor="#">
                      نام
                    </label>
                    <input
                      {...register("firstName")}
                      className="bg-gray-800 outline-0 text-sm p-2 rounded-xs"
                      type="text"
                      placeholder="محسن"
                      id=""
                    />
                  </div>
                  <div className="">
                    <label className="text-xs" htmlFor="lastname">
                      نام خانوادگی
                    </label>
                    <input
                      type="text"
                      className="bg-gray-800 outline-0 text-sm p-2 rounded-xs"
                      placeholder="حریری"
                      id=""
                      {...register("lastName")}
                    />
                  </div>
                </div>

                <button className="bg-green-800 p-2 rounded-sm cursor-pointer">
                  تغییر اطلاعات
                </button>
              </form>
            </div>
          </div>
        </div>
        <div
          onClick={() => setIsEditeModale(false)}
          className={`fixed inset-0 z-40 backdrop-blur-xs bg-black/30 transition-opacity duration-300
    ${isEditeModale ? "opacity-100 visible" : "opacity-0 invisible"}`}
        ></div>
      </div>
    </div>
  );
}
