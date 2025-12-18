import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { PureComponent } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, AreaChart, Area, ResponsiveContainer, } from "recharts";
import TitleForBoxesSections from "../TitleForBoxesSections/TitleForBoxesSections";
// داده با نام ماه‌های فارسی
const data = [
    { name: "فروردین", کاربران: 4000, بازدید: 2400, فروش: 2400 },
    { name: "اردیبهشت", کاربران: 3000, بازدید: 1398, فروش: 2210 },
    { name: "خرداد", کاربران: 2000, بازدید: 9800, فروش: 2290 },
    { name: "تیر", کاربران: 2780, بازدید: 3908, فروش: 2000 },
    { name: "مرداد", کاربران: 1890, بازدید: 4800, فروش: 2181 },
    { name: "شهریور", کاربران: 2390, بازدید: 3800, فروش: 2500 },
    { name: "مهر", کاربران: 3490, بازدید: 4300, فروش: 2100 },
];
export default class Example extends PureComponent {
    render() {
        return (_jsxs("div", { className: "text-xs sm:text-xs flex flex-col sm:gap-3 gap-1", style: {
                width: "100%",
                direction: "rtl",
                fontFamily: "DanaDemiBold",
                //   left:
            }, children: [_jsx(TitleForBoxesSections, { title: "\u0646\u0645\u0648\u062F\u0627\u0631 \u062A\u0639\u062F\u0627\u062F \u0631\u0634\u062F \u06A9\u0627\u0628\u0631\u0627\u0646 \u0633\u0627\u06CC\u062A" }), _jsx("div", { className: "bg-white dark:bg-[#212d45] rounded-sm pt-4 pb-4", children: _jsx(ResponsiveContainer, { width: "100%", height: 200, children: _jsxs(LineChart, { data: data, syncId: "anyId", margin: { top: 10, right: 15, left: -20, bottom: 0 }, children: [_jsx(XAxis, { dataKey: "name" }), _jsx(YAxis, {}), _jsx(Tooltip, {}), _jsx(Legend, {}), _jsx(Line, { type: "monotone", dataKey: "\u06A9\u0627\u0631\u0628\u0631\u0627\u0646", stroke: "#8884d8", fill: "#8884d8" })] }) }) }), _jsx(TitleForBoxesSections, { title: "\u0646\u0645\u0648\u062F\u0627\u0631 \u062A\u0639\u062F\u0627\u062F \u0628\u0627\u0632\u062F\u06CC\u062F \u0627\u0632 \u0633\u0627\u06CC\u062A" }), _jsx("div", { className: "bg-white  dark:bg-[#212d45] rounded-sm pt-4 pb-4", children: _jsx(ResponsiveContainer, { width: "100%", height: 200, children: _jsxs(AreaChart, { data: data, syncId: "anyId", margin: { top: 10, right: 15, left: -20, bottom: 0 }, children: [_jsx(XAxis, { dataKey: "name" }), _jsx(YAxis, {}), _jsx(Tooltip, {}), _jsx(Legend, {}), _jsx(Area, { type: "monotone", dataKey: "\u0628\u0627\u0632\u062F\u06CC\u062F", stroke: "#82ca9d", fill: "#82ca9d" })] }) }) })] }));
    }
}
