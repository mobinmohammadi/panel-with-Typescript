import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import DashBoard from '@/assets/Components/DashBoard/DashBoard';
import Chart from "./../../Components/Chart/Chart";
import ChartCount from '@/assets/Components/ChartCount/ChartCount';
export default function Home() {
    return (_jsxs("div", { children: [_jsx(DashBoard, {}), _jsx(Chart, {}), _jsx(ChartCount, {})] }));
}
