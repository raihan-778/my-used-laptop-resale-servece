import React from "react";
import { createBrowserRouter } from "react-router-dom";
import AllSeller from "../../Dashboard/AllSeller/AllSeller";
import DisplayError from "../../Dashboard/DisplayError/DisplayError";
import Myproducts from "../../Dashboard/MyProducts/Myproducts";
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
import AddProducts from "../../Dashboard/AddProducts/AddProcucts";
import AddProduct from "../../Dashboard/AddProducts/AddProduct";

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
        path: "/categories",
        element: <Category></Category>,
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
            `http://localhost:5000/categories/${params.categoryName}`
          );
        },
      },
    ],
  },
  {
    path: "/dashboard",
    errorElement: <DisplayError></DisplayError>,
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "/dashboard",
        element: <Myproducts></Myproducts>,
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
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/dashboard/reporteditem",
        element: <ReportedItem></ReportedItem>,
      },
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);
