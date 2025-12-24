import * as yup from "yup";

export const SechmaFormProduct = yup.object({
  name: yup.string().required("نام محصول الزامی است"),

  longDescription: yup
    .string()
    .required("توضیحات کامل الزامی است"),

  shortDescription: yup
    .string()
    .required("توضیح کوتاه الزامی است"),

  quantity: yup
    .number()
    .typeError("تعداد باید عدد باشد")
    .required("تعداد الزامی است")
    .min(0, "تعداد نمی‌تواند منفی باشد"),

  categoryId: yup
    .number()
    .typeError("دسته‌بندی را انتخاب کنید")
    .required("دسته‌بندی الزامی است"),

  price: yup
    .number()
    .typeError("قیمت باید عدد باشد")
    .required("قیمت الزامی است")
    .min(0, "قیمت نمی‌تواند منفی باشد"),

  main_image: yup
    .mixed<File>()
    .required("تصویر اصلی الزامی است"),
});
