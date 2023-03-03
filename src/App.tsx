import React, { useEffect } from "react";
import "./styles/global.scss";
import Header from "./shared/Header/Header";
import { Route, Routes } from "react-router-dom";
import {
  ACCOUNT_URL, ADMIN_BLOG_URL,
  ADMIN_PRODUCT_URL,
  ADMIN_URL,
  DISCOUNT_URL,
  HOME_URL,
  ORDERS_URL
} from "./models/urls";
import HomePage from "./pages/HomePage/HomePage";
import { useAppDispatch } from "./hooks/redux";
import { fetchUserAuth } from "./store/reducers/User/ActionCreator";
import AccountPage from "./pages/AccountPage/AccountPage";
import DiscountPage from "./pages/DiscountPage/DiscountPage";
import OrderPage from "./pages/OrderPage/OrderPage";
import AdminPage from "./pages/AdminPage/AdminPage";
import AdminProduct from "./pages/AdminPage/Components/AdminProduct/AdminProduct";
import AdminBlog from "./pages/AdminPage/Components/AdminBlog/AdminBlog";
import axios from "axios";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUserAuth());
  }, []);



  return (
    <div className='App'>
      <Header />
      <main className='App__main'>
        <Routes>
          <Route path={HOME_URL} element={<HomePage />} />
          <Route path={ACCOUNT_URL} element={<AccountPage />} />
          <Route path={DISCOUNT_URL} element={<DiscountPage />} />
          <Route path={ORDERS_URL} element={<OrderPage />} />
          <Route path={ADMIN_URL} element={<AdminPage />} />
          <Route path={ADMIN_PRODUCT_URL} element={<AdminProduct />} />
          <Route path={ADMIN_BLOG_URL} element={<AdminBlog/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
