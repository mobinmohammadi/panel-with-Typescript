import { jsx as _jsx } from "react/jsx-runtime";
import { showAlert } from "../ShowSwal/ShowSwal";
export default function TrForUser({ id, name, email, rating, role, text, reply, date }) {
    const tdClass = [
        `bg-green-900 text-white border-b-amber-400 border-r-amber-400 border-solid border-b-2 border-r-2`,
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
            role == 1 ? "ادمین" : "کاربر",
            null,
            null,
        ].map((item, index) => {
            if (index === 4) {
                return (_jsx("td", { children: _jsx("svg", { onClick: () => showAlert({ name, email, text, reply }), className: "w-5 h-5 cursor-pointer hover:text-sky-600 mr-2", children: _jsx("use", { href: "#eye" }) }) }, index));
            }
            if (index === 5) {
                return (_jsx("td", { className: tdClass[index], children: _jsx("svg", { className: "w-5 h-5 dark:text-red-600 hover:text-red-600 transition-all", children: _jsx("use", { href: "#trash" }) }) }, index));
            }
            return (_jsx("td", { className: tdClass[index], children: item }, index));
        }) }, id));
}
