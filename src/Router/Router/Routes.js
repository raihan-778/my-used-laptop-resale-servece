import React from "react";
import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout";
import Root from "../../Layout/RootLayout/Root";
import Blog from "../../pages/Blog/Blog";
import Error from "../../pages/ErrorPage/Error";
import HomePage from "../../pages/Home/HomePage/HomePage";
import Login from "../../pages/SignUp/Login/Login ";
import SignUp from "../../pages/SignUp/SignUp/SignUp";

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
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);
