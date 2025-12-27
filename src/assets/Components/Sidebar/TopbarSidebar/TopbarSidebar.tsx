import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  setIsShowMenuPanel: (value: boolean) => void;
  setIsShowLayer: (value: boolean) => void;
};

export default function TopbarSidebar({
  setIsShowMenuPanel,
  setIsShowLayer,
}: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // بستن منو وقتی کاربر خارج کلیک می‌کند
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  const navigate = useNavigate()

  return (
    <div className="pt-5 pr-3 w-full">
      <div
        onClick={() => {
          setIsShowMenuPanel(true);
          setIsShowLayer(true);
        }}
        className="bg-yellow-500 flex justify-center sm:hidden items-center rounded-md cursor-pointer w-7 h-7"
      >
        <svg className="w-5 h-5">
          <use href="#bars-3"></use>
        </svg>
      </div>

      <div className="text-zinc-800 border-solid border-b border-slate-300 pb-4 dark:text-white flex justify-between items-center w-full font-Dana-Demi-bold">
        <div className="flex flex-col gap-1">
          <span className="text-xs sm:text-sm">داشبورد فروشگاه</span>
          <div className="text-xs flex gap-1 tracking-wide">
            <span className="text-x sm:text-sm">مبین محمدی عزیز</span>
            <span className="dark:text-primary-dark text-x sm:text-sm">
              خوش آمدید{" "}
            </span>
            <span className="text-red-700 text-xs">🌷</span>
          </div>
        </div>

        <div className="flex items-center  gap-2 relative z-30" ref={menuRef}>
          <div
            className="border-2 relative border-yellow-400 z-20 border-solid rounded-full cursor-pointer"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <img
              className="w-10 h-10 sm:w-14 sm:h-14 object-cover rounded-full"
              src="./../Admin/Admin.jpg"
              alt="Admin"
            />
            <span className="absolute bg-sky-500 top-0 right-1 h-2 w-2 rounded-full border border-white"></span>
          </div>

          <div
            className="flex flex-col gap-1 cursor-pointer z-20"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <span className="text-x sm:text-xs">مبین محمدی</span>
            <div className="flex gap-1 items-center">
              <span className="text-x">توسعه دهنده فرانت</span>
              <svg className="w-4 h-4 sm:w-5 sm:h-5">
                <use href="#chevron-down"></use>
              </svg>
            </div>
          </div>

          {isMenuOpen && (
            <div className="absolute z-20 *:w-full top-full left-0 *:px-4 *:py-2 mt-2 w-58 *:text-gray-900 *:text-xs *:cursor-pointer  bg-white shadow-lg rounded-md overflow-hidden">
              <button className=" text-right hover:bg-gray-200 ">
                اعلانات
              </button>
              <button onClick={() => navigate("/myprofail")} className=" text-right hover:bg-gray-200">
                مشاهده پروفایل
              </button>
              <button className=" text-right transition-all hover:text-white hover:bg-red-600 text-red-500">
                خروج
              </button>
            </div>
          )}
          {isMenuOpen && (

          <div onClick={() => setIsMenuOpen(false)} className="z-10 fixed w-full h-full top-0 right-0 backdrop-blur-sm"></div>
          )}
        </div>
      </div>
    </div>
  );
}
