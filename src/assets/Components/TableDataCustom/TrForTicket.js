import { jsx as _jsx } from "react/jsx-runtime";
import { showAlert } from "../ShowSwal/ShowSwal";
//  const tdClass = [
//     "bg-green-800 text-white border-b-amber-400 border-r-amber-400 border-solid border-b-2 border-r-2",
//     "",
//     "",
//     "",
//     "w-5 h-5 cursor-pointer hover:text-sky-600 mr-2",
//     "px-4 py-2 cursor-pointer",
//   ];
export default function TrForTicket({ id, name, email, rating, role, text, reply, date }) {
    const tdClass = [
        `${reply ? "bg-green-800" : "bg-sky-900"} text-white border-b-amber-400 border-r-amber-400 border-solid border-b-2 border-r-2`,
        "",
        "",
        "whitespace-nowrap text-ellipsis max-w-4 overflow-hidden",
        "",
        "px-4 py-2 cursor-pointer ",
        "",
    ];
    return (_jsx("tr", { className: "& > *:py-2   font-Dana-Demi-bold text-xs & > *:px-2", children: [
            id,
            name,
            email,
            text,
            rating,
            date,
            reply ? "پاسخ داده شده" : "پاسخ داده نشده",
            null,
            null,
        ].map((item, index) => {
            if (index === 7) {
                return (_jsx("td", { children: _jsx("svg", { onClick: () => showAlert({ name, email, text, reply }), className: "w-5 h-5 cursor-pointer hover:text-sky-600 mr-2", children: _jsx("use", { href: "#eye" }) }) }, index));
            }
            if (index === 8) {
                return (_jsx("td", { className: tdClass[index], children: _jsx("svg", { className: "w-5 h-5 dark:text-red-600 hover:text-red-600 transition-all", children: _jsx("use", { href: "#trash" }) }) }, index));
            }
            return (_jsx("td", { className: tdClass[index], children: item }, index));
        }) }, id));
}
