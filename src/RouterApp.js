import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./assets/Pages/Home/Home";
import Users from "./assets/Pages/Users/Users";
import DashboardLayout from "./assets/layouts/DashboardLayout/DashboardLayout";
import AdminDashboard from "./assets/Pages/InventoryBox/AdminDashboard";
import Offers from "./assets/Pages/Offers/Offers";
import Gozareshat from "./assets/Pages/Gozareshat/Gozareshat";
import { useEffect, useState } from "react";
import Signin from "./Feature/Signin/Signin";
const RouterApp = () => {
    const [isShowLayer, setIsShowLayer] = useState(false);
    useEffect(() => {
        console.log(isShowLayer);
    }, [isShowLayer]);
    return (_jsx(BrowserRouter, { children: _jsxs(Routes, { children: [_jsxs(Route, { path: "/", element: _jsx(DashboardLayout, { isShowLayer: isShowLayer, setIsShowLayer: setIsShowLayer }), children: [_jsx(Route, { index: true, element: _jsx(Home, {}) }), _jsx(Route, { path: "/offers", element: _jsx(Offers, {}) }), _jsx(Route, { path: "/users", element: _jsx(Users, {}) }), _jsx(Route, { path: "/gozareshat", element: _jsx(Gozareshat, {}) }), _jsx(Route, { path: "/inventoryBox", element: _jsx(AdminDashboard, {}) })] }), _jsx(Route, { path: "/sign-in", element: _jsx(Signin, {}) })] }) }));
};
export { RouterApp };
