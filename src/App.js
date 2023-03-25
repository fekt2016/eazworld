import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/Layout/Root";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Support from "./components/pages/Support";
import SignIn, { action as signinAction } from "./components/pages/SignIn";
import GetStarted, { action as getAction } from "./components/pages/GetStarted";
import Dashboard from "./components/Dashboard/Dashboard";
import Buy, { action as buyAction } from "./components/pages/Buy";
import Sell from "./components/pages/Sell";
import ManageOrder from "./components/pages/ManageOrder";
import ManagePayment from "./components/pages/ManagePayment";
import AccountProfile from "./components/pages/AccountProfile";
import RootDashboard from "./components/pages/RootDashboard";
import ErrorPage from "./components/pages/Error";
import Homepage from "./components/pages/Homepage";
import { action as logoutAction } from "./components/pages/logout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      { path: "aboutus", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "support", element: <Support /> },
    ],
  },
  { path: "signin", element: <SignIn />, action: signinAction },
  { path: "getstarted", element: <GetStarted />, action: getAction },
  {
    path: "dashboard",
    element: <RootDashboard />,
    children: [
      {
        index: true,
        path: "",
        element: <Dashboard />,
      },
      {
        path: "buy",
        element: <Buy />,
        action: buyAction,
      },
      { path: "sell", element: <Sell /> },
      // {path:"receiver",element: <Receiver />},
      { path: "manageOrder", element: <ManageOrder /> },
      { path: "managepayment", element: <ManagePayment /> },
      { path: "accountProfile", element: <AccountProfile /> },
      { path: "logout", action: logoutAction },
    ],
  },
]);

export const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
};

export default App;
