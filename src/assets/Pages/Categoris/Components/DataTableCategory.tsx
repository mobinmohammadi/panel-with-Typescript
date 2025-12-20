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

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

export default function DataTableCategory() {
  const deleteCategory = useDeleteMutation();

  const { data } = useCategoryQuery();
  const category = data?.data;
  ``

  console.log("allCategory ===> ", category);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead className="dark:bg-[#2b3547d1] font-Dana-Demi-bold font-Dana bg-gray-600 ">
          <TableRow className="">
            <TableCell className="" align="right">
              نام دسته بندی
            </TableCell>
            <TableCell className="" align="right">
              آیکون دسته بندی
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody className="dark:bg-[#212D45] bg-white text-gray-900">
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
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
