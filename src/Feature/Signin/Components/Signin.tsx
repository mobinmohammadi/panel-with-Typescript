import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import { SubmitHandler, useForm } from "react-hook-form";
import useLoginMutation from "../Hooks/useLoginMutation";





const sx = {
  direction: "rtl",
  "& input": {
    textAlign: "right",
  },
  "& label": {
    right: 0,
    left: "auto",
    transformOrigin: "top right",
    fontSize: "16px",
  },
};

export default function Signin() {
  const loginMutaion = useLoginMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginData>();
  const onSubmit: SubmitHandler<ILoginData> = (data) => {
    loginMutaion.mutate(data);
  };
  return (
    <>
      <div className="flex h-screen bg-gray-900 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">
            وورد به پنل ادمین
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <Box
            component={"form"}
            className="space-y-6"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col gap-5 ">
              <div className="block w-full bg-white rounded-md  px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6">
                <TextField
                  autoComplete="off"
                  fullWidth
                  type="email"
                  sx={sx}
                  {...register("email")}
                  className="block  font-medium text-gray-100"
                  label="ایمیل"
                  variant="standard"
                />
              </div>
              <div className="block w-full bg-white rounded-md  px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6">
                <TextField
                  autoComplete="off"
                  fullWidth
                  type="password"
                  // InputLabelProps={inputLabelStyles}
                  // InputProps={inputPropsStyles}
                  sx={sx}
                  {...register("password")}
                  className="block  font-medium text-gray-100"
                  label="رمز عبور"
                  variant="standard"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex cursor-pointer w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                {loginMutaion.isPending ? "لطفا صبر کنید" : "ورود"}
              </button>
            </div>
          </Box>

          <p className="mt-10 flex gap-0.5 justify-center text-center text-sm/6 text-gray-400">
            عضو نیستید؟
            <a
              href="#"
              className="font-semibold text-indigo-400 hover:text-indigo-300"
            >
              ثبت نام
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
