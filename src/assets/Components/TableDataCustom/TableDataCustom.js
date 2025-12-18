import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import Th from "./Th";
import TrForTicket from "./TrForTicket";
import TrForUser from "./TrForUsers";
import { useLocation } from "react-router-dom";
export default function TableDataCustom({ data, headers }) {
    const location = useLocation();
    const pathAfterPanel = location.pathname.split("/")[1];
    const [currentPage, setCurrentPage] = useState(1);
    const [rowPageShow, setRowPageShow] = useState(13);
    const totalPage = Math.ceil(data.length / rowPageShow);
    const handlePageForShow = (sum) => {
        setCurrentPage(sum);
    };
    console.log();
    const startIndex = (currentPage - 1) * rowPageShow;
    const currentItems = data.slice(startIndex, startIndex + rowPageShow);
    const handlePageForPrev = () => {
        setCurrentPage((prev) => prev - 1);
    };
    const handlePageForNext = () => {
        setCurrentPage((prev) => prev + 1);
    };
    return (_jsxs("div", { className: "overflow-x-auto pb-10 ", children: [_jsxs("table", { className: "min-w-full   dark:bg-[#212d45] bg-white  rounded-sm  text-right", children: [_jsx("thead", { className: "  dark:bg-[#2b3547d1] dark:text-white border-b-2 dark:border-b-2 border-sky-800 border-solid", children: _jsx("tr", { className: "& > *:text-x & > *:text-sm & > *:px-4 & > *:py-2 ", children: pathAfterPanel == "users" ? headers.map((title, index) => (_jsx(Th, { children: title }, index + 1)))
                                : headers.map((title, index) => (_jsx(Th, { children: title }, index + 1))) }) }), _jsx("tbody", { className: " dark:text-dark-menu ", children: pathAfterPanel == "users"
                            ? currentItems.map((user) => _jsx(TrForUser, { ...user }))
                            : currentItems.map((user) => _jsx(TrForTicket, { ...user })) })] }), _jsxs("div", { className: "flex items-center justify-center mt-5 gap-2", children: [_jsx("button", { disabled: currentPage === 1, onClick: () => handlePageForPrev(), className: ` rounded-md flex items-center justify-center h-9 w-9  cursor-pointer ${currentPage === 1
                            ? "bg-slate-300 text-gray-800"
                            : "text-white hover:bg-sky-900  bg-sky-800"} transition-all`, children: _jsx("svg", { className: "w-5 h-5", children: _jsx("use", { href: "#chevron-right" }) }) }), [...Array(totalPage)].map((_, index) => (_jsx("button", { onClick: () => handlePageForShow(index + 1), className: `${currentPage == index + 1
                            ? "bg-green-800 dark:bg-zinc-950"
                            : " bg-green-600 "} cursor-pointer transition-all dark:bg-[#212d45] w-10 text-white rounded-sm h-10`, children: index + 1 }, index + 1))), _jsx("button", { disabled: currentPage === totalPage, onClick: () => handlePageForNext(), className: ` rounded-md flex items-center justify-center h-9 w-9  cursor-pointer ${currentPage === totalPage
                            ? "bg-slate-300 text-gray-800"
                            : "text-white hover:bg-sky-900  bg-sky-800"} transition-all`, children: _jsx("svg", { className: "w-5 h-5", children: _jsx("use", { href: "#chevron-left" }) }) })] })] }));
}
