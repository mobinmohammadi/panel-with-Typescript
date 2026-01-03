import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useQueryOffers } from "../Hook/useQueryOffers";
import DeleteSwal from "@/utils/DeleteSwal";
import Swal from "sweetalert2";
import { useDeleteCopansMutation } from "../Hook/useDeleteCopansMutation";
import LoaderCustomConfirm from "@/utils/LoaderCustomConfirm";

export default function OfferTable() {
  const { data } = useQueryOffers();

  const coupans = data?.data;
  console.log(coupans);

  const { mutate, isPending, isError } = useDeleteCopansMutation();

  const handelDelete = (copans: ICoupans) => {
    console.log(copans);
    DeleteSwal({
      title: `آیا از حذف  کد تخفیف ${copans.code} اطمینان دارد؟`,
      confirmButtonText: "بله",
      denyButtonText: "خیر",
    }).then((res) => {
      if (res.isConfirmed) {
        mutate(copans.code, {
          onSuccess: () => {
            Swal.fire("کد تخفیف با موفقیت حذف شد داداش 😎", "", "success");
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

  if (isError) return <LoaderCustomConfirm title="مشکل در ساختن کد تخفیف" />;

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead className="relative font-Dana-Demi-bold font-Dana bg-gray-600 ">
            <TableRow className=" font-Dana-Demi-bold">
              <TableCell className="" align="right">
                #
              </TableCell>
              <TableCell className="" align="right">
                نام کد تخفیف
              </TableCell>
              <TableCell className="" align="right">
                درصد
              </TableCell>
              <TableCell className="" align="right">
                نوع
              </TableCell>

              <TableCell className="" align="right">
                عملیات
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="dark:bg-[#212D45]  bg-white w-full text-gray-900">
            {isPending ? (
              <LoaderCustomConfirm title="در حال ساخت کد تخفیف..." />
            ) : (
              coupans?.map((row: ICoupans, index: string) => (
                <TableRow
                  key={`${row.code} - ${row.discountPrice}`}
                  className={`relative **:flex ${
                    row.discountPrice === 0
                      ? "after:absolute opacity-30 after:inset-0 after:h-[2px] after:bg-red-500 after:top-1/2 after:-translate-y-1/2"
                      : ""
                  } **:flex-col **:text-gray-900 dark:**:text-white`}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">
                    <div>
                      <span>{index + 1}</span>
                    </div>
                  </TableCell>
                  <TableCell align="right">
                    <div>
                      <span>{row?.code}</span>
                    </div>
                  </TableCell>
                  <TableCell align="right">
                    <div>
                      <span>
                        {row?.discountPrice == 0
                          ? "کد تخفیف منقضی شده است"
                          : row?.discountPrice + "%"}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell align="right">
                    <div>
                      <span>{row?.discountType}</span>
                    </div>
                  </TableCell>
                  <TableCell
                    onClick={() => {
                      row.discountPrice == 0 ? "" : handelDelete(row);
                    }}
                    align="right"
                  >
                    <div
                      className={`${
                        row.discountPrice == 0 ? "" : "cursor-pointer"
                      }`}
                    >
                      <svg className="w-5 h-5">
                        <use xlinkHref="#trash"></use>
                      </svg>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
