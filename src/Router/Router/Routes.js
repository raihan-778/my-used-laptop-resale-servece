import React from "react";
import { createBrowserRouter } from "react-router-dom";
import AllSeller from "../../Dashboard/AllSeller/AllSeller";
import DisplayError from "../../Dashboard/DisplayError/DisplayError";

import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout";
import Root from "../../Layout/RootLayout/Root";
import Blog from "../../pages/Blog/Blog";
import Category from "../../pages/Category/Category";

import Error from "../../pages/ErrorPage/Error";
import HomePage from "../../pages/Home/HomePage/HomePage";
import Login from "../../pages/SignUp/Login/Login ";
import SignUp from "../../pages/SignUp/SignUp/SignUp";

import AllBuyer from "../../Dashboard/AllBuyer/AllBuyer";
import ReportedItem from "../../Dashboard/ReportedItem/ReportedItem";

import CategoryProducts from "../../pages/Category/CategoryProducts/CategoryProducts";
import PrivateRoute from "../../PrivateRoute/PrivateRoute/PrivateRoute";
import AddProduct from "../../Dashboard/AddProducts/AddProduct";
import AdminRoute from "../../PrivateRoute/AdminRoute/AdminRoute";
import BuyersProduct from "../../Dashboard/MyProducts/BuyersProduct/BuyersProduct";
import SellersProduct from "../../Dashboard/MyProducts/SellersProduct/SellersProduct";
import SellerRoute from "../../PrivateRoute/SellerRoute/SellerRoute";
import AllProducts from "../../pages/AllProducts/AllProducts";
import MyProducts from "../../Dashboard/MyProducts/MyProducts";
import AdvertisedProducts from "../../pages/Home/AdvertisedProducts/AdvertisedProducts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/allproducts",
        element: <AllProducts></AllProducts>,
      },
      {
        path: "/categories",
        element: <Category></Category>,
      },
      {
        path: "/allproducts/advertise",
        element: <AdvertisedProducts></AdvertisedProducts>,
      },
      {
        path: "/categories/:categoryName",
        element: (
          <PrivateRoute>
            <CategoryProducts></CategoryProducts>,
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          return fetch(
            `https://b612-used-products-resale-server-side-raihan-778.vercel.app/categories/${params.categoryName}`
          );
        },
      },
    ],
  },
  {
    path: "/dashboard",
    errorElement: <DisplayError></DisplayError>,
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <BuyersProduct></BuyersProduct>,
      },
      {
        path: "/dashboard/allbuyer",
        element: <AllBuyer></AllBuyer>,
      },
      {
        path: "/dashboard/allseller",
        element: <AllSeller></AllSeller>,
      },
      {
        path: "/dashboard/addproducts",
        element: (
          <SellerRoute>
            <AddProduct></AddProduct>
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/buyersproducts",
        element: <BuyersProduct></BuyersProduct>,
      },
      {
        path: "/dashboard/myproducts",
        element: <MyProducts></MyProducts>,
      },
      {
        path: "/dashboard/sellersproducts",
        element: (
          <SellerRoute>
            <SellersProduct></SellersProduct>
          </SellerRoute>
        ),
        loader: async ({ params }) => {
          return fetch(``);
        },
      },
      {
        path: "/dashboard/reporteditem",
        element: (
          <AdminRoute>
            <ReportedItem></ReportedItem>
          </AdminRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);
