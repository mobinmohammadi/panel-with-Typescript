import { Controller, useFieldArray, useForm } from "react-hook-form";
import DataTableCategory from "./Components/DataTableCategory";
import { useCategoryQuery } from "./Hooks/useCategoryQuery";
import { useCreateCategoryMutation } from "./Hooks/useCreateCategoryMutation";
import CategoryIcons from "@/assets/coantants/CategoryIcons";
import { FormControl, MenuItem, Select } from "@mui/material";

type FormValues = {
  category: {
    name: string;
    icon: string;
  }[];
};

export function CategorisPage() {
  const { data, isPending } = useCategoryQuery();
  const createCategory = useCreateCategoryMutation();
  const category = data?.data;

  const { control, register, handleSubmit, setValue } = useForm<FormValues>({
    defaultValues: {
      category: [{ name: "", icon: "" }],
    },
  });
  const { fields } = useFieldArray({
    control,
    name: "category",
  });

  const onSubmit = (data: any) => {
    const newCategory = data.category[0];
    createCategory.mutate(newCategory);
    console.log(newCategory);
  };
  {
    isPending && <div className="">Loading....</div>;
  }

  return (
    <>
      <div className="flex flex-col gap-5">
        <div className="">
          {fields.map((field, index) => (
            <div className=" bg-[#212d45] w-full rounded-sm font-Dana-Demi-bold p-5 *:text-xs *:outline-0  *:text-zinc-900 *:pt-2 *:pb-2 *:pr-2 *:rounded-sm">
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
                    className="bg-zinc-800 rounded-md hover:bg-zinc-900 transition-all cursor-pointer pr-4 pl-4 pt-3 pb-3"
                  >
                    ثبت دسته بندی جدید
                  </button>
                </div>
              </form>
            </div>
          ))}
        </div>
        <div className="">
          <DataTableCategory />
        </div>
      </div>
    </>
  );
}
