import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import FormUserCreate from "@/assets/Components/FormUserCreate/FormUserCreate";
import TableDataCustom from "@/assets/Components/TableDataCustom/TableDataCustom";
import { ToastContainer } from "react-toastify";
// @ts-ignore
import { users, tableHeadersUser } from "../../../LocalData/LocalData";
export default function Users() {
    return (_jsxs("div", { className: "flex fl-col gap-5 flex-col", children: [_jsx(FormUserCreate, {}), _jsx(TableDataCustom, { data: users, headers: tableHeadersUser }), _jsx(ToastContainer, { position: "top-right", autoClose: 3000, hideProgressBar: false, newestOnTop: true, closeOnClick: true, rtl: true, pauseOnFocusLoss: true, draggable: true, pauseOnHover: true, toastClassName: "custom-toast", theme: "colored" })] }));
}
