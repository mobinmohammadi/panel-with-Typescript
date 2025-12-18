import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
const showAlert = ({ name, email, role, text, reply }) => {
    MySwal.fire({
        title: _jsx("p", { children: "\u0627\u0637\u0644\u0627\u0639\u0627\u062A \u06A9\u0627\u0628\u0631" }),
        html: (_jsxs("div", { className: "font-Dana-Demi-bold ", children: [_jsxs("p", { className: "text-red-700", children: ["\u0646\u0627\u0645 : ", name] }), _jsxs("p", { children: ["\u0627\u06CC\u0645\u06CC\u0644 : ", email] }), text?.length ? (_jsx("p", { children: text })) : (_jsxs("p", { children: ["\u0646\u0642\u0634 : ", role == 1 ? "ادمین " : "کاربر"] })), reply ? ` پاسخ ${reply.name} : ${reply.text})` : ""] })),
        showClass: {
            popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `,
        },
        hideClass: {
            popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `,
        },
    });
};
export { showAlert };
