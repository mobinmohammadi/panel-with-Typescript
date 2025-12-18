import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
export default function TopbarSidebar({ setIsShowMenuPanel, setIsShowLayer, }) {
    const [isShowModalAdmin, setIsShowModalAdmin] = useState(false);
    const showModalAdmin = () => {
        setIsShowModalAdmin((prev) => !prev);
        setIsShowLayer(true);
    };
    return (_jsxs("div", { className: "pt-5  pr-3 w-full ", children: [_jsx("div", { onClick: () => {
                    setIsShowMenuPanel(true);
                    setIsShowLayer(true);
                }, className: " bg-yellow-500 flex justify-center sm:hidden items-center rounded-md cursor-pointer w-7 h-7", children: _jsx("svg", { className: "w-5 h-5 ", children: _jsx("use", { href: "#bars-3" }) }) }), _jsxs("div", { className: "text-zinc-800 border-solid border-b-1 border-slate-300 pb-4 dark:text-white flex justify-between items-center w-full font-Dana-Demi-bold", children: [_jsxs("div", { className: "flex flex-col gap-1", children: [_jsx("span", { className: "text-xs sm:text-sm", children: "\u062F\u0627\u0634\u0628\u0648\u0631\u062F \u0641\u0631\u0648\u0634\u06AF\u0627\u0647" }), _jsxs("div", { className: "text-xs flex gap-1 tracking-wide", children: [_jsx("span", { className: "text-x sm:text-sm", children: "\u0645\u0628\u06CC\u0646 \u0645\u062D\u0645\u062F\u06CC \u0639\u0632\u06CC\u0632" }), _jsxs("span", { className: "dark:text-primary-dark text-x sm:text-sm", children: ["\u062E\u0648\u0634 \u0622\u0645\u062F\u06CC\u062F", " "] }), _jsx("span", { className: "text-red-700 text-xs", children: "\uD83C\uDF37" })] })] }), _jsxs("div", { className: "flex items-center gap-1 relative z-10 ", children: [_jsxs("div", { className: "border-2 relative border-yellow-400 border-solid rounded-full", children: [_jsx("img", { className: "w-10 h-10 sm:w-14 sm:h-14 cursor-pointer object-cover rounded-full ", src: "./../Admin/Admin.jpg", alt: "" }), _jsx("span", { className: "absolute bg-sky-500 top-0 right-1 h-2 w-2 rounded-full border-solid" })] }), _jsxs("div", { className: "flex flex-col gap-1", onClick: () => setIsShowModalAdmin(true), children: [_jsx("span", { className: "text-x sm:text-xs", children: "\u0645\u0628\u06CC\u0646 \u0645\u062D\u0645\u062F\u06CC" }), _jsxs("div", { className: "flex gap-1", children: [_jsx("span", { className: "text-x ", children: "\u062A\u0648\u0633\u0639\u0647 \u062F\u0647\u0646\u062F\u0647 \u0641\u0631\u0627\u0646\u062A" }), _jsx("svg", { className: "w-4 h-4 sm:w-5  sm:h-5 cursor-pointer", children: _jsx("use", { href: "#chevron-down" }) })] })] }), _jsx(Dropdown, { isShowModalAdmin: isShowModalAdmin, showModalAdmin: showModalAdmin })] })] })] }));
}
