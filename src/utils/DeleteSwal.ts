import Swal from "sweetalert2";

interface IDeleteSwalProps {
  title: string;
  confirmButtonText: string;
  denyButtonText: string;
}

export default function DeleteSwal({
  title,
  confirmButtonText,
  denyButtonText,
}: IDeleteSwalProps) {
  return Swal.fire({
    title,
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText,
    denyButtonText,
  })
}
