import React, { FC } from 'react';
import AccountPage from './pages/AccountPage/AccountPage';
import DiscountPage from './pages/DiscountPage/DiscountPage';
import OrderPage from './pages/OrderPage/OrderPage';
import AdminPage from './pages/AdminPage/AdminPage';
import AdminProduct from './pages/AdminPage/Components/AdminProduct/AdminProduct';
import AdminBlog from './pages/AdminPage/Components/AdminBlog/AdminBlog';
import { Route, Routes } from 'react-router-dom';
import {
    ACCOUNT_URL,
    ADMIN_BLOG_URL,
    ADMIN_PRODUCT_URL,
    ADMIN_URL,
    DISCOUNT_URL,
    FAVORITES_URL,
    HOME_URL,
    ORDERS_URL,
    PRODUCT_PAGE_URL
} from './models/urls';
import HomePage from './pages/HomePage/HomePage';
import ProductPage from './pages/ProductPage/ProductPage';
import FavortiesPage from './pages/FavoritesPage/FavortiesPage';

const RoutesComponent: FC = () => {
    return (
        <Routes>
            <Route path={HOME_URL} element={<HomePage />} />
            <Route path={ACCOUNT_URL} element={<AccountPage />} />
            <Route path={DISCOUNT_URL} element={<DiscountPage />} />
            <Route path={ORDERS_URL} element={<OrderPage />} />
            <Route path={ADMIN_URL} element={<AdminPage />} />
            <Route path={ADMIN_PRODUCT_URL} element={<AdminProduct />} />
            <Route path={ADMIN_BLOG_URL} element={<AdminBlog />} />
            <Route path={`${PRODUCT_PAGE_URL}/:id`} element={<ProductPage />} />
            <Route path={FAVORITES_URL} element={<FavortiesPage />} />
        </Routes>
    );
};

export default RoutesComponent;
