import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/pages/AdminDashboard.tsx
import InventoryBox from "./InventoryBox";
export default function AdminDashboard() {
    return (_jsxs("div", { className: "p-6 bg-gray-100 dark:bg-gray-900 min-h-screen", children: [_jsx("h1", { className: "text-2xl font-bold text-gray-800 dark:text-white mb-6", children: "\u062F\u0627\u0634\u0628\u0648\u0631\u062F \u0627\u062F\u0645\u06CC\u0646" }), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6", children: _jsx(InventoryBox, { total: 152, lowStock: 4 }) })] }));
}
