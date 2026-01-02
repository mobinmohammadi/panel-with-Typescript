import React, { useEffect, useRef, useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { Outlet, useNavigate } from "react-router-dom";
import TopbarSidebar from "@/assets/Components/Sidebar/TopbarSidebar/TopbarSidebar";

type Props = {
  isShowLayer: boolean;
  setIsShowLayer: (value: boolean) => void;
};

function DashboardLayout({ isShowLayer, setIsShowLayer }: Props) {
  const [isShowMenuPanel, setIsShowMenuPanel] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsShowMenuPanel(false);
    setIsShowLayer(false)
  }, [navigate]);
  const wrapperMenuPanel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isShowMenuPanel) {
      if (wrapperMenuPanel.current) {
        wrapperMenuPanel.current.classList.add("right-0", "opacity-100");
        wrapperMenuPanel.current.classList.remove("right-full", "opacity-0");
      }
    } else if (wrapperMenuPanel.current) {
      if (!isShowMenuPanel) {
        wrapperMenuPanel.current.classList.remove("right-0");
        wrapperMenuPanel.current.classList.add("-right-full", "opacity-0");
      }
    }
  }, [isShowMenuPanel]);

  return (
    <div className="flex min-h-[100vh]">
      <div
        ref={wrapperMenuPanel}
        className={` tranition-custom z-20  flex min-h-[100vh] fixed -right-full sm:right-0 opacity-100`}
      >
        <Sidebar setIsShowMenuPanel={setIsShowMenuPanel} />
      </div>
      <main className="flex flex-col  sm:mr-[250px] pb-10 mx-auto gap-5  pr-5 pl-5 w-full">
        <TopbarSidebar
          setIsShowLayer={setIsShowLayer}
          setIsShowMenuPanel={setIsShowMenuPanel}
        />
        <Outlet />
      </main>

      {isShowLayer ? (
        <div
          onClick={() => {
            setIsShowLayer(false);
            setIsShowMenuPanel(false);
          }}
          className="bg-black/20 z-10 fixed w-full h-full top-0 right-0 "
        ></div>
      ) : null}
    </div>
  );
}

export default DashboardLayout;
