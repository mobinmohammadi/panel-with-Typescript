import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import TopbarSidebar from "@/assets/Components/Sidebar/TopbarSidebar/TopbarSidebar";
function DashboardLayout({ isShowLayer, setIsShowLayer }) {
    const [isShowMenuPanel, setIsShowMenuPanel] = useState(false);
    const wrapperMenuPanel = useRef(null);
    useEffect(() => {
        if (isShowMenuPanel) {
            if (wrapperMenuPanel.current) {
                wrapperMenuPanel.current.classList.add("right-0", "opacity-100");
                wrapperMenuPanel.current.classList.remove("right-full", "opacity-0");
            }
        }
        else if (wrapperMenuPanel.current) {
            if (!isShowMenuPanel) {
                wrapperMenuPanel.current.classList.remove("right-0");
                wrapperMenuPanel.current.classList.add("-right-full", "opacity-0");
            }
        }
    }, [isShowMenuPanel]);
    return (_jsxs("div", { className: "flex min-h-[100vh]", children: [_jsx("div", { ref: wrapperMenuPanel, className: ` tranition-custom z-20  flex min-h-[100vh] fixed -right-full sm:right-0 opacity-100`, children: _jsx(Sidebar, { setIsShowMenuPanel: setIsShowMenuPanel }) }), _jsxs("main", { className: "flex flex-col  sm:mr-[250px] pb-10 mx-auto gap-5  pr-5 pl-5 w-full", children: [_jsx(TopbarSidebar, { setIsShowLayer: setIsShowLayer, setIsShowMenuPanel: setIsShowMenuPanel }), _jsx(Outlet, {})] }), isShowLayer ? (_jsx("div", { onClick: () => {
                    setIsShowLayer(false);
                    setIsShowMenuPanel(false);
                }, className: "bg-black/20 z-10 fixed w-full h-full top-0 right-0 " })) : null] }));
}
export default DashboardLayout;
