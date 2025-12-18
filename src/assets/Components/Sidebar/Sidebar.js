import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from "react";
// @ts-ignore
import { liMenu } from "../../../LocalData/LocalData";
import LiSidebar from "../LiSidebar/LiSidebar";
function Sidebar({ setIsShowMenuPanel }) {
    // const { state, dispatch } = useContext(ThemeContext);
    const [theme, setTheme] = useState("dark");
    const [titlePageSildebar, setTitlePageSildebar] = useState("پیشخوان");
    const changeTitlePageSidebar = (value) => {
        setTitlePageSildebar(value);
    };
    useEffect(() => {
        if (theme == "dark") {
            document.documentElement.classList.add("dark");
        }
        else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);
    const toggleTheme = () => {
        setTheme((prev) => (prev == "dark" ? "light" : "dark"));
    };
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "dark:bg-[#151b27] z-20 flex border-l-2 border-solid  dark:border-sky-200 rounded-l-xl flex-col gap-5 3xs:gap-10  bg-slate-200 w-[250px] xl:w-[300px] pr-4 pl-4 pt-4", children: [_jsxs("div", { className: "flex gap-1 relative items-center justify-between border-b-1 dark:pb-5 dark:rounded-2xl border-b-slate-400 pb-4 border-solid", children: [_jsx("div", { className: "flex w-full  items-center gap-1 justify-center ", children: _jsxs("div", { className: "flex items-center gap-1", children: [_jsx("svg", { className: "w-5 h-5 3xs:w-7 3xs:h-7 dark:text-icon-dark", children: _jsx("use", { href: "#building-storefront" }) }), _jsx("span", { className: "dark:text-dark-menu mt-1 font-Dana-Demi-bold text-xs 3xs:text-sm text-black  ", children: "\u067E\u0646\u0644 \u0641\u0631\u0648\u0634\u06AF\u0627\u0647" })] }) }), _jsx("button", { className: "dark:bg-zinc-700 cursor-pointer p-1 bg-slate-400  rounded-full dark:text-white ", onClick: () => toggleTheme(), children: _jsx("svg", { className: "w-5  3xs:w-6 h-5  3xs:h-6 text-zinc-800 dark:text-white", children: _jsx("use", { href: theme == "dark" ? "#sun" : "#moon" }) }) }), _jsx("div", { onClick: () => setIsShowMenuPanel(false), className: "absolute cursor-pointer rounded-l-sm overflow-hidden border-r-1 border-white -left-10.5", children: _jsx("svg", { className: "w-6 h-6 bg-amber-600 sm:hidden text-white", children: _jsx("use", { href: "#x-mark" }) }) })] }), _jsx("ul", { className: "flex flex-col gap-2 ", children: liMenu.map((li) => (_jsx(LiSidebar, { title: li.title, link: li.link, changeTitlePageSidebar: changeTitlePageSidebar, titlePageSildebar: titlePageSildebar }, li.id))) })] }) }));
}
export default Sidebar;
