import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Box } from "@mui/material";
import { useCreateProductMutation } from "../Hooks/useCreateProductMutation";
import { useCategoryQuery } from "@/assets/Pages/Categoris/Hooks/useCategoryQuery";
import CustomFileInput from "./CustomFileInput";
import { useCallback, useEffect } from "react";

const FormAddProduct = () => {
  const { data } = useCategoryQuery();
  const category = data?.data;
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      name: "",
      longDescription: "",
      shortDescription: "",
      quantity: "",
      categoryId: "",
      price: "",
      main_image: "",
    },
  });

  const createProduct = useCreateProductMutation();

  const onSubmit: SubmitHandler<IProductsFormInputs> = useCallback((data) => {
    createProduct.mutate(data);
  }, []);

  return (
    <div className="dark:bg-secondary-dark bg-white  w-full rounded-sm font-Dana-Demi-bold p-5 space-y-2">
      <div className="">
        <Box
          component={"form"}
          className="flex flex-col gap-5"
        //   onSubmit={handleSubmit(onSubmit)}
        >
          <span className="dark:text-white text-gray-800">ثبت محصول جدید</span>
          <div className="grid grid-cols-1 3xs:grid-cols-2  **:w-full gap-5  **:outline-0 text-xxs *:flex *:flex-col *:gap-4  **:rounded ">
            <div className="">
              <label
                htmlFor="name"
                className="text-[12px] dark:text-white text-gray-800 "
              >
                نام محصول
              </label>
              <input
                {...register("name")}
                placeholder="آیفون 17 پرو مکس"
                className="dark:bg-white pt-2 pb-2 pr-1 bg-slate-200"
              />
            </div>

            <div className="">
              <label className="dark:text-white text-[12px]" htmlFor="name">
                توضیحات کوتاه
              </label>

              <input
                {...register("shortDescription")}
                className="dark:bg-white pt-2 pb-2 pr-1 bg-slate-300"
                placeholder="توضیح کوتاه...."
              />
            </div>
            <div className="">
              <label
                className="dark:text-white text-gray-800 text-[12px]"
                htmlFor="name"
              >
                انتخاب دسته بندی
              </label>
              <select
                className="dark:bg-white pt-2 pb-2 pr-1 bg-slate-200"
                {...register("categoryId")}
                name=""
                id=""
              >
                <option value="">انتخاب دسته بندی...</option>
                {category?.map((item: ICategoryRespone) => (
                  <option key={item.id} value={`${Number(item.id)}`}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="">
              <label
                className="dark:text-white text-[12px] text-gray-800"
                htmlFor="quantity"
              >
                موجودی
              </label>

              <input
                className="dark:bg-white pt-2 pb-2 pr-1 bg-slate-200"
                {...register("quantity")}
                placeholder="موجودی...."
              />
            </div>

            <div className="col-span-2">
              <label className="dark:text-white text-[12px]" htmlFor="name">
                توضیحات محصول
              </label>
              <textarea
                {...register("longDescription")}
                className="dark:bg-white pt-2 pb-2 pr-1 bg-slate-200 h-24 sm:h-34"
                placeholder="توضیحات محصول...."
              />
            </div>
            <div className="">
              <label
                className="dark:text-white text-[12px] text-gray-800"
                htmlFor="price"
              >
                قیمت
              </label>
              <input
                className="dark:bg-white pt-2 pb-2 pr-1 bg-slate-200"
                {...register("price")}
                placeholder="قیمت...."
              />
            </div>
            <div className="pb-0 dark:bg-white pt-2  pr-1 ring-cyan-700 hover:ring-3 transition-all cursor-pointer bg-slate-200 flex items-center justify-center border text-center  text-gray-800">
              <span>عکس انتخابی خالی است</span>
              <CustomFileInput />
            </div>
          </div>
          <div className="flex items-end justify-end">
            <button
              type="submit"
              className="bg-zinc-900 cursor-pointer  rounded-md transition-all pr-4 pl-4 pt-3 pb-3 text-white text-xs"
            >
              ثبت محصول جدید
            </button>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default FormAddProduct;
