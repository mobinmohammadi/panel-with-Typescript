import React, { useEffect, useState } from "react";
import { dataDashboardMain } from "@/LocalData/LocalData";
import ItemsDashBoard from "./ItemsDashBoard/ItemsDashBoard";
import WrapperLastOperation from "./WrapperLastOperation/WrapperLastOperation";
import TitleForBoxesSections from "../TitleForBoxesSections/TitleForBoxesSections";
import { axiosClient } from "@/Services/AxiosClient";
import { DashboardApi } from "@/Services/dashboard/ApiDashboard";

export default function DashBoard() {
  const [dataDashboard, setDataDashboard] = useState<IDashboardRespone | any>(
    []
  );
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await DashboardApi.getInfo();
        setDataDashboard(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        <TitleForBoxesSections title="آمار کلی امروز سایت" />
        <div className="grid grid-cols-1 2xs:grid-cols-2 sm:grid-cols-4 gap-3">
          <ItemsDashBoard
            title="تعداد کابران وبسایت"
            count={dataDashboard.usersCount}
          />
          <ItemsDashBoard
            title="تعداد محصولات"
            count={dataDashboard.productsCount}
          />
          <ItemsDashBoard title="بازدید امروز" count={25} />
          <ItemsDashBoard title="کابران امروز" count={3} />
        </div>
      </div>
      <WrapperLastOperation />
    </div>
  );
}
