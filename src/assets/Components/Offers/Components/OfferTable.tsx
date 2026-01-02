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

export default function OfferTable() {
  const { data } = useQueryOffers();

  const coupans = data?.data;


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
                عملیات
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="dark:bg-[#212D45]  bg-white w-full text-gray-900">
            {coupans?.map((row: ICoupans, index: string) => (
              <TableRow
                key={index + 1}
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
                    <span>{row?.code} </span>
                  </div>
                </TableCell>
                <TableCell align="right">
                  <div>
                    <span>% {row?.discountPrice} </span>
                  </div>
                </TableCell>
                <TableCell align="right">
                  <div>
                    <span>{row?.discountType}</span>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
