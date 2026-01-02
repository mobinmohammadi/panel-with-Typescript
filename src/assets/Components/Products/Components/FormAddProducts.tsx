import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Box } from "@mui/material";
import { useCreateProductMutation } from "../Hooks/useCreateProductMutation";
import { useCategoryQuery } from "@/assets/Pages/Categoris/Hooks/useCategoryQuery";
import CustomFileInput from "./CustomFileInput";
import { useCallback, useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { SechmaFormProduct } from "../Schema/SechmaFormProduct";
import { useUpdateProductMutation } from "../Hooks/useUpdateProductMutation";
import LoaderCustomConfirm from "@/utils/LoaderCustomConfirm";

interface IFormAddProductProps {
  seletcedProduct: IProduct | null;
  setSelectedProduct: (product: IProduct | null) => void;
}

const FormAddProduct = ({
  seletcedProduct,
  setSelectedProduct,
}: IFormAddProductProps) => {
  const { data } = useCategoryQuery();
  const category = data?.data;
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<IProductsFormInputs>({
    defaultValues: {
      name: "",
      longDescription: "",
      shortDescription: "",
      quantity: undefined,
      categoryId: undefined,
      price: undefined,
      main_image: undefined,
    },
    // resolver: yupResolver(SechmaFormProduct),
  });
  const { mutate , isPending } = useUpdateProductMutation({reset});

  useEffect(() => {
    if (seletcedProduct) {
      setValue("name", seletcedProduct.name);
      setValue("price", seletcedProduct.price);
      setValue("categoryId", seletcedProduct.categoryId);
      // setValue("main_image", seletcedProduct.main_image );
      setValue("price", seletcedProduct.price);
      setValue("quantity", seletcedProduct.quantity);
      setValue("shortDescription", seletcedProduct.shortDescription);
      setValue("longDescription", seletcedProduct.longDescription);
    }
  }, [seletcedProduct, setValue]);

  const createProduct = useCreateProductMutation(reset);

  const onSubmit: SubmitHandler<IProductsFormInputs> = (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("longDescription", data.longDescription);
    formData.append("shortDescription", data.shortDescription);
    formData.append("quantity", data.quantity.toString());
    formData.append("categoryId", data.categoryId.toString());
    formData.append("price", data.price.toString());
    formData.append("main_image", data.main_image as File);
    if (seletcedProduct) {
      mutate({ id: seletcedProduct.id, data: formData });

      console.log(seletcedProduct);
    } else {
      createProduct.mutate(formData);
    }
  };

  const changeCategoryId = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
    setValue("categoryId", parseInt(e.target.value));
  };

  return (
    <div className="dark:bg-secondary-dark bg-white  w-full rounded-sm font-Dana-Demi-bold p-5 space-y-2">
      <div className="">
        {isPending ? (
          <LoaderCustomConfirm title="درحال آپدیت...."/>
        ) : (
        <Box
          component={"form"}
          className="flex flex-col gap-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <span className="dark:text-white text-gray-800">ثبت محصول جدید</span>
          <div className="flex flex-col md:flex-none md:grid grid-cols-2 w-full  gap-5 **:rounded-sm  **:outline-0 text-xxs *:flex *:flex-col *:gap-4 ">
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
              {errors.name && (
                <span className="text-red-600 text-x">
                  {errors.name.message}
                </span>
              )}
            </div>

            <div className="">
              <label className="dark:text-white text-[12px]" htmlFor="name">
                توضیحات کوتاه
              </label>

              <input
                {...register("shortDescription")}
                className="dark:bg-white pl-1 pt-2 pb-2 pr-1 bg-slate-300"
                placeholder="توضیح کوتاه...."
              />
              {errors.shortDescription && (
                <span className="text-red-600 text-x">
                  {errors.shortDescription.message}
                </span>
              )}
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
                onChange={(e) => changeCategoryId(e)}
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
              {errors.categoryId && (
                <span className="text-red-700 text-x">
                  {errors.categoryId.message}
                </span>
              )}
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
                {...register("quantity", { valueAsNumber: true })}
                placeholder="موجودی...."
              />
              {errors.quantity && (
                <span className="text-red-700 text-x">
                  {errors.quantity.message}
                </span>
              )}
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
              {errors.longDescription && (
                <span className="text-red-700 text-x">
                  {errors.longDescription.message}
                </span>
              )}
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
                {...register("price", { valueAsNumber: true })}
                placeholder="قیمت...."
              />
              {errors.price && (
                <span className="text-red-700 text-x">
                  {errors.price.message}
                </span>
              )}
            </div>
            <div className="pb-0 dark:bg-white relative ring-cyan-700 hover:ring-3 transition-all cursor-pointer bg-slate-200 flex items-center justify-center border text-center  text-gray-800">
              <CustomFileInput setValue={setValue} />
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

        )}
      </div>
    </div>
  );
};

export default FormAddProduct;
