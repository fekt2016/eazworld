import React from "react";
import { NavLink } from "react-router-dom";
import classes from '../Layout/NavItem.module.css';


const NavItem = () => {
  return (
    <>
      <li className={classes.item}>
        <NavLink to="/">home</NavLink>
      </li>
      <li className={classes.item}>
        <NavLink to="dashboard/buy">buy</NavLink>
      </li>
      <li className={classes.item}>
        <NavLink to="/dashboard/sell">sell</NavLink>
      </li>
      <li className={classes.item}>
        <NavLink to="aboutus">about</NavLink>
      </li>
      <li className={classes.item}>
        <NavLink to="support">support</NavLink>
      </li>
      <li className={classes.item}>
        <NavLink to="contact">contact</NavLink>
      </li>
    </>
  );
};

export default NavItem;
