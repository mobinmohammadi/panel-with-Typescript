import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useCategoryQuery } from "../Hooks/useCategoryQuery";
import CategoryIcons from "@/assets/coantants/CategoryIcons";
import { useDeleteMutation } from "../Hooks/useDeleteMutation";
import DeleteSwal from "./DeleteSwal";
import Swal from "sweetalert2";
import { spawn } from "child_process";
import { useEffect, useState } from "react";

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

interface IDataTableCategoryProps {
  setSelectedCategory: (row: ICategoryRespone) => void;
}

export default function DataTableCategory({
  setSelectedCategory,
}: IDataTableCategoryProps) {
  const { mutate, isPending } = useDeleteMutation();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { data } = useCategoryQuery();
  const category = data?.data;

  const handelDelete = (categoryID: number) => {
    DeleteSwal({
      title: "آیا از حذف این دسته بندی مطمعنی؟",
      confirmButtonText: "بله",
      denyButtonText: "خیر",
    }).then((res) => {
      if (res.isConfirmed) {
        setIsLoading(true);
        setTimeout(() => {
          Swal.fire("با موفقیت حذف شد", "", "success");
          mutate(categoryID);
          setIsLoading(false);
        }, 1500);
      } else if (res.isDenied) {
        Swal.fire("لغو شد", "", "error");
      }
    });
  };

  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
        setIsLoading(false)
    }, 1500);
  } , [category])

  console.log("allCategory ===> ", category);
  return (
    <>
      {isLoading ? (
        <div className="flex gap-1 items-center justify-center w-full h-92  text-white dark:bg-[#2b3547d1] bg-white">
          <span className="font-Dana-Demi-bold dark:text-white text-gray-900">
            در حال حذف دسته بندی.....
          </span>
          <span className="loader"></span>
        </div>
      ) : category?.length ? (
        <>
          <div className="font-Dana-Demi-bold pb-5 flex gap-0.5 text-xs left-5 text-white top-5">
            <span>تعداد دسته بندی ها : </span>
            <span>{category?.length} </span>
          </div>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead className="relative font-Dana-Demi-bold font-Dana bg-gray-600 ">
                <TableRow className="">
                  <TableCell className="" align="right">
                    نام دسته بندی
                  </TableCell>
                  <TableCell className="" align="right">
                    آیکون دسته بندی
                  </TableCell>
                  <TableCell className="" align="right">
                    عملیات
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody className="dark:bg-[#212D45]  bg-white text-gray-900">
                {category?.map((row: ICategoryRespone) => (
                  <TableRow
                    key={row.name}
                    className="**:flex **:flex-col **:text-gray-900 dark:**:text-white"
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="right">
                      <div>
                        <span>{row.name}</span>
                      </div>
                    </TableCell>
                    <TableCell align="right">
                      <div>
                        <span>{CategoryIcons[row.icon]}</span>
                      </div>
                    </TableCell>
                    <TableCell align="right">
                      <div
                        onClick={() => handelDelete(row.id)}
                        className="*:text-red-700  transition-all"
                      >
                        <svg className="w-5 h-5 ss hover:text-red-900 hover:-translate-y-1 hover:rotate-12 cursor-pointer ">
                          <use href="#trash"></use>
                        </svg>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      ) : (
        <div className="flex justify-center items-center w-full h-92 dark:bg-[#2b3547d1] bg-white ">
          <span className="font-bold font-Dana-Demi-bold dark:text-white text-gray-900">
            دسته بندی وجود ندارد 🙄
          </span>
        </div>
      )}
    </>
  );
}
