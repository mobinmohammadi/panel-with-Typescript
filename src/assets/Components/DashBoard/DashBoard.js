import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { dataDashboardMain } from "@/LocalData/LocalData";
import ItemsDashBoard from "./ItemsDashBoard/ItemsDashBoard";
import WrapperLastOperation from "./WrapperLastOperation/WrapperLastOperation";
import TitleForBoxesSections from "../TitleForBoxesSections/TitleForBoxesSections";
export default function DashBoard() {
    return (_jsxs("div", { className: "flex flex-col", children: [_jsxs("div", { className: "flex flex-col", children: [_jsx(TitleForBoxesSections, { title: "\u0622\u0645\u0627\u0631 \u06A9\u0644\u06CC \u0627\u0645\u0631\u0648\u0632 \u0633\u0627\u06CC\u062A" }), _jsx("div", { className: "grid grid-cols-1 2xs:grid-cols-2 sm:grid-cols-4 gap-3", children: dataDashboardMain.map((item) => (_jsx(ItemsDashBoard, { ...item }, item.id))) })] }), _jsx(WrapperLastOperation, {})] }));
}
