import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import DashBoard from "@/assets/Components/DashBoard/DashBoard";
import Chart from "./../../Components/Chart/Chart";
import ChartCount from "@/assets/Components/ChartCount/ChartCount";
import { Navigate } from "react-router-dom";
export default function Home({ user }) {
    if (!user) {
        return _jsx(Navigate, { to: "/sign-in", replace: true });
    }
    return (_jsxs("div", { children: [_jsx(DashBoard, {}), _jsx(Chart, {}), _jsx(ChartCount, {})] }));
}
