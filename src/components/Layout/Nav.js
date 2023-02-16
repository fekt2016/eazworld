import React from "react";
import classes from "./Nav.module.css";
import logo from "../../assest/edo.png";
import { Link, NavLink } from "react-router-dom";
import ButtonBlack from "../UI/ButtonBlack";
import ButtonWhite from "../UI/ButtonWhite";

const Nav = () => {
  return (
    <nav className={classes.nav}>
      <img className={classes.logo} src={logo} alt="eaz logo" />
      <h1>EazWorld</h1>
      <ul className={classes.list}>
        <li>
          <NavLink to="/">home</NavLink>
        </li>
        <li>
          <NavLink to="dashboard/buy">buy</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/sell">sell</NavLink>
        </li>
        <li>
          <NavLink to="aboutus">about</NavLink>
        </li>
        <li>
          <NavLink to="support">support</NavLink>
        </li>
        <li>
          <NavLink to="contact">contact</NavLink>
        </li>
      </ul>
      <div className={classes.btn}>
        <ButtonWhite>
          <Link to='signin'>Sign In</Link>
        </ButtonWhite>
        <ButtonBlack>
          <Link to='getstarted'>get started</Link>
        </ButtonBlack>
      </div>
    </nav>
  );
};

export default Nav;
