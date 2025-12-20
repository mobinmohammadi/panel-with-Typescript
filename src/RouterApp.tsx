import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./assets/Pages/Home/Home";
import Users from "./assets/Pages/Users/Users";
import DashboardLayout from "./assets/layouts/DashboardLayout/DashboardLayout";
import InventoryBox from "./assets/Pages/InventoryBox/InventoryBox"
import AdminDashboard from "./assets/Pages/InventoryBox/AdminDashboard";
import Offers from "./assets/Pages/Offers/Offers"
import Gozareshat from "./assets/Pages/Gozareshat/Gozareshat";
import Ticket from "./assets/Pages/Ticket/Ticket";
import { useEffect, useState } from "react";
import Signin from "./Feature/Signin/Components/Signin";
import { useSelector } from "react-redux";
import { ProtectedRoute } from "./assets/Pages/ProtectedRoute/ProtectedRoute";


const RouterApp = () => {

  const [isShowLayer , setIsShowLayer] = useState<boolean>(false)

  useEffect(() => {
    console.log(isShowLayer);
    
  },[isShowLayer])
  const user = useSelector((state : any) => state.user)
  useEffect(() => {
    console.log(user)
  }, [user])
  

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={
            <ProtectedRoute user={user} redirectPath="/sign-in">
               <DashboardLayout isShowLayer={isShowLayer} setIsShowLayer={setIsShowLayer} />
            </ProtectedRoute>
         }>
          <Route  index element={<Home user={user} />}></Route>
          <Route path="/offers" element={<Offers />}></Route>
          <Route path="/users" element={<Users />}></Route>
          <Route path="/gozareshat" element={<Gozareshat />}/>
          {/* <Route path="/tikets" element={<Ticket />}/> */}
          <Route path="/inventoryBox" element={<AdminDashboard/>}></Route>
        </Route>
          <Route index path="/sign-in" element={<Signin/>}/>


      </Routes>
    </BrowserRouter>
  );
};

export { RouterApp };
