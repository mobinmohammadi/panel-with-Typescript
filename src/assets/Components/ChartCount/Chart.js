import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Pie, PieChart, Cell } from 'recharts';
const data = [
    { name: 'Group B', value: 150, fill: '#7FDF3C' },
    { name: 'Group C', value: 40, fill: '#FF6565' },
    { name: 'Group A', value: 110, fill: '#659DF5' },
];
export default function Chart({ isAnimationActive = true }) {
    const total = data.reduce((sum, item) => sum + item.value, 0);
    return (_jsxs(PieChart, { style: { width: '100%', maxWidth: '176px', maxHeight: '176px', aspectRatio: 1 }, responsive: true, children: [_jsx(Pie, { data: data, innerRadius: "80%", outerRadius: "100%", cornerRadius: "50%", paddingAngle: 5, dataKey: "value", isAnimationActive: isAnimationActive, children: data.map((entry) => (_jsx(Cell, { fill: entry.fill }, entry.name))) }), _jsxs("text", { x: "50%", y: "50%", textAnchor: "middle", dominantBaseline: "central", fontSize: 12, fill: "#000", children: [_jsx("tspan", { x: "50%", dy: "-0.6em", fontSize: 10, children: "\u062A\u0639\u062F\u0627\u062F \u0628\u06CC\u0645\u0627\u0631\u0627\u0646" }), _jsx("tspan", { x: "50%", dy: "1.2em", fontSize: 14, fontWeight: "bold", children: total })] })] }));
}
