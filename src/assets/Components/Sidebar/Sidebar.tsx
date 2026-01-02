import React, { useContext, useEffect, useState } from "react";
import ThemeContext from "../../Context/Context";
// @ts-ignore
import { liMenu } from "../../../LocalData/LocalData";
import LiSidebar from "../LiSidebar/LiSidebar";
import TopbarSidebar from "./TopbarSidebar/TopbarSidebar";
import { useNavigate } from "react-router-dom";

type Props = {
  setIsShowMenuPanel : (value : boolean) => void;
};
function Sidebar({setIsShowMenuPanel} : Props) {
  // const { state, dispatch } = useContext(ThemeContext);

 

  const [theme, setTheme] = useState<"light" | "dark">("dark");

  const [titlePageSildebar, setTitlePageSildebar] = useState<string>("پیشخوان");

  const changeTitlePageSidebar = (value: string) => {
    setTitlePageSildebar(value);
  };
  useEffect(() => {
    if (theme == "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev == "dark" ? "light" : "dark"));
  };

  return (
    <>
      <div className="dark:bg-[#151b27] z-40 flex border-l-2 border-solid  dark:border-sky-200 rounded-l-xl flex-col gap-5 3xs:gap-10  bg-slate-200 w-[250px] xl:w-[300px] pr-4 pl-4 pt-4">
        <div className="flex gap-1 relative items-center justify-between border-b-1 dark:pb-5 dark:rounded-2xl border-b-slate-400 pb-4 border-solid">
          <div className="flex w-full  items-center gap-1 justify-center ">
            <div className="flex items-center gap-1">
              <svg className="w-5 h-5 3xs:w-7 3xs:h-7 dark:text-icon-dark">
                <use href="#building-storefront"></use>
              </svg>
              <span className="dark:text-dark-menu mt-1 font-Dana-Demi-bold text-xs 3xs:text-sm text-black  ">
                پنل فروشگاه
              </span>
            </div>
          </div>

          <button
            className="dark:bg-zinc-700 cursor-pointer p-1 bg-slate-400  rounded-full dark:text-white "
            onClick={() => toggleTheme()}
          >
            <svg className="w-5  3xs:w-6 h-5  3xs:h-6 text-zinc-800 dark:text-white">
              <use href={theme == "dark" ? "#sun" : "#moon"}></use>
            </svg>
          </button>
          <div
            onClick={() => setIsShowMenuPanel(false)}
            className="absolute cursor-pointer rounded-l-sm overflow-hidden border-r-1 border-white -left-10.5"
          >
            <svg className="w-6 h-6 bg-amber-600 sm:hidden text-white">
              <use href="#x-mark"></use>
            </svg>
          </div>
        </div>
        <ul className="flex flex-col gap-2 ">
          {liMenu.map((li) => (
            <LiSidebar
            key={li.id}
              title={li.title}
              link={li.link}
              changeTitlePageSidebar={changeTitlePageSidebar}
              titlePageSildebar={titlePageSildebar}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
