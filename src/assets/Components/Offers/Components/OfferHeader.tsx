import { SubmitHandler, useForm } from "react-hook-form";
import { useAddOffersMutation } from "../Hook/useAddOffersMutation";

function OfferHeader() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<ICoupans>();
  const addCopansMutate = useAddOffersMutation(reset);

  const onSubmit: SubmitHandler<ICoupans> = (data) => {
    const discountPrice = parseInt(data.discountPrice);
    const newCoupans = { ...data, discountType: "VALUE" };
    console.log(newCoupans);

    addCopansMutate.mutate(newCoupans);
  };
  return (
    <div className="flex mt-4 flex-col md:flex-none w-full  gap-5  ">
      <form action="#" className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <div className=" gap-12 w-full flex flex-col">
          <div className="grid grid-cols-2  **:rounded-sm **:outline-0 text-xxs *:flex *:flex-col *:gap-4  **:text-secondary-dark gap-5">
            <div className="">
              <label className="text-[12px] dark:text-white text-gray-800 ">
                نام کد
              </label>
              <input
                placeholder="RcShop-52"
                className="dark:bg-white pt-2 pb-2 pr-1 bg-slate-200"
                {...register("code")}
              />
            </div>
            <div className="">
              <label className="text-[12px] dark:text-white text-gray-800 ">
                درصد تخفیف
              </label>
              <input
                type="number"
                placeholder="10"
                className="dark:bg-white pt-2 pb-2 pr-1 bg-slate-200"
                {...register("discountPrice", {
                  valueAsNumber: true,
                })}
              />
            </div>
          </div>
          <div className="w-full flex items-end justify-end ">
            <button
              type="submit"
              className="bg-gray-900 w-48  rounded-sm cursor-pointer hover:bg-gray-950 transition-all pt-2 pb-2 text-white"
            >
              ثبت کد
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default OfferHeader;
