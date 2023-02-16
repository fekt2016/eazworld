import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from './components/Layout/Root';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Support from './components/pages/Support';
import SignIn from './components/pages/SignIn';
import GetStarted from './components/pages/GetStarted';
import Dashboard from './components/pages/Dashboard'
import Buy from './components/pages/Buy';
import Sell from './components/pages/Sell';
import ManageOrder from './components/pages/ManageOrder';
import ManagePayment from './components/pages/ManagePayment';
import Setting from './components/pages/Setting';
import AccountProfile from './components/pages/AccountProfile';
import Homepage from "./components/pages/Homepage";
import ErrorPage from './components/pages/Error';




const router = createBrowserRouter([
  {
    path:'/',
    element: <RootLayout />,
    errorElement: <ErrorPage  />,
    children: [
      {index: true, element: <Homepage  />},
      { path: "aboutus", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "support", element: <Support /> },
      {path: 'signin', element: <SignIn  />},
      {path: 'getstarted', element: <GetStarted  />}
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
