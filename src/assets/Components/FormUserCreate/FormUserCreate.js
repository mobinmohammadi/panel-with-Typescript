import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import * as Yup from "yup";
export default function FormUserCreate() {
    const addNewUserHandler = (e) => {
        e.preventDefault();
        toast.success("عملیات با موفقیت انجام شد!");
        setTimeout(() => {
            location.reload();
        }, 2000);
    };
    const validationSchema = Yup.object({
        name: Yup.string().required("نام و نام خانوادگی الزامی است !"),
        password: Yup.string()
            .min(6, "رمز باید حداقل ۶ کاراکتر باشد !")
            .required("رمز عبور الزامی است"),
        phone: Yup.string()
            .matches(/^09\d{9}$/, "شماره تماس معتبر نیست (مثل 09121234567) !")
            .required("شماره تماس الزامی است !"),
        email: Yup.string()
            .email("ایمیل معتبر نیست !")
            .required("ایمیل الزامی است !"),
    });
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            phone: "",
        },
        validationSchema,
        onSubmit: (values) => {
            console.log(values);
        },
    });
    return (_jsx("div", { className: "bg-[#212d45] w-full rounded-sm font-Dana-Demi-bold p-5", children: _jsx("form", { action: "#", onSubmit: formik.handleSubmit, onBlur: formik.handleBlur, children: _jsxs("div", { className: "flex gap-5 flex-col", children: [_jsxs("div", { className: "grid grid-cols-1 xs:grid-cols-2 gap-3", children: [_jsxs("div", { className: "text-dark-menu flex flex-col gap-2", children: [_jsx("label", { className: "text-sm", htmlFor: "name", children: "\u0646\u0627\u0645 \u0648 \u0646\u0627\u0645 \u062E\u0627\u0646\u0648\u0627\u062F\u06AF\u06CC" }), _jsx("input", { name: "name", value: formik.values.name, onChange: formik.handleChange, className: "text-xs outline-0 bg-slate-400 text-zinc-900 pt-2 pb-2 pr-2 rounded-sm", type: "text", placeholder: "\u0646\u0627\u0645 \u0648 \u0646\u0627\u0645 \u062E\u0627\u0646\u0648\u0627\u062F\u06AF\u06CC ..." }), _jsx("div", { className: "text-red-600 text-xs pr-2", children: formik.errors.name && formik.touched.name && (_jsx("p", { className: "", children: formik.errors.name })) })] }), _jsxs("div", { className: "text-dark-menu flex flex-col gap-2", children: [_jsx("label", { className: "text-sm", htmlFor: "name", children: "\u067E\u0633\u0648\u0648\u0631\u062F" }), _jsx("input", { name: "password", value: formik.values.password, onChange: formik.handleChange, className: "text-xs outline-0 bg-slate-400 text-zinc-900 pt-2 pb-2 pr-2 rounded-sm", type: "text", placeholder: "\u067E\u0633\u0648\u0648\u0631\u062F..." }), _jsx("div", { className: "text-red-600 text-xs pr-2", children: formik.errors.password && formik.touched.password && (_jsx("p", { className: "", children: formik.errors.password })) })] }), _jsxs("div", { className: "text-dark-menu flex flex-col gap-2", children: [_jsx("label", { className: "text-sm", htmlFor: "name", children: "\u0634\u0645\u0627\u0631\u0647 \u062A\u0645\u0627\u0634" }), _jsx("input", { name: "phone", value: formik.values.phone, onChange: formik.handleChange, className: "text-xs outline-0 bg-slate-400 text-zinc-900 pt-2 pb-2 pr-2 rounded-sm", type: "text", placeholder: "\u0634\u0645\u0627\u0631\u0647 \u062A\u0645\u0627\u0633..." }), _jsx("div", { className: "text-red-600 text-xs pr-2", children: formik.errors.phone && formik.touched.phone && (_jsx("p", { className: "", children: formik.errors.phone })) })] }), _jsxs("div", { className: "text-dark-menu flex flex-col gap-2", children: [_jsx("label", { className: "text-sm", htmlFor: "name", children: "\u0627\u06CC\u0645\u06CC\u0644" }), _jsx("input", { name: "email", value: formik.values.email, onChange: formik.handleChange, className: "text-xs outline-0 bg-slate-400 text-zinc-900 pt-2 pb-2 pr-2 rounded-sm", type: "text", placeholder: "\u0627\u06CC\u0645\u06CC\u0644 ..." }), _jsx("div", { className: "text-red-600 text-xs pr-2", children: formik.errors.email && formik.touched.email && (_jsx("p", { className: "", children: formik.errors.email })) })] })] }), _jsx("div", { className: "w-full flex justify-end text-white  text-sm ", children: formik.errors.email || formik.errors.name || formik.errors.password || formik.errors.phone ? (_jsx("div", { className: "bg-slate-400 w-22 pt-2 pb-2 rounded-md text-center", children: _jsx("span", { className: "", children: "\u062B\u0628\u062A \u06A9\u0627\u0631\u0628\u0631" }) })) : (_jsx("button", { type: "submit", onClick: (e) => addNewUserHandler(e), className: "bg-zinc-800 rounded-md hover:bg-zinc-900 transition-all cursor-pointer w-22 pt-2 pb-2", children: "\u062B\u0628\u062A \u06A9\u0627\u0631\u0628\u0631" })) })] }) }) }));
}
