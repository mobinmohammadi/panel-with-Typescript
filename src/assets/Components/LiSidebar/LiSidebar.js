import { jsx as _jsx } from "react/jsx-runtime";
import { Link } from "react-router-dom";
export default function LiSidebar({ title, changeTitlePageSidebar, link, titlePageSildebar }) {
    return (_jsx(Link, { to: link, onClick: () => changeTitlePageSidebar(title), className: `${title == titlePageSildebar ? "bg-zinc-800 text-white dark:bg-slate-100 dark:text-zinc-800" : 'dark:text-dark-menu'} transition-all  pt-2 pb-2 3xs:pt-1 3xs:pb-1 pr-2 rounded-sm  text-sm sm:text-base  font-Dana-Demi-bold cursor-pointer w-full`, children: title }));
}
