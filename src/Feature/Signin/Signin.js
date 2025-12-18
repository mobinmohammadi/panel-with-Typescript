import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';
const inputLabelStyles = {
    style: {
        color: "blck",
        right: 0,
        left: "auto",
        transformOrigin: "top right",
        fontSize: "16px"
    },
};
const inputPropsStyles = {
    style: {
        textAlign: "right",
    },
};
const sxStyles = {
    direction: "rtl",
};
export default function Signin() {
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "flex h-screen bg-gray-900 flex-col justify-center px-6 py-12 lg:px-8", children: [_jsxs("div", { className: "sm:mx-auto sm:w-full sm:max-w-sm", children: [_jsx("img", { alt: "Your Company", src: "https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500", className: "mx-auto h-10 w-auto" }), _jsx("h2", { className: "mt-10 text-center text-2xl/9 font-bold tracking-tight text-white", children: "\u0648\u0648\u0631\u062F \u0628\u0647 \u067E\u0646\u0644 \u0627\u062F\u0645\u06CC\u0646" })] }), _jsxs("div", { className: "mt-10 sm:mx-auto sm:w-full sm:max-w-sm", children: [_jsxs(Box, { component: "form", action: "#", className: "space-y-6", children: [_jsxs("div", { className: 'flex flex-col gap-5 ', children: [_jsx("div", { className: "block w-full bg-white rounded-md  px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6", children: _jsx(TextField, { autoComplete: "off", fullWidth: true, type: 'email', InputLabelProps: inputLabelStyles, InputProps: inputPropsStyles, sx: sxStyles, className: 'block  font-medium text-gray-100', label: "\u0627\u06CC\u0645\u06CC\u0644", variant: "standard" }) }), _jsx("div", { className: "block w-full bg-white rounded-md  px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6", children: _jsx(TextField, { autoComplete: "off", fullWidth: true, type: 'password', InputLabelProps: inputLabelStyles, InputProps: inputPropsStyles, sx: sxStyles, className: 'block  font-medium text-gray-100', label: "\u0631\u0645\u0632 \u0639\u0628\u0648\u0631", variant: "standard" }) })] }), _jsx("div", { children: _jsx("button", { type: "submit", className: "flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500", children: "\u0648\u0631\u0648\u062F" }) })] }), _jsxs("p", { className: "mt-10 flex gap-0.5 justify-center text-center text-sm/6 text-gray-400", children: ["\u0639\u0636\u0648 \u0646\u06CC\u0633\u062A\u06CC\u062F\u061F", _jsx("a", { href: "#", className: "font-semibold text-indigo-400 hover:text-indigo-300", children: "\u062B\u0628\u062A \u0646\u0627\u0645" })] })] })] }) }));
}
