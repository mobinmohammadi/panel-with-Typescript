import { Controller, useFieldArray, useForm } from "react-hook-form";
import DataTableCategory from "./Components/DataTableCategory";
import { useCategoryQuery } from "./Hooks/useCategoryQuery";
import { useCreateCategoryMutation } from "./Hooks/useCreateCategoryMutation";
import CategoryIcons from "@/assets/coantants/CategoryIcons";
import { FormControl, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import LoaderCustomConfirm from "@/utils/LoaderCustomConfirm";

type FormValues = {
  category: {
    name: string;
    icon: string;
  }[];
};

export function CategorisPage() {
  const mutation = useCreateCategoryMutation();
  const isLoading = mutation.status === "pending";

  const [selectedCategory, setSelectedCategory] = useState<
    ICategoryRespone | undefined
  >(undefined);

  const { control, register, handleSubmit, reset, watch } = useForm<FormValues>(
    {
      defaultValues: {
        category: [{ name: "", icon: "" }],
      },
    }
  );


  const { fields } = useFieldArray({
    control,
    name: "category",
  });

  const onSubmit = (data: any) => {
    console.log(fields);

    const newCategory = data.category[0];
    console.log(mutation.status);

    mutation.mutate(newCategory, {
      onSuccess: () => {
        reset();
      },
    });
  };

  return (
    <>
      <div className="flex flex-col gap-5">
        <div className="">
          {fields.map((field, index) => {
            const watchedFeidls = watch("category");
            const currentField = watchedFeidls[index];
            const isDesaibled =
              isLoading || !currentField.name || !currentField.icon;
            return (
              <div
                key={field.id}
                className=" bg-[#212d45] w-full rounded-sm font-Dana-Demi-bold p-5 *:text-xs *:outline-0  *:text-zinc-900 *:pt-2 *:pb-2 *:pr-2 *:rounded-sm"
              >
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex gap-5 flex-col "
                >
                  <div className="*:text-gray-800 flex gap-2 h-23">
                    <div className="flex flex-col w-full gap-5 ">
                      <label className="text-dark-menu" htmlFor="">
                        نام دسته بندی
                      </label>
                      <input
                        className="custom-input h-full"
                        key={field.id}
                        placeholder="نام دسته بندی جدید"
                        {...register(`category.${index}.name`)}
                      />
                    </div>
                    <div className="flex flex-col w-full h-20 gap-5">
                      <label className="text-dark-menu" htmlFor="">
                        آیکون دسته بندی
                      </label>

                      <FormControl
                        fullWidth
                        sx={{
                          marginBottom: "20px",
                          bgcolor: "#94A3B8",
                          border: "0",
                        }}
                      >
                        <Controller
                          control={control}
                          name={`category.${index}.icon`}
                          render={({ field }) => (
                            <Select
                              style={{ color: "white" }}
                              sx={{
                                "& .MuiOutlinedInput-notchedOutline": {
                                  border: "none",
                                },
                                "&:hover .MuiOutlinedInput-notchedOutline": {
                                  border: "none",
                                },
                                "&.Mui-focused .MuiOutlinedInput-notchedOutline":
                                  {
                                    border: "none",
                                  },
                                color: "white",
                              }}
                              {...field}
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              label="Icons"
                              // onChange={handelChange}
                            >
                              {Object.keys(CategoryIcons).map((item, index) => {
                                return (
                                  <MenuItem
                                    className="text-dark-menu"
                                    key={index + 1}
                                    value={item}
                                  >
                                    {CategoryIcons[item]} {item}
                                  </MenuItem>
                                );
                              })}
                            </Select>
                          )}
                        />
                      </FormControl>
                    </div>
                  </div>
                  <div className="w-full flex justify-end text-white  text-xs ">
                    <button
                      type="submit"
                      disabled={isDesaibled}
                      className={`${isDesaibled ? "bg-slate-500" : "bg-zinc-800 hover:bg-zinc-900 cursor-pointer"}  rounded-md transition-all pr-4 pl-4 pt-3 pb-3 text-white text-xs`}
                    >
                      {isLoading ? (
                        <div className="flex gap-0.5 items-center">
                          <span>در حال ثبت...</span>
                          <span className="loader2"></span> 
                        </div>
                      ) : (
                        "ثبت دسته بندی جدید"
                      )}
                    </button>
                  </div>
                </form>
              </div>
            );
          })}
        </div>
        <div className="">
          {isLoading ? (
            <LoaderCustomConfirm title="در حال ساخت دسته بندی جدید....." />
          ) : (
            <DataTableCategory setSelectedCategory={setSelectedCategory} />
          )}
        </div>
      </div>
    </>
  );
}
