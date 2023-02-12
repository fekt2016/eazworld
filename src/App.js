import React from "react";
import HomePage from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Buy from "./pages/Buy";
import Sell from "./pages/Sell";
import ManageOrder from "./pages/ManageOrder";
import Setting from "./pages/Setting";
import ManagePayment from "./pages/ManagePayment";
import AccountProfile from "./pages/AccountProfile";
import About from "./pages/About";
import Contact from "./pages/Contact";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
    ],
  },

  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      {
        index: true,
        path: "buy",
        element: <Buy />,
      },
      { path: "sell", element: <Sell /> },
      { path: "manageOrder", element: <ManageOrder /> },
      { path: "setting", element: <Setting /> },
      { path: "managepayment", element: <ManagePayment /> },
      { path: "accountProfile", element: <AccountProfile /> },
    ],
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
