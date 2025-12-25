import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useProductsQuery } from "../Hooks/useProductsQuery";
import DeleteSwal from "@/utils/DeleteSwal";
import Swal from "sweetalert2";
import { useDeleteProductMutation } from "../Hooks/useDeleteProductMutation";
import LoaderCustomConfirm from "@/utils/LoaderCustomConfirm";
import { useNavigate } from "react-router-dom";
import BrushIcon from "@mui/icons-material/Brush";
import { useUpdateProductMutation } from "../Hooks/useUpdateProductMutation";

interface IProductTableProps {
  seletcedProduct: IProduct | null;
  setSelectedProduct: (product: IProduct | null) => void;
}

export default function ProductTable({
  seletcedProduct,
  setSelectedProduct,
}: IProductTableProps) {
  const navigate = useNavigate();
  const { mutate, isPending } = useDeleteProductMutation();
  console.log(seletcedProduct);

  const handelDelete = (product: IProduct) => {
    console.log(product.id);

    DeleteSwal({
      title: `آیا از حذف  محصول ${product.name} اطمینان دارد؟`,
      confirmButtonText: "بله",
      denyButtonText: "خیر",
    }).then((res) => {
      if (res.isConfirmed) {
        mutate(product.id, {
          onSuccess: () => {
            Swal.fire("محصول با موفقیت حذف شد داداش 😎", "", "success");
          },
          onError: () => {
            Swal.fire("ای وای ارور داریم 😥", "", "error");
          },
        });
      } else if (res.isDismissed) {
        Swal.fire("باشه حذف نکردیم بابا 😑", "", "warning");
      }
    });
  };
  const data = useProductsQuery();
  const product = data?.data;
  console.log(product);

  return (
    <div className="flex flex-col gap-5">
      <span className="dark:text-white font-Dana-Demi-bold text-xs">
        تعداد محصولات : {product?.length}{" "}
      </span>

      {isPending ? (
        <LoaderCustomConfirm title="در حال حذف محصول..." />
      ) : (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead className="relative font-Dana-Demi-bold font-Dana bg-gray-600 ">
              <TableRow className="">
                <TableCell className="" align="right">
                  #
                </TableCell>
                <TableCell className="" align="right">
                  نام محصول
                </TableCell>
                <TableCell className="" align="right">
                  قیمت
                </TableCell>
                <TableCell className="" align="right">
                  موجودی
                </TableCell>
                <TableCell className="" align="right">
                  توضیح کوتاه
                </TableCell>
                <TableCell className="" align="right">
                  عکس ها
                </TableCell>
                <TableCell className="" align="right">
                  عملیات
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody className="dark:bg-[#212D45]  bg-white w-full text-gray-900">
              {product?.map((row: IProduct, index: string) => (
                <TableRow
                  key={row.id}
                  className="**:flex **:flex-col **:text-gray-900 dark:**:text-white"
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">
                    <div>
                      <span>{index + 1}</span>
                    </div>
                  </TableCell>
                  <TableCell align="right">
                    <div>
                      <span>{row.name}</span>
                    </div>
                  </TableCell>
                  <TableCell align="right">
                    <div>
                      <span>{row.price}</span>
                    </div>
                  </TableCell>
                  <TableCell align="right">
                    <div>
                      <span>{row.quantity}</span>
                    </div>
                  </TableCell>
                  <TableCell align="right">
                    <div className="w-32">
                      <span className="truncate block">
                        {row.shortDescription}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell align="right">
                    {row.main_image ? (
                      <div>
                        <img
                          className="w-12 h-12 rounded-full"
                          src={`http://localhost:5000/images/products/${row.main_image}`}
                          alt=""
                        />
                      </div>
                    ) : (
                      <span>عکس تنظیم نشده 😐</span>
                    )}
                  </TableCell>

                  <TableCell
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      gap: 2,
                      alignItems: "center",
                    }}
                    align="right"
                  >
                    <div className="flex items-center gap-3 justify-end">
                      <div
                        onClick={() => handelDelete(row)}
                        className="text-red-700 cursor-pointer transition-all hover:text-red-900 hover:-translate-y-1 hover:rotate-12"
                      >
                        <svg className="w-5 h-5">
                          <use href="#trash"></use>
                        </svg>
                      </div>

                      <div
                        onClick={() => navigate(`/products/${row.id}`)}
                        className="text-blue-600 cursor-pointer transition-all hover:text-blue-800 hover:-translate-y-1 hover:rotate-12"
                      >
                        <svg className="w-5 h-5">
                          <use href="#eye"></use>
                        </svg>
                      </div>
                      <div
                        onClick={() => setSelectedProduct(row)}
                        className="text-blue-600 cursor-pointer transition-all hover:text-blue-800 hover:-translate-y-1 hover:rotate-12"
                      >
                        <BrushIcon />
                      </div>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
}
