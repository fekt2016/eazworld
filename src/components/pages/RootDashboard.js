import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Dashboard/Header";
import SideNav from "../Dashboard/SideNav";
// import Testimonial from "../Dashboard/Testimonial";
import classes from './RootDashboard.module.css';

const RootDashboard = () => {
  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <Header  />
      </header>
      <nav className={classes.nav}>
        <SideNav  />
      </nav>
      <div className={classes.main}>
        <Outlet  />
      </div>
    </div>
  );
};

export default RootDashboard;
