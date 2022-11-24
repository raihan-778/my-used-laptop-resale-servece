import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../../Layout/RootLayout/Root";
import HomePage from "../../pages/Home/HomePage/HomePage";
import Login from "../../pages/SignUp/Login/Login ";

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
    ],
  },
]);
