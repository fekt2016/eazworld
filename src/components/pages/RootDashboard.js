import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Dashboard/Header";
import SideNav from "../Dashboard/SideNav";
// import Testimonial from "../Dashboard/Testimonial";
import classes from './RootDashboard.module.css';

const Dashboard = () => {
  return (
    <>
      <Header />
      <main>
        <div className={classes.container}>
          <SideNav />
          <Outlet />

        </div>
      </main>
    </>
  );
};

export default Dashboard;
