import { jsx as _jsx } from "react/jsx-runtime";
// @ts-ignore
import TableDataCustom from "@/assets/Components/TableDataCustom/TableDataCustom";
// @ts-ignore
import { CommentsHeaderTable, comments } from "./../../../LocalData/LocalData";
export default function Ticket() {
    return (_jsx("div", { className: "mr-3 dark:text-white text-zinc-800 font-Dana-Demi-bold", children: _jsx(TableDataCustom, { headers: CommentsHeaderTable, data: comments }) }));
}
