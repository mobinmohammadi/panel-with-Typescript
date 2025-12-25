import { Rating, Stack } from "@mui/material";
import { useOnProductQuery } from "../Hooks/useOnProductQuery";
import { useParams } from "react-router-dom";
import LoaderCustomConfirm from "@/utils/LoaderCustomConfirm";

export default function ContentSingleProduct() {
  const { ProductID } = useParams();
  const { data, isError } = useOnProductQuery(Number(ProductID));
  const productData = data?.data;
  console.log(productData);

  return (
    <div>
      <>
        {productData ? (
          <div className="dark:bg-secondary-dark bg-white  w-full rounded-sm font-Dana-Demi-bold p-5 space-y-2 text-gray-900 dark:text-white">
            <div className="flex  gap-5">
              <div className="dark:ring-amber-500 w-62 h-62 ring-4 ring-green-800 rounded-sm">
                {productData?.main_image ? (
                  <img
                    className="w-full h-full object-cover"
                    src={`http://localhost:5000/images/products/${productData.main_image}`}
                    alt={"بدون عکس"}
                  />
                ) : (
                  <span>بدون عکس...</span>
                )}
              </div>
              <div className="flex flex-col gap-3 ">
                <div className="">
                  <span className="text-[14px]">نام محصول : </span>
                  <span className="text-xs">{productData.name}</span>
                </div>
                <div className="text-xs flex flex-col gap-2">
                  <span>امتیاز کابران سایت به این محصول :</span>
                  <Rating
                    sx={{ width: 10 }}
                    name="read-only"
                    value={2.5}
                    readOnly
                  />
                </div>
                <div className="text-[14px]">
                  <span>تاریخ اضافه شدن در فروشگاه : </span>
                  <span dir="rtl" className="text-xs">
                    {productData.createdAt.slice(0, 10)}
                  </span>
                </div>
                <div className="flex flex-col gap-3 ">
                  <span className="text-[14px]">سایر عکس های محصول : </span>
                  <div className="flex gap-2  *:block  *:rounded-sm">
                    {productData.productImages.length ?
                      productData.productImages.map((item) => (
                        <img
                          className="object-contain p-2 w-22 h-22 bg-white"
                          src={`http://localhost:5000/images/products/${item.image}`}
                          alt=""
                        />
                      )) : (
                        <span className="w-58 text-xs border-b-2 pb-1 text-center mt-5">متاصفانه عکس دیگری از محصول نداریم 😑</span>
                      )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <LoaderCustomConfirm title="دیتا در حالت دریافت از سرور...." />
        )}
      </>
    </div>
  );
}
