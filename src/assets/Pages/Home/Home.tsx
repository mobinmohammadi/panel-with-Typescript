import DashBoard from "@/assets/Components/DashBoard/DashBoard";
import Chart from "./../../Components/Chart/Chart";
import ChartCount from "@/assets/Components/ChartCount/ChartCount";
import { Navigate } from "react-router-dom";

interface IHomeProps {
  user? : IAuthUser
}

export default function Home({ user }: IHomeProps) {
  if (!user) {
    
    return <Navigate to="/sign-in" replace />;
  }

  return (
    <div>
      <DashBoard />
      <Chart />
      <ChartCount />
    </div>
  );
}
