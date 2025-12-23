import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./assets/Pages/Home/Home";
import Users from "./assets/Pages/Users/Users";
import DashboardLayout from "./assets/layouts/DashboardLayout/DashboardLayout";

import Offers from "./assets/Pages/Offers/Offers";
import Gozareshat from "./assets/Pages/Gozareshat/Gozareshat";
import Ticket from "./assets/Pages/Ticket/Ticket";
import { useEffect, useState } from "react";
import Signin from "./Feature/Signin/Components/Signin";
import { useSelector } from "react-redux";
import { ProtectedRoute } from "./assets/Pages/ProtectedRoute/ProtectedRoute";
import { GetMeQuery } from "./Hooks/GetMeQuery";
import { log } from "console";
import useAuthenticate from "./Hooks/useAuthenticate";
import { CategorisPage } from "./assets/Pages/Categoris/CategorisPage";
import PageNotFound from "./assets/Pages/PageNotFound/PageNotFound";
import ProductPage from "./assets/Pages/Products/ProductPage";

const AuthWrapper = () => {
  useAuthenticate();
  return null;
};

const RouterApp = () => {
  const [isShowLayer, setIsShowLayer] = useState<boolean>(false);

  useEffect(() => {}, [isShowLayer]);
  const user = useSelector((state: any) => state.user);
  useEffect(() => {}, [user]);

  //  <ProtectedRoute user={user} redirectPath="/sign-in">
  //             <AuthWrapper/>
  //              <DashboardLayout isShowLayer={isShowLayer} setIsShowLayer={setIsShowLayer} />
  //           </ProtectedRoute>
  //        }>

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <DashboardLayout
              isShowLayer={isShowLayer}
              setIsShowLayer={setIsShowLayer}
            />
          }
        >
          <Route index element={<Home user={user} />}></Route>
          <Route path="/offers" element={<Offers />}></Route>
          <Route path="/users" element={<Users />}></Route>
          <Route path="/gozareshat" element={<Gozareshat />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/categoris" element={<CategorisPage />} />
        </Route>
        <Route index path="/sign-in" element={<Signin />} />
        <Route index path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export { RouterApp };
